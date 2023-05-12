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

    def getLoginUser(self):
        return self.__settings['loginUser']

    def getApiUrl(self):
        return self.__settings['apiPath']

    def getNode(self):
        return self.__settings['node']

    def setNode(self, value):
        self.__settings['node'] = value

    def setApiKey(self, value):
        self.__settings['apiKey'] = value

    def setDisk(self, value):
        self.__settings['diskCheck'] = value

    def setLogin(self, value):
        self.__settings['loginUser'] = value

    @staticmethod
    def parseSettings():
        with open("bin/settings/settings.json", encoding="UTF-8") as file:
            stringData = ""
            for item in file.readlines():
                stringData += item
            return json.loads(stringData)

    def saveSettings(self):
        with open("bin/settings/settings.json", mode="w", encoding="UTF-8") as file:
            dump = json.dumps(self.__settings)
            file.write(dump)
