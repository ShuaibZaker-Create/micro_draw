let pen_status = 0
input.onButtonPressed(Button.A, function () {
    turtle.forward(1)
})
input.onGesture(Gesture.FreeFall, function () {
    Wait(1)
    control.reset()
})
input.onGesture(Gesture.ScreenDown, function () {
    Wait(1)
    control.reset()
})
input.onButtonPressed(Button.AB, function () {
    if (pen_status == 0) {
        turtle.pen(TurtlePenMode.Down)
        pen_status = 1
    } else {
        turtle.pen(TurtlePenMode.Up)
        pen_status = 0
    }
})
input.onButtonPressed(Button.B, function () {
    turtle.turnRight()
})
input.onGesture(Gesture.Shake, function () {
    Wait(1)
    control.reset()
})
input.onGesture(Gesture.LogoDown, function () {
    Wait(1)
    control.reset()
})
function Wait (num: number) {
    for (let index = 0; index < num; index++) {
        for (let index = 0; index < 1000; index++) {
            control.waitMicros(1000)
        }
    }
}
