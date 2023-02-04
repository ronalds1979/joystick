joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    joystickbit.Vibration_Motor(100)
    basic.showString("E")
    basic.pause(100)
    basic.clearScreen()
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    joystickbit.Vibration_Motor(100)
    basic.showString("F")
    basic.pause(100)
    basic.clearScreen()
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    joystickbit.Vibration_Motor(100)
    basic.showString("D")
    basic.pause(100)
    basic.clearScreen()
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    joystickbit.Vibration_Motor(100)
    basic.showString("C")
    basic.pause(100)
    basic.clearScreen()
})
joystickbit.initJoystickBit()
joystickbit.Vibration_Motor(100)
basic.forever(function () {
    radio.sendNumber(joystickbit.getRockerValue(joystickbit.rockerType.X))
})
