def on_button_pressed_a():
    gracz.move(-1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    gracz.move(1)
input.on_button_pressed(Button.B, on_button_pressed_b)

meteorb: game.LedSprite = None
gracz: game.LedSprite = None
czas = 100
gracz = game.create_sprite(2, 3)
meteor = game.create_sprite(randint(1, 3), 0)
jestmeteorb = False

def on_forever():
    if jestmeteorb == True:
        if gracz.is_touching(meteorb):
            meteor.delete()
            meteorb.delete()
            game.game_over()
basic.forever(on_forever)

def on_forever2():
    if gracz.is_touching(meteor):
        meteor.delete()
        if jestmeteorb == True:
            meteorb.delete()
        game.game_over()
basic.forever(on_forever2)

def on_forever3():
    global jestmeteorb, meteorb
    if czas > -1 and czas < 6:
        jestmeteorb = True
        meteorb = game.create_sprite(randint(1, 3), 0)
        for index in range(50):
            for index2 in range(5):
                basic.pause(300)
            if meteorb.is_touching_edge():
                meteorb.change(LedSpriteProperty.Y, 1)
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
                meteorb.set(LedSpriteProperty.Y, 0)
                meteorb.set(LedSpriteProperty.X, randint(0, 4))
        game.game_over()
basic.forever(on_forever3)

def on_forever4():
    global czas
    for index3 in range(5):
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
        meteor.set(LedSpriteProperty.X, randint(0, 4))
        meteor.set(LedSpriteProperty.Y, 0)
basic.forever(on_forever4)
