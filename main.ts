let pen_status = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    turtle.forward(1)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    if (pen_status == 0) {
        turtle.pen(TurtlePenMode.Down)
        pen_status = 1
    } else {
        turtle.pen(TurtlePenMode.Up)
        pen_status = 0
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    turtle.turnRight()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    turtle.home()
})
