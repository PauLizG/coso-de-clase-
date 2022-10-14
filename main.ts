input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
let H = game.createSprite(0, 2)
let V = game.createSprite(randint(0, 4), randint(0, 4))
H.set(LedSpriteProperty.Blink, 450)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        H.change(LedSpriteProperty.X, -1)
        basic.pause(200)
    }
    while (input.buttonIsPressed(Button.B)) {
        H.change(LedSpriteProperty.X, 1)
        basic.pause(200)
    }
    while (input.logoIsPressed()) {
        H.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
    while (input.pinIsPressed(TouchPin.P2)) {
        H.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    if (H.isTouching(V)) {
        music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.OnceInBackground)
        H.delete()
        V.delete()
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Heart)
        }
        basic.showString("GAME OVER")
    }
})
