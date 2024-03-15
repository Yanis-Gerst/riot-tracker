from src.api.utils.globalVar import add_api_key
import requests


def riot_request_handler(url: str, params: dict[str, str] = {}):
    try:    
        urlWithParams = build_url(url)
        response = requests.get(urlWithParams)
        if response.status_code != 200:
            raise Exception(response.json())
        return response
    except Exception as error:
        print("Error: ", error)

def build_url(url: str, params:dict[str, str] = {}):
    urlWithParams = add_api_key(url)
    for key, value in params.items():
        urlWithParams += f"&{key}={value}"
    return urlWithParams