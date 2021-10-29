function sunrise () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    for (let index = 0; index <= 30; index++) {
        haloring.showColor(neopixel.rgb(8 * index, 3 * index, 1 * index))
        extentionRing.showColor(neopixel.rgb(8 * index, 3 * index, 1 * index))
        haloring.show()
        extentionRing.show()
        basic.pause(200)
    }
    for (let index = 0; index <= 30; index++) {
        down = 31 - index
        haloring.showColor(neopixel.rgb(8 * down, 3 * down, 30 + 8 * index))
        extentionRing.showColor(neopixel.rgb(8 * down, 3 * down, 30 + 8 * index))
        extentionRing.show()
        haloring.show()
        basic.pause(200)
    }
    bluesky()
}
function green () {
    ring1.showColor(neopixel.colors(NeoPixelColors.Green))
    ring2.showColor(neopixel.colors(NeoPixelColors.Green))
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    strip.show()
    ring1.show()
    ring2.show()
}
function thunderstorm () {
    ring1.showColor(neopixel.colors(NeoPixelColors.White))
    ring2.showColor(neopixel.colors(NeoPixelColors.White))
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    ring1.show()
    ring2.show()
    basic.pause(500)
    for (let index = 0; index < randint(8, 12); index++) {
        ring1.showColor(neopixel.colors(NeoPixelColors.Black))
        ring2.showColor(neopixel.colors(NeoPixelColors.White))
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        haloring.show()
        extentionRing.show()
        basic.pause(randint(100, 600))
        ring1.showColor(neopixel.colors(NeoPixelColors.White))
        ring2.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        haloring.show()
        extentionRing.show()
        basic.pause(randint(75, 300))
    }
    bluesky()
}
input.onButtonPressed(Button.A, function () {
    thunderstorm()
})
function danceParty () {
    ring1.showRainbow(1, 360)
    ring2.showRainbow(1, 360)
    strip.showRainbow(1, 360)
    for (let index = 0; index < 400; index++) {
        ring1.rotate(1)
        ring2.rotate(1)
        strip.rotate(1)
        ring1.show()
        ring2.show()
        strip.show()
        basic.pause(25)
    }
    bluesky()
}
function off () {
    ring1.showColor(neopixel.colors(NeoPixelColors.Black))
    ring2.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.show()
    ring1.show()
    ring2.show()
}
function sunset () {
	
}
input.onButtonPressed(Button.AB, function () {
    sunrise()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "thunderstorm") {
        thunderstorm()
    } else if (receivedString == "sunrise") {
        sunrise()
    } else if (receivedString == "danceparty") {
        danceParty()
    } else if (receivedString == "red") {
        red()
    } else if (receivedString == "blue") {
        blue()
    } else if (receivedString == "off") {
        off()
    } else if (receivedString == "orange") {
        orange()
    } else if (receivedString == "violet") {
        violet()
    } else if (receivedString == "green") {
        green()
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    danceParty()
})
function bluesky () {
    extentionRing.showColor(neopixel.colors(NeoPixelColors.Blue))
    haloring.showColor(neopixel.colors(NeoPixelColors.Blue))
    extentionRing.show()
    haloring.show()
}
function orange () {
    ring1.showColor(neopixel.colors(NeoPixelColors.Orange))
    ring2.showColor(neopixel.colors(NeoPixelColors.Orange))
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    strip.show()
    ring1.show()
    ring2.show()
}
function blue () {
    ring1.showColor(neopixel.colors(NeoPixelColors.Blue))
    ring2.showColor(neopixel.colors(NeoPixelColors.Blue))
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    ring1.show()
    ring2.show()
}
function red () {
    ring1.showColor(neopixel.colors(NeoPixelColors.Red))
    ring2.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.show()
    ring1.show()
    ring2.show()
}
function violet () {
    ring1.showColor(neopixel.colors(NeoPixelColors.Violet))
    ring2.showColor(neopixel.colors(NeoPixelColors.Violet))
    strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    strip.show()
    ring1.show()
    ring2.show()
}
let down = 0
let strip: neopixel.Strip = null
let ring2: neopixel.Strip = null
let ring1: neopixel.Strip = null
let extentionRing: neopixel.Strip = null
let haloring: neopixel.Strip = null
radio.setGroup(42)
haloring = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
extentionRing = neopixel.create(DigitalPin.P1, 41, NeoPixelMode.RGB)
ring1 = haloring.range(0, 24)
ring2 = extentionRing.range(0, 16)
strip = extentionRing.range(17, 25)
haloring.showColor(neopixel.colors(NeoPixelColors.Black))
extentionRing.showColor(neopixel.colors(NeoPixelColors.Black))
strip.showColor(neopixel.colors(NeoPixelColors.Green))
haloring.setBrightness(64)
extentionRing.setBrightness(64)
extentionRing.show()
haloring.show()
