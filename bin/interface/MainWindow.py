import PyQt6
from PyQt6.QtGui import QIcon
from PyQt6.QtWidgets import QMainWindow, QVBoxLayout, QWidget, QPushButton, QLineEdit, QHBoxLayout, QLabel, \
    QSystemTrayIcon

from bin.settings.Settings import Settings
import threading


class MainWindow(QMainWindow):
    def __init__(self, target, settings: Settings):
        super().__init__()
        self.__isStart = [True]
        self.__settings = settings
        self.__target = target
        self.__setSceleton()

    def updateSettings(self):
        self.__settings.setDisk(self.__diskCheckEdit.text())
        self.__settings.setNode(self.__nodeEdit.text())
        self.__settings.setLogin(self.__loginEdit.text())
        self.__settings.setApiKey(self.__monitorKeyEdit.text())

        self.__settings.saveSettings()

    def start(self):
        self.__isStart[0] = True
        self.__thread = threading.Thread(target=self.__target, args=[self.__settings, self.__isStart])
        self.__thread.start()

    def __openWindow(self):
        self.show()
        self.setWindowState(PyQt6.QtCore.Qt.WindowState.WindowActive)

    def hideEvent(self, e):
        self.hide()

    def __setTrayIcon(self):
        self.__trayIcon = QSystemTrayIcon()
        self.__trayIcon.show()
        self.__trayIcon.setToolTip("Обработчик железа")
        self.__trayIcon.activated.connect(self.__openWindow)
        self.__trayIcon.setIcon(QIcon("bin/interface/icons/logo.png"))
        self.setWindowIcon(QIcon("bin/interface/icons/logo.png"))

    def stop(self):
        self.__isStart[0] = False
        self.__thread.join()

    def __setButtonsEvent(self):
        self.__buttonUpdateSettings.clicked.connect(self.updateSettings)
        self.__buttonStart.clicked.connect(self.start)
        self.__buttonStop.clicked.connect(self.stop)

    def __setControls(self):
        self.__buttonUpdateSettings = QPushButton("Обновить настройки")
        self.__buttonStart = QPushButton("Запустить")
        self.__buttonStop = QPushButton("Остановить")
        self.__nodeEdit = QLineEdit(self.__settings.getNode())
        self.__nodeLabel = QLabel("Нода")
        self.__monitorKeyEdit = QLineEdit(self.__settings.getApiKey())
        self.__monitorKeyLabel = QLabel("Ключ монитора")
        self.__diskCheckEdit = QLineEdit(self.__settings.getDiskCheck())
        self.__diskCheckLabel = QLabel("Диск обработки (буква тома)")
        self.__loginEdit = QLineEdit(self.__settings.getLoginUser())
        self.__loginLabel = QLabel("Логин")

    def __setLayout(self):
        self.__mainLayout = QVBoxLayout()

        nodeLayout = QHBoxLayout()
        nodeLayout.addWidget(self.__nodeLabel)
        nodeLayout.addWidget(self.__nodeEdit)
        apiKeyLayout = QHBoxLayout()
        apiKeyLayout.addWidget(self.__monitorKeyLabel)
        apiKeyLayout.addWidget(self.__monitorKeyEdit)
        diskCheckLayout = QHBoxLayout()
        diskCheckLayout.addWidget(self.__diskCheckLabel)
        diskCheckLayout.addWidget(self.__diskCheckEdit)
        loginLayout = QHBoxLayout()
        loginLayout.addWidget(self.__loginLabel)
        loginLayout.addWidget(self.__loginEdit)
        buttonsLayout = QHBoxLayout()
        buttonsLayout.addWidget(self.__buttonUpdateSettings)
        buttonsLayout.addWidget(self.__buttonStart)
        buttonsLayout.addWidget(self.__buttonStop)

        self.__mainLayout.addLayout(nodeLayout)
        self.__mainLayout.addLayout(apiKeyLayout)
        self.__mainLayout.addLayout(diskCheckLayout)
        self.__mainLayout.addLayout(loginLayout)
        self.__mainLayout.addLayout(buttonsLayout)

    def __setContainer(self):
        self.__container = QWidget()
        self.__container.setLayout(self.__mainLayout)
        self.setCentralWidget(self.__container)

    def __setSceleton(self):
        self.setWindowTitle("Обработчик железа")
        self.__setSize()
        self.__setControls()
        self.__setButtonsEvent()
        self.__setLayout()
        self.__setContainer()
        self.__setTrayIcon()

    def __setSize(self):
        self.setGeometry(700, 200, 400, 200)
