from src.api.utils.requestHandler import riot_request_handler
from src.api.models.matchesModel import get_player_matches_data
import requests

# https://ddragon.leagueoflegends.com/cdn/14.5.1/img/profileicon/{profileIconId}.png


def get_riot_account(riotId, tagLine):
    return riot_request_handler(f"https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/" + riotId + "/" + tagLine)

def get_summoner_data(id: str):
    return riot_request_handler(f"https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/{id}" )


def remove_useless_data(summonerData):
    del summonerData["id"]
    del summonerData["accountId"]
    del summonerData["puuid"]
    del summonerData["revisionDate"]
    del summonerData["profileIconId"]   

def get_lol_current_version():
    return requests.get("https://ddragon.leagueoflegends.com/api/versions.json").json()[0]

def get_profile_img_src(profileIconId: int, lolVersion: str):
    return "https://ddragon.leagueoflegends.com/cdn/" + str(profileIconId) + "/img/profileicon/" + lolVersion + ".png"

def get_account_data(riotId: str, tagLine: str):
    accountPuuid = get_riot_account(riotId, tagLine).json()["puuid"]
    summonerData = get_summoner_data(accountPuuid).json()
    currentLolVersion = get_lol_current_version()
    summonerData["profileIconSrc"] =  get_profile_img_src(summonerData["profileIconId"], currentLolVersion)
    summonerData["name"] = riotId + "#" + tagLine
    remove_useless_data(summonerData)
    return summonerData


 


    




