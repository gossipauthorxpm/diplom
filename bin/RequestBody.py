import json

import psutil


class RequestBody:
    def __init__(self, keyStand, loginUser, node):
        self.__keyStand = keyStand
        self.__cpuTemp = None
        self.__gpuTemp = None
        self.__cpuPercentUsage = None
        self.__virtualMemoryPercentUsage = None
        self.__diskPercentUsage = None
        self.__softInterruptsCount = None
        self.__activeUsersSystemCount = None
        self.__loginUser = loginUser
        self.__node = node
        if psutil.WINDOWS:
            self.__system = "WINDOWS"
        else:
            self.__system = "LINUX"

    def setCpuPercentUsage(self, value):
        self.__cpuPercentUsage = value

    def getCpuTemp(self):
        return self.__cpuTemp

    def getGpuTemp(self):
        return self.__gpuTemp

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

    def getKeyStand(self):
        return self.__keyStand

    def getJSON(self):
        return json.dumps({
            "keyStand": self.__keyStand,
            "node": self.__node,
            "loginUser": self.__loginUser,
            "cpuTemp": self.__cpuTemp,
            "gpuTemp": self.__gpuTemp,
            "cpuPercentUsage": self.__cpuPercentUsage,
            "virtualMemoryPercentUsage": self.__virtualMemoryPercentUsage,
            "diskPercentUsage": self.__diskPercentUsage,
            "softInterruptsCount": self.__softInterruptsCount,
            "activeUserSystem": self.__activeUsersSystemCount,
            "systemOC": self.__system
        })
