input.onButtonPressed(Button.A, function () {
    gracz.move(-1)
})
input.onButtonPressed(Button.B, function () {
    gracz.move(1)
})
let xmeteor = 0
let meteorb: game.LedSprite = null
let gracz: game.LedSprite = null
let czas = 100
gracz = game.createSprite(2, 3)
let meteor = game.createSprite(randint(1, 3), 0)
let jestmeteorb = false
basic.forever(function () {
    if (jestmeteorb == true) {
        if (gracz.isTouching(meteorb)) {
            meteor.delete()
            meteorb.delete()
            game.gameOver()
        }
    }
})
basic.forever(function () {
    if (gracz.isTouching(meteor)) {
        meteor.delete()
        if (jestmeteorb == true) {
            meteorb.delete()
        }
        game.gameOver()
    }
})
basic.forever(function () {
    if (czas > -1 && czas < 6) {
        jestmeteorb = true
        meteorb = game.createSprite(randint(1, 3), 0)
        for (let index = 0; index < 50; index++) {
            for (let index = 0; index < 5; index++) {
                basic.pause(300)
                meteorb.change(LedSpriteProperty.Y, 1)
            }
            if (meteorb.isTouchingEdge()) {
                music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
                game.addScore(1)
                basic.pause(200)
                meteorb.delete()
                meteorb = game.createSprite(randint(0, 4), 0)
                xmeteor = randint(0, 4)
            }
        }
        game.gameOver()
    }
})
basic.forever(function () {
    for (let index = 0; index < 5; index++) {
        basic.pause(300)
        meteor.change(LedSpriteProperty.Y, 1)
    }
    if (meteor.isTouchingEdge()) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        czas += -5
        game.addScore(1)
        basic.pause(200)
        meteor.delete()
        meteor = game.createSprite(randint(0, 4), 0)
        xmeteor = randint(0, 4)
    }
})
