import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("API_KEY")


def add_api_key(url: str):  
    return url + "?api_key=" + API_KEY