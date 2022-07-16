from curses import delay_output
import serial
import time

port_name = "/dev/tty.usbmodem12101"
baud_rate = 9600
ser =  serial.Serial('/dev/tty.usbmodem12101', 9600, timeout=1)

THRESHOLD = 330

print("Connecting to: " + port_name)
while True:
    line = ser.readline()   # read a '\n' terminated line
    decoded_line = line.decode("utf-8").strip()
    water_level = int(decoded_line or 0)
    if water_level > THRESHOLD:
        print("There is danger of flood")