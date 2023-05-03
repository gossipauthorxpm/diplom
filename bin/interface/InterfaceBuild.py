import sys

from PyQt6.QtWidgets import QApplication

from bin.interface.MainWindow import MainWindow
from bin.settings.Settings import Settings


class InterfaceBuild:

    def __init__(self, target):
        self.__app = QApplication(sys.argv)
        self.__settings = Settings()
        self.__window = MainWindow(target, self.__settings)

    def run(self):
        try:
            self.__window.show()
            sys.exit(self.__app.exec())
        except Exception as error:
            print(...)

    def sendLog(self, param, param1):
        pass
