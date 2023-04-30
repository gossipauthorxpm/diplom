from bin.Parser import Parser
from bin.settings.Settings import Settings


class InfoBuilder:
    def __init__(self):
        self.__settings = Settings()
        self.__parser = Parser(self.__settings.getDiskCheck())
        self.__parser.getTemperatureSensors()
