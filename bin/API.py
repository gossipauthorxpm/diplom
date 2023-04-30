import requests


class API:
    @staticmethod
    def sendRequest(settings, body):
        response = requests.post(url = settings.getApiUrl(), data = body.getJSON(), headers = {
            'Content-Type': 'application/json',
        })
        print(response.status_code)
