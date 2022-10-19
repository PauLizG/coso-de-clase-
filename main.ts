input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    H.change(LedSpriteProperty.Y, -1)
    basic.pause(200)
})
input.onButtonPressed(Button.A, function () {
    H.change(LedSpriteProperty.X, -1)
    basic.pause(200)
})
input.onPinPressed(TouchPin.P2, function () {
    H.change(LedSpriteProperty.Y, 1)
    basic.pause(200)
})
input.onButtonPressed(Button.B, function () {
    H.change(LedSpriteProperty.X, 1)
    basic.pause(200)
})
let H: game.LedSprite = null
H = game.createSprite(0, 2)
let V = game.createSprite(randint(0, 4), randint(0, 4))
let V2 = game.createSprite(randint(0, 4), randint(0, 4))
let V3 = game.createSprite(randint(0, 4), randint(0, 4))
H.set(LedSpriteProperty.Blink, 450)
let Puntuacion = 0
basic.forever(function () {
    if (H.isTouching(V)) {
        V.delete()
        Puntuacion += 1
        basic.showIcon(IconNames.Yes)
    }
    if (H.isTouching(V2)) {
        V2.delete()
        Puntuacion += 1
        basic.showIcon(IconNames.Yes)
    }
    if (H.isTouching(V3)) {
        V3.delete()
        Puntuacion += 1
        basic.showIcon(IconNames.Yes)
    }
    if (Puntuacion == 3) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.OnceInBackground)
        H.delete()
        V.delete()
        for (let index = 0; index < 2; index++) {
            basic.showIcon(IconNames.Yes)
        }
        basic.showString("FELICIDADES")
    }
})
loops.everyInterval(3000, function () {
    if (!(V.isDeleted())) {
        V.delete()
        V = game.createSprite(randint(0, 4), randint(0, 4))
    }
    if (!(V2.isDeleted())) {
        V2.delete()
        V2 = game.createSprite(randint(0, 4), randint(0, 4))
    }
    if (!(V3.isDeleted())) {
        V3.delete()
        V3 = game.createSprite(randint(0, 4), randint(0, 4))
    }
})
