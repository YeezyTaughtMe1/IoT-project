import RPi.GPIO as GPIO
import time

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
# Read output from PIR motion sensor
GPIO.setup(14, GPIO.IN)

while True:
    inp = GPIO.input(14)
    # When output from motion sensor is HIGH
    if 1 == inp:
        print("motion detected")

    time.sleep(0.1)
