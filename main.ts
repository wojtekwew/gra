input.onButtonPressed(Button.A, function () {
    gracz.move(-1)
})
input.onButtonPressed(Button.B, function () {
    gracz.move(1)
})
let xmeteor = 0
let gracz: game.LedSprite = null
gracz = game.createSprite(2, 3)
let speed = 900
let meteor = game.createSprite(randint(1, 3), 0)
basic.forever(function () {
    if (gracz.isTouchingEdge()) {
        gracz.delete()
        gracz = game.createSprite(xmeteor, 3)
    }
})
basic.forever(function () {
    if (gracz.isTouching(meteor)) {
        game.gameOver()
    }
})
basic.forever(function () {
    basic.pause(speed)
    meteor.change(LedSpriteProperty.Y, 1)
    if (meteor.isTouchingEdge()) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        game.addScore(1)
        basic.pause(200)
        meteor.delete()
        speed += -25
        meteor = game.createSprite(randint(1, 3), 0)
        xmeteor = randint(1, 3)
    }
})
