from dotenv import load_dotenv
import os 
import requests
import json

load_dotenv()
api_key = os.environ.get('riot_api_key')
root = 'https://europe.api.riotgames.com'
euw1root = 'https://euw1.api.riotgames.com'

# recuperer puuid avec le nom et le tag du compte
def get_puuid(gameName, gameTag):
    gameName = gameName.replace(' ', '%20')
    gameTag = gameTag.replace(' ', '%20')
    
    root = 'https://europe.api.riotgames.com'
    endpoint = f'/riot/account/v1/accounts/by-riot-id/{gameName}/{gameTag}'
    
    response = requests.get(root + endpoint + '?api_key=' + api_key)
    return response.json()['puuid']

def get_id_from_puudi(puuid):
    
    endpoint = f'/riot/account/v1/accounts/by-puuid/{puuid}'
    response = requests.get(root + endpoint + '?api_key=' + api_key)
    
    return (response.json()['gameName'],'#'+response.json()['tagLine'])

def get_players_last_matches_id(players_puuid, matches_number):
    
    if matches_number < 1:
        endpoint = f'/lol/match/v5/matches/by-puuid/{players_puuid}/ids?start=0&count=1'
    elif matches_number > 100:
        endpoint = f'/lol/match/v5/matches/by-puuid/{players_puuid}/ids?start=0&count=100'
    else:
        endpoint = f'/lol/match/v5/matches/by-puuid/{players_puuid}/ids?start=0&count={matches_number}'
    
    response = requests.get(root + endpoint + '&api_key=' + api_key)
    return response.json()

def get_champion_by_id(id):
    if type(id) == int : id = f'{id}'
    file_path = os.path.dirname(__file__) + '\\JSONs\\champion.json'
    file = open(file_path, "r", encoding='utf8')
    file_data = json.load(file)
    
    for champion in file_data['data'].values():
        if champion['key'] == id : return champion['name']
    
    return "None"

def get_summoner_id_by_puuid(puuid):
    
    endpoint = f'/lol/summoner/v4/summoners/by-puuid/'
    response = requests.get(euw1root + endpoint + puuid + '?api_key=' + api_key)
    
    return response.json()['id']

def get_player_solo_stats_by_suid(summoner):
    
    endpoint = '/lol/league/v4/entries/by-summoner/'
    response = requests.get(euw1root + endpoint + summoner + '?api_key=' + api_key)
    return response.json()[0]

def get_player_flex_stats_by_suid(summoner):
    
    endpoint = '/lol/league/v4/entries/by-summoner/'
    response = requests.get(euw1root + endpoint + summoner + '?api_key=' + api_key)
    return response.json()[1]

