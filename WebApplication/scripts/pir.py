import RPi.GPIO as GPIO

PIR_input = 14				#read PIR Output
LED = 15				#LED for signalling motion detected	
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)			#choose pin no. system
GPIO.setup(PIR_input, GPIO.IN)	
GPIO.setup(LED, GPIO.OUT)
GPIO.output(LED, GPIO.LOW)

while True:
#when motion detected turn on LED
    if(GPIO.input(PIR_input)) == True:
        GPIO.output(LED, GPIO.HIGH)
    else:
        GPIO.output(LED, GPIO.LOW)