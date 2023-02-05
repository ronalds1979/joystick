joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    joystickbit.Vibration_Motor(100)
    basic.showString("E")
    basic.pause(100)
    basic.clearScreen()
    radio.sendNumber(3)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    joystickbit.Vibration_Motor(100)
    basic.showString("F")
    basic.pause(100)
    basic.clearScreen()
    radio.sendNumber(4)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    joystickbit.Vibration_Motor(100)
    basic.showString("D")
    basic.pause(100)
    basic.clearScreen()
    radio.sendNumber(2)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    joystickbit.Vibration_Motor(100)
    basic.showString("C")
    basic.pause(100)
    basic.clearScreen()
    radio.sendNumber(1)
})
joystickbit.initJoystickBit()
joystickbit.Vibration_Motor(100)
radio.setGroup(7)
radio.sendNumber(7)
basic.forever(function () {
    radio.sendValue("x", joystickbit.getRockerValue(joystickbit.rockerType.X))
    radio.sendValue("y", joystickbit.getRockerValue(joystickbit.rockerType.Y))
})
