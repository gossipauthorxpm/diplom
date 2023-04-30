import json


class Settings:
    def __init__(self):
        self.__settings = self.parseSettings()

    def getDiskCheck(self):
        return self.__settings['diskCheck']

    def getApiKey(self):
        return self.__settings['apiKey']

    def getTimeout(self):
        return self.__settings['timeout']

    @staticmethod
    def parseSettings():
        with open("bin/settings/settings.json", encoding = "UTF-8") as file:
            stringData = ""
            for item in file.readlines():
                stringData += item
            return json.loads(stringData)
