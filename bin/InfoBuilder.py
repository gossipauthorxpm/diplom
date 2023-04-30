from bin.Parser import Parser
from bin.RequestBody import RequestBody
from bin.settings.Settings import Settings


class InfoBuilder:
    def __init__(self):
        self.__settings = Settings()
        self.__parser = Parser(self.__settings.getDiskCheck())
        self.__requestBody = RequestBody()
        self.__setRequestBody()

    def __setRequestBody(self):
        self.__requestBody.setActiveUsersSystemCount(len(self.__parser.getActiveNowUsers()))
        self.__requestBody.setVirtualMemoryPercent(self.__parser.getPercentVirtualMemoryUsage())
        self.__requestBody.setDiskPercentUsage(self.__parser.getPercentUsageDisk())
        self.__requestBody.setSoftInterruptsCount(self.__parser.getSoftInterrupts())
        print()
    def getRequestBody(self):
        return self.__requestBody
