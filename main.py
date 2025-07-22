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

def on_logo_pressed():
    turtle.home()
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)
