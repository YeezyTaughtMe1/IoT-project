import RPi.GPIO as GPIO
import urllib2
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(4,GPIO.OUT)
true = 1
while(true):
                try:
                        response = urllib2.urlopen('http://www.rajko.com.au/rpi/buttonStatus.php')
                        status = response.read()
                except urllib2.HTTPError, e:
                                        print e.code

                except urllib2.URLError, e:
                                        print e.args

                #print status
                if status=='ON':
				#print "setting GPIO 4 "
				GPIO.output(4,True)
                elif status=='OFF':
                                GPIO.output(4,False)
