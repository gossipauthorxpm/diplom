import time

from bin.API import API
from bin.InfoBuilder import InfoBuilder
from bin.settings.Settings import Settings


def main():
    settings = Settings()
    while True:
        try:
            time.sleep(settings.getTimeout())
            builder = InfoBuilder(settings)
            API.sendRequest(settings, builder.getRequestBody())
        except Exception as error:
            print(error.__str__())
            continue


if __name__ == '__main__':
    main()
