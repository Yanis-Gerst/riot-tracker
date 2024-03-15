from pydantic import BaseModel
from typing import Literal
from src.api.utils.requestHandler import riot_request_handler
import requests

#TODO: Handle region
class MacthesQuery(BaseModel): 
    type: Literal["ranked", "normal", ""]
    start: str
    stop: str

def get_matches(id: str, matchSelector: MacthesQuery):
    return riot_request_handler(f"https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/{id}/ids", vars(matchSelector))

def get_match_data(matchId: str):
    return riot_request_handler(f"https://europe.api.riotgames.com/lol/match/v5/matches/{matchId}")

def get_player_matches_data(puuid: str):
    query = MacthesQuery(**{
        "type": "",
        "start": "0",   
        "stop": "20"
    })
    
    historyGameId = get_matches(puuid, query).json()
    historyGame = []
    for matchId in historyGameId:
        historyGame.append(get_match_data(matchId).json())

    print(historyGame)

