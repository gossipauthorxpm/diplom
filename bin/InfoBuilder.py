import psutil

from core.Parser import Parser
from bin.RequestBody import RequestBody


class InfoBuilder:
    def __init__(self, settings):
        self.__settings = settings
        self.__parser = Parser(self.__settings.getDiskCheck())
        self.__requestBody = RequestBody()
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
                    if not isSelectGPU:
                        if sensor.Name == "GPU Core":
                            self.__requestBody.setGpuTemp(sensor.Value)
                            isSelectGPU = True
                    if not isSelectCPU:
                        if sensor.Name == "CPU Package":
                            self.__requestBody.setCpuTemp(sensor.Value)
                            isSelectCPU = True

        else:
            pass

    def getRequestBody(self):
        return self.__requestBody
