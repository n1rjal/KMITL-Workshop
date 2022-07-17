
import serial
import asyncio
import websockets


port_name = "/dev/tty.usbmodem12201"
baud_rate = 9600
ser =  serial.Serial(port=port_name, baudrate=9600, timeout=1)

FLOOD_THRESHOLD = 330

discord_url = "disord_url"


def getValueFromSensor():
    line = ser.readline()   # read a '\n' terminated line
    decoded_line = line.decode("utf-8").strip() # 103
    water_level = int(decoded_line or 0)
    print("Water level: " + str(water_level))
    return water_level


#!/usr/bin/env python

import asyncio
import websockets

async def echo(websocket):
    async for message in websocket:
        print("Received: " + message)
        water_level = getValueFromSensor()
        await websocket.send(str(water_level))

async def main():
    async with websockets.serve(echo, "localhost", 8765):
        await asyncio.Future()  # run forever

asyncio.run(main())

