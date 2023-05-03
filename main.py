import time

from bin.API import API
from bin.InfoBuilder import InfoBuilder
from bin.interface.InterfaceBuild import InterfaceBuild


def main(settings, isStart: [bool]):
    while isStart[0]:
        print(isStart)
        try:
            time.sleep(settings.getTimeout())
            builder = InfoBuilder(settings)
            API.sendRequest(settings, builder.getRequestBody())
        except Exception as error:
            print(error.__str__())
            continue


if __name__ == '__main__':
    interface = InterfaceBuild(main)
    interface.run()
