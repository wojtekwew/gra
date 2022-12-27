def on_button_pressed_a():
    gracz.move(-1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    gracz.move(1)
input.on_button_pressed(Button.B, on_button_pressed_b)

xmeteor = 0
meteorb: game.LedSprite = None
gracz: game.LedSprite = None
czas = 100
gracz = game.create_sprite(2, 3)
meteor = game.create_sprite(randint(1, 3), 0)

def on_forever():
    if meteor.is_touching(gracz):
        meteor.delete()
        game.game_over()
basic.forever(on_forever)

def on_forever2():
    global meteorb, xmeteor
    for index in range(5):
        basic.pause(300)
        meteorb.change(LedSpriteProperty.Y, 1)
    if meteorb.is_touching_edge():
        music.play_sound_effect(music.create_sound_effect(WaveShape.SAWTOOTH,
                400,
                600,
                255,
                0,
                100,
                SoundExpressionEffect.WARBLE,
                InterpolationCurve.LINEAR),
            SoundExpressionPlayMode.IN_BACKGROUND)
        game.add_score(1)
        basic.pause(200)
        meteorb.delete()
        meteorb = game.create_sprite(randint(0, 4), 0)
        xmeteor = randint(0, 4)
basic.forever(on_forever2)

def on_forever3():
    global meteorb
    if czas == 0:
        meteorb = game.create_sprite(randint(1, 3), 0)
basic.forever(on_forever3)

def on_forever4():
    if gracz.is_touching(meteor):
        game.game_over()
basic.forever(on_forever4)

def on_forever5():
    global czas, meteor, xmeteor
    for index2 in range(5):
        basic.pause(300)
        meteor.change(LedSpriteProperty.Y, 1)
    if meteor.is_touching_edge():
        music.play_sound_effect(music.create_sound_effect(WaveShape.SAWTOOTH,
                400,
                600,
                255,
                0,
                100,
                SoundExpressionEffect.WARBLE,
                InterpolationCurve.LINEAR),
            SoundExpressionPlayMode.IN_BACKGROUND)
        czas += -5
        game.add_score(1)
        basic.pause(200)
        meteor.delete()
        meteor = game.create_sprite(randint(0, 4), 0)
        xmeteor = randint(0, 4)
basic.forever(on_forever5)
