from fastapi import APIRouter
from src.api.models.accountModel import get_account_data


# 0GyFmfQmOrgt20N1ibvVuYcBgLhlrM3g5_5kQI9Z-z9pxu5AZB2e_-4DOEqcjcpBHh3JRBe55j9dNg
router = APIRouter()


@router.get("/account/{riotId}/{tagLine}")
def read_accont(riotId: str, tagLine: str):
    accountData = get_account_data(riotId, tagLine)
    return {"Hello": "World"}
    