import psutil

from core.Parser import Parser
from bin.RequestBody import RequestBody


class InfoBuilder:
    def __init__(self, settings):
        self.__settings = settings
        self.__parser = Parser(self.__settings.getDiskCheck())
        self.__requestBody = RequestBody(self.__settings.getApiKey())
        self.__setRequestBody()

    def __setRequestBody(self):
        self.__requestBody.setActiveUsersSystemCount(len(self.__parser.getActiveNowUsers()))
        self.__requestBody.setVirtualMemoryPercent(self.__parser.getPercentVirtualMemoryUsage())
        self.__requestBody.setDiskPercentUsage(self.__parser.getPercentUsageDisk())
        self.__requestBody.setSoftInterruptsCount(self.__parser.getSoftInterrupts())

        if psutil.WINDOWS:
            isSelectCPU = False
            isSelectGPU = False
            for item in self.__parser.getTemperatureSensors().Hardware:
                item.Update()

                for sensor in item.Sensors:
                    # print(sensor.Name)
                    if sensor.Name == "CPU Total":
                        self.__requestBody.setCpuPercentUsage(sensor.Value)
                    if not isSelectGPU:
                        if sensor.Name == "GPU Core":
                            self.__requestBody.setGpuTemp(sensor.Value)
                            isSelectGPU = True
                    if not isSelectCPU:
                        if sensor.Name.find("CPU CCD") != -1:
                            self.__requestBody.setCpuTemp(sensor.Value)
        else:
            pass

    def getRequestBody(self):
        return self.__requestBody
