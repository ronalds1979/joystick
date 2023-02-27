def my_function():
    joystickbit.Vibration_Motor(100)
    basic.show_string("E")
    basic.pause(100)
    basic.clear_screen()
    radio.send_number(3)
joystickbit.on_button_event(joystickbit.JoystickBitPin.P14,
    joystickbit.ButtonType.DOWN,
    my_function)

def my_function2():
    joystickbit.Vibration_Motor(100)
    basic.show_string("F")
    basic.pause(100)
    basic.clear_screen()
    radio.send_number(4)
joystickbit.on_button_event(joystickbit.JoystickBitPin.P15,
    joystickbit.ButtonType.DOWN,
    my_function2)

def my_function3():
    joystickbit.Vibration_Motor(100)
    basic.show_string("D")
    basic.pause(100)
    basic.clear_screen()
    radio.send_number(2)
joystickbit.on_button_event(joystickbit.JoystickBitPin.P13,
    joystickbit.ButtonType.DOWN,
    my_function3)

def my_function4():
    joystickbit.Vibration_Motor(100)
    basic.show_string("C")
    basic.pause(100)
    basic.clear_screen()
    radio.send_number(1)
joystickbit.on_button_event(joystickbit.JoystickBitPin.P12,
    joystickbit.ButtonType.DOWN,
    my_function4)

joystickbit.init_joystick_bit()
joystickbit.Vibration_Motor(100)
radio.set_group(7)
radio.send_number(7)

def on_forever():
    radio.send_value("x", joystickbit.get_rocker_value(joystickbit.rockerType.X))
    radio.send_value("y", joystickbit.get_rocker_value(joystickbit.rockerType.Y))
basic.forever(on_forever)
