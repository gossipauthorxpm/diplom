class RequestBody:
    def __init__(self):
        self.__cpuTemp = None
        self.__gpuTemp = None
        self.__virtualMemoryPercentUsage = None
        self.__diskPercentUsage = None
        self.__softInterruptsCount = None
        self.__activeUsersSystemCount = None

    def setCpuTemp(self, value):
        self.__cpuTemp = value

    def setGpuTemp(self, value):
        self.__gpuTemp = value

    def setVirtualMemoryPercent(self, value):
        self.__virtualMemoryPercentUsage = value

    def setDiskPercentUsage(self, value):
        self.__diskPercentUsage = value

    def setSoftInterruptsCount(self, value):
        self.__softInterruptsCount = value

    def setActiveUsersSystemCount(self, value):
        self.__activeUsersSystemCount = value

    def getRequestBodyDict(self):
        return {
            "cpu-temp": self.__cpuTemp,
            "gpu-temp": self.__gpuTemp,
            "virtual-memory-percent-usage": self.__virtualMemoryPercentUsage,
            "disk-percent-usage": self.__diskPercentUsage,
            "soft-interrupts-count": self.__softInterruptsCount,
            "active-user-system": self.__activeUsersSystemCount
        }
