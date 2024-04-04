from fastapi import APIRouter
from src.api.models.accountModel import get_account_data


# 0GyFmfQmOrgt20N1ibvVuYcBgLhlrM3g5_5kQI9Z-z9pxu5AZB2e_-4DOEqcjcpBHh3JRBe55j9dNg
router = APIRouter()


@router.get("/api/account/{riotId}/{tagLine}")
def read_accont(riotId: str, tagLine: str):
    #accountData = get_account_data(riotId, tagLine)
    return {
        "player": {
            "icon": "https://ddragon.leagueoflegends.com/cdn/14.5.1/img/profileicon/3350.png",
            "level": 165,
            "name": "Doigby"
        },
        "currentRank": {
            "rankedSolo": {
                "lp": 94,
                "win": 13,
                "lose": 4,
                "rank": {
                    "tier": "gold",
                    "division": 2
                }
            },
            "rankedFlex": {
                "lp": 94,
                "win": 4,
                "lose": 13,
                "rank": {
                    "tier": "platinium",
                    "division": 4
                }
            },
        },
        "seasonsRank": [
            {
                "season": "13.2",
                "rank": {
                    "tier": "challenger",
                    "division": 0
                }
            },
              {
                "season": "14",
                "rank": {
                    "tier": "diamond",
                    "division": 1
                }
            }
        ],
        "overallStats":[
            {
                "gameType": "rankedSolo",
                "playTime": 128,
                "averageKDA": {
                    "kill": 3,
                    "death": 2,
                    "assist": 1.3
                },
                "averageGoldMin": 413,
                "goldDiff": 607,
                "xpDiff": 413,
                "csDiff": 8,
                "averageCsMin": 7.4,
                "visionScore": 0.2,
                "damagePerMin": 314,
                "soloKill": 104,
                "mainChampions": ["https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/Garen.png", "https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/Olaf.png", "https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/Trundle.png"]
            }
        ],
      "matchHistory": [
            {
                "isWin": True,
                "gameType": "rankedSolo",
                "date": "2024/02/03",
                "gameDuration": 32,
                "championPlay": "Garen",
                "championIconSrc": "https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/Garen.png",
                "summoners": ["https://ddragon.leagueoflegends.com/cdn/14.5.1/img/spell/SummonerFlash.png", "https://ddragon.leagueoflegends.com/cdn/14.5.1/img/spell/SummonerDot.png"],
                "runes": ["Conqueror", "Sorcery"],
                "averageKDA": {
                    "kill": 3,
                    "death": 2,
                    "assists": 1.3
                },
                "cs": {
                    "perMinute": 8.2,
                    "total": 292,
                    "diffAt14": 8
                },
                "vision": {
                    "total": 24,
                    "perMinute": 0.3,
                    "diffAt14": 2
                },
                "items": ["https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/1001.png", "https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/1001.png", "https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/1001.png", "https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/1001.png", "https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/1001.png", "https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/1001.png"],
                "trinket": "",
                "blueTeam": [
                    {
                        "champion": "Garen",
                        "championIconSrc": "https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/Garen.png",
                        "summonerName": "DoigbyLeSeulEtLunique"
                    },
                     {
                        "champion": "Taliyah",
                        "championIconSrc": "https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/Taliyah.png",
                        "summonerName": "Player"
                    },
                     {
                        "champion": "Taliyah",
                        "championIconSrc": "https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/Taliyah.png",
                        "summonerName": "Player"
                    },
                     {
                        "champion": "Taliyah",
                        "championIconSrc": "https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/Taliyah.png",
                        "summonerName": "Player"
                    },
                     {
                        "champion": "Taliyah",
                        "championIconSrc": "https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/Taliyah.png",
                        "summonerName": "Player"
                    },
                ],
                "redTeam": [
                    {
                        "champion": "Kayle",
                        "championIconSrc": "https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/Kayle.png",
                        "summonerName": "JaiOserEssayerDePrendreUnCanon"
                    },
                     {
                        "champion": "Taliyah",
                        "championIconSrc": "https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/Taliyah.png",
                        "summonerName": "Player"
                    },
                     {
                        "champion": "Taliyah",
                        "championIconSrc": "https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/Taliyah.png",
                        "summonerName": "Player"
                    },
                     {
                        "champion": "Taliyah",
                        "championIconSrc": "https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/Taliyah.png",
                        "summonerName": "Player"
                    },
                     {
                        "champion": "Taliyah",
                        "championIconSrc": "https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/Taliyah.png",
                        "summonerName": "Player"
                    },
                ]
            }
        ],
        "championsStats": [
            {
                "championIconSrc": "https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/Garen.png",
                "name": "Garen",
                "lpGain": 285,
                "kda": {
                    "kill": 3.5,
                    "death": 2.1,
                    "assists": 1.3
                },
                "winRate": 85,
                "numberOfGames": 51
            },
            {
                "championIconSrc": "https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/Olaf.png",
                "name": "Olaf",
                "lpGain": 102,
                "kda": {
                    "kill": 3.3,
                    "death": 2.6,
                    "assists": 1.3
                },
                "winRate": 67,
                "numberOfGames": 24
            },
        ],
        "friendsPlayers": [
            {
                "name": "Maskass",
                "icon": "https://ddragon.leagueoflegends.com/cdn/14.5.1/img/profileicon/3350.png",
                "win": 100,
                "lose": 0
            },
               {
                "name": "Maskass",
                "icon": "https://ddragon.leagueoflegends.com/cdn/14.5.1/img/profileicon/3350.png",
                "win": 100,
                "lose": 0
            }
        ]

    }

