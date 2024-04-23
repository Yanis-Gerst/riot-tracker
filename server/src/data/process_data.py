from dotenv import load_dotenv
import os 
import requests
import json
from get_data import *

def game_player_stats(player_puuid, game_id):
    """
        Retourne les statistiques d'un joueur
        dans une partie donnée par le biais
        d'un dictionnaire donné sous cette forme : 
                    'name': -> str
                    'level':  -> str
                    'gameType':  -> str
                    'gameDuration':  -> int
                    'isWin':  -> boolean 
                    'championPlay':  -> str
                    'championLevel':  -> int
                    'kills':  -> int
                    'deaths':  -> int
                    'assists':  -> int
                    'kda':  -> float
                    'gold/min': -> float
                    'cs': -> int
                    'cs/min': -> float
                    'blueTeam': -> List[dict{str, str}]
                    'redTeam': -> List[dict{str, str}]
    """
    endpoint = '/lol/match/v5/matches/'
    response = requests.get(root + endpoint + game_id + '?api_key=' + api_key).json()
    dict = {}
    blueTeamId = None
    blueTeam = []
    redTeam = []
    
    
    for player in response['info']['participants']:
        if blueTeamId == None:
            blueTeamId = player['teamId']
            blueTeam.append(
                {'champion':player['championName'],
                 'summonerName':player['summonerName']}
            )
        elif player['teamId'] == blueTeamId:
            blueTeam.append(
                {'champion':player['championName'],
                 'summonerName':player['summonerName']}
            )
        else:
            redTeam.append(
                {'champion':player['championName'],
                 'summonerName':player['summonerName']}
            )
        if player['puuid'] == player_puuid:
            
            dict = {'name':player['summonerName'],
                    'level':player['summonerLevel'],
                    'gameType':response['info']['gameMode'],
                    'gameDuration':player['timePlayed'],
                    'isWin':player['win'],
                    'championPlay':player['championName'],
                    'championLevel':player['champLevel'],
                    'kills':player['kills'],
                    'deaths':player['deaths'],
                    'assists':player['assists'],
                    'kda':player['challenges']['kda'],
                    'gold/min':player['challenges']['goldPerMinute'],
                    'cs':player['totalMinionsKilled'],
                    'cs/min':player['totalMinionsKilled']/(player['timePlayed']/60),
                    'blueTeam':None,
                    'redTeam':None}
    
    dict['blueTeam'] = blueTeam
    dict['redTeam'] = redTeam
    
    return dict

def ranked_stats(player_summoner_id):
    """
        Retourne les statistiques des
        modes classés pour le joueur sous
        la forme :
            dict{
                'solo': -> dict{'tier': -> str
                                'rank': -> str
                                'leaguePoints': -> str
                                'wins': -> str
                                'losses':-> str
                                }
                'flex': -> dict{'tier': -> str
                                'rank': -> str
                                'leaguePoints': -> str
                                'wins': -> str
                                'losses':-> str
                                } 
            }
    """
    endpoint = '/lol/league/v4/entries/by-summoner/'
    response = requests.get(euw1root + endpoint + player_summoner_id + '?api_key=' + api_key).json()
    
    for elt in response:
        del elt['leagueId']
        del elt['queueType']
        del elt['summonerId']
        del elt['veteran']
        del elt['inactive']
        del elt['freshBlood']
        del elt['hotStreak']
    dict = {'solo':response[0], 'flex':response[1]}
    
    return dict

def last_games_player_stats(player_puuid, games_count=None):
    """
        Récupère les statistiques des games_count
        dernières parties d'un joueur
        et les stocke dans une liste
    """
    if games_count == None: games_count = 20
    elif games_count < 1 : games_count = 1
    elif games_count > 100 : games_count = 70   # 70 Valeur maximale experimentale pour ne pas avoir d'erreurs
                                                # liées au montant de requetes max avec un cle api de développement    
    games_stats = []
    
    games = get_players_last_matches_id(player_puuid, games_count)
    for game in games :
        games_stats.append(game_player_stats(player_puuid, game))
        
    return games_stats

# TO DO : Methode pour recuperer les amis

def store_in_json(filename, data):
    # filename ne doit pas contennir le .json
    file = open(f'{filename}.json', 'x')
    json.dump(data, file)
    file.close()
    
