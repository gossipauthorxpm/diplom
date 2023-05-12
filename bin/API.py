import requests

from bin.Points import Points


class API:
    @staticmethod
    def sendRequest(settings, body):
        checkKeyInBase = requests.get(url=Points.IS_STAND_INTO_BASE_FOR_KEY + body.getKeyStand())
        if checkKeyInBase.status_code == 200:
            response = requests.post(url=settings.getApiUrl(), data=body.getJSON(), headers={
                'Content-Type': 'application/json',
            })
            print(response.text)

        print(checkKeyInBase.status_code)
