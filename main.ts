input.onButtonPressed(Button.A, function () {
    文字 += 1
})
input.onButtonPressed(Button.AB, function () {
    文字 += 10
})
input.onButtonPressed(Button.B, function () {
    文字 += -1
})
let 文字 = 0
basic.forever(function () {
    basic.showNumber(文字)
    basic.showString(String.fromCharCode(文字))
    basic.pause(500)
})
