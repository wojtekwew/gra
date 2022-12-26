let xmeteor = 0
let gracz = game.createSprite(2, 3)
let speed = 900
let meteor = game.createSprite(randint(1, 3), 0)
basic.forever(function () {
    if (gracz.isTouchingEdge()) {
        gracz.delete()
        gracz = game.createSprite(meteor, 3)
    }
})
basic.forever(function () {
    basic.pause(speed)
    meteor.change(LedSpriteProperty.Y, 1)
    if (meteor.isTouchingEdge()) {
        basic.pause(200)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.clearScreen()
        meteor.delete()
        speed += -25
        meteor = game.createSprite(randint(1, 3), 0)
        xmeteor = randint(1, 3)
    }
})
