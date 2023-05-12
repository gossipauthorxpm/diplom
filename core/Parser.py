import os
import psutil



class Core:
    def __init__(self):
        self.__handle = None
        if psutil.LINUX:
            pass
        else:  
            import clr
            from OpenHardwareMonitor import Hardware
            self.__fileDll = f"{os.getcwd()}/core/OpenHardwareMonitorLib.dll"
            clr.AddReference(self.__fileDll)
            self.__handle = Hardware.Computer()
            self.__handle.MainBoardEnabled = True
            self.__handle.CPUEnabled = True
            self.__handle.RAMEnabled = True
            self.__handle.GPUEnabled = True
            self.__handle.HDDEnabled = True
            self.__handle.Open()
            pass

    def getHandler(self):
        return self.__handle


class Parser:

    def __init__(self, disk: str):
        """
        :param disk: Метка тома диска
        """

        self.__sensors = Core().getHandler()

        self.__cpuStats = psutil.cpu_stats()
        if psutil.LINUX:
            self.__diskUsage = psutil.disk_usage
        else:
            self.__diskUsage = psutil.disk_usage(path=f"{disk}:")

        self.__virtualMemory = psutil.virtual_memory()
        self.__users = psutil.users()

    def getSoftInterrupts(self):
        # получение прерывания процессора со времени включения
        return self.__cpuStats.soft_interrupts

    def getPercentUsageDisk(self):
        # получение процента занятого места на выбранном диске
        if psutil.LINUX:
            return None
        return self.__diskUsage

    def getPercentVirtualMemoryUsage(self):
        # получение процента занятого места в оперативной памяти
        return self.__virtualMemory.percent

    def getTemperatureSensors(self):
        # Возвращает информацию с сенсоров. На разных системах возвращается разные типы данных.
        return self.__sensors

    def getActiveNowUsers(self):
        # возвращает число пользователей пк в данный момент
        return self.__users

