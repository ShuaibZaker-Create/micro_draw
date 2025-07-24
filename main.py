pen_status = 0

def on_button_pressed_a():
    turtle.forward(1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global pen_status
    if pen_status == 0:
        turtle.pen(TurtlePenMode.DOWN)
        pen_status = 1
    else:
        turtle.pen(TurtlePenMode.UP)
        pen_status = 0
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    turtle.turn_right()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_logo_down():
    for index in range(100):
        control.wait_micros(6000)
    for index2 in range(1000):
        control.wait_micros(4000)
    control.reset()
input.on_gesture(Gesture.LOGO_DOWN, on_gesture_logo_down)
