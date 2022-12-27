input.onButtonPressed(Button.A, function () {
    gracz.move(-1)
})
input.onButtonPressed(Button.B, function () {
    gracz.move(1)
})
let meteorb: game.LedSprite = null
let gracz: game.LedSprite = null
let wynik = 0
let czas = 100
gracz = game.createSprite(2, 3)
let meteor = game.createSprite(randint(1, 3), 0)
let jestmeteorb = false
basic.forever(function () {
    if (jestmeteorb == true) {
        if (gracz.isTouching(meteorb)) {
            meteor.delete()
            meteorb.delete()
            game.setScore(wynik)
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
        game.setScore(wynik)
        game.gameOver()
    }
})
basic.forever(function () {
    if (czas > -1 && czas < 6) {
        gracz.set(LedSpriteProperty.Y, 4)
        jestmeteorb = true
        meteorb = game.createSprite(randint(1, 3), 0)
        for (let index = 0; index < 50; index++) {
            for (let index = 0; index < 5; index++) {
                basic.pause(300)
                meteorb.change(LedSpriteProperty.Y, 1)
            }
            if (meteorb.isTouchingEdge()) {
                music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
                wynik += 1
                basic.pause(200)
                meteorb.set(LedSpriteProperty.Y, 0)
                meteorb.set(LedSpriteProperty.X, randint(0, 4))
            }
        }
        meteor.delete()
        meteorb.delete()
        game.setScore(wynik)
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
        wynik += 1
        basic.pause(200)
        meteor.set(LedSpriteProperty.X, randint(0, 4))
        meteor.set(LedSpriteProperty.Y, 0)
    }
})
