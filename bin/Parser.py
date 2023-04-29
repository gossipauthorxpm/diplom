import os

import psutil
import clr


class Core:
    def __init__(self):
        self.__fileDll = f"{os.getcwd()}/core/OpenHardwareMonitorLib.dll"
        clr.AddReference(self.__fileDll)

        from OpenHardwareMonitor import Hardware

        self.__handle = Hardware.Computer()
        self.__handle.MainboardEnabled = True
        self.__handle.CPUEnabled = True
        self.__handle.RAMEnabled = True
        self.__handle.GPUEnabled = True
        self.__handle.HDDEnabled = True
        self.__handle.Open()

    def getHandler(self):
        return self.__handle


class Parser:

    def __init__(self, disk: str):
        """
        :param disk: Метка тома диска
        """
        if psutil.WINDOWS:
            self.__handlerHardware = Core().getHandler()
        if psutil.MACOS or psutil.LINUX:
            self.__processorSensors = psutil.sensors_temperatures()
        else:
            self.__processorSensors = None
        self.__cpuStats = psutil.cpu_stats()
        self.__diskUsage = psutil.disk_usage(f"{disk.lower()}:")

        self.__virtualMemory = psutil.virtual_memory()
        self.__users = psutil.users()

    def getSoftInterrupts(self):
        # получение прерывания процессора со времени включения
        return self.__cpuStats.soft_interrupts

    def getPercentUsageDisk(self):
        # получение процента занятого места на выбранном диске
        return self.__diskUsage.percent

    def getPercentVirtualMemoryUsage(self):
        # получение процента занятого места в оперативной памяти
        return self.__virtualMemory.percent

    def getTemperatureProcessor(self):
        # возвращает текущую температуру процессора и прочую информацию только LINUX и MACOS
        return self.__processorSensors

    def getActiveNowUsers(self):
        # возвращает число пользователей пк в данный момент
        return self.__users
