// On start, set ultrasonic pins to 
// (Trig:P2 | Echo:P12) and
// set servo position to 0 degree.
rekabitUltrasonic.setUltrasonicTrigEcho(RekabitUltrasonicIOPins.p2_p12)
rekabit.setServoPosition(ServoChannel.S1, 0)
// Always check ultrasonic reading. If an object is detected at less than 10 cm away, then...
// 
// play 'power up' melody 
// 
// wait 500 ms
// 
// set servo position to 110 degrees (i.e. to open the mouth and raise the holder to drop the coin.
// 
// wait 500 ms
// 
// set servo position back to 0 degree (i.e. to close the mouth and return the holder to initial position)
// 
// 
// 
// 
// else,
// 
// clear screen
basic.forever(function () {
    if (rekabitUltrasonic.compareDistance(RekabitAnalogCompareType.LessThan, 10)) {
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        basic.pause(500)
        rekabit.setServoPosition(ServoChannel.S1, 110)
        basic.pause(500)
        rekabit.setServoPosition(ServoChannel.S1, 0)
        basic.pause(1000)
    }
})
