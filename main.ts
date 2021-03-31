info.onLifeZero(function () {
    info.setScore(info.highScore())
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . 8 8 c c 8 8 . . . . 
    . . . . . 8 6 6 6 6 6 6 8 . . . 
    . . . . 6 c 6 6 6 6 6 6 c 6 . . 
    . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
    . . . f 6 6 9 6 6 6 6 6 c 6 f . 
    . . . f 6 6 9 6 6 6 6 6 6 6 f . 
    . . . f 6 6 9 6 6 6 6 6 6 6 f . 
    . . . f 6 c 6 9 9 6 6 6 c 6 f . 
    . . . 8 6 c 8 c c c c 8 c 6 8 . 
    . . . 8 6 8 c b b b b c 8 6 8 . 
    . . . 8 6 8 b b b b b b 8 6 8 . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . . . f 8 d 8 8 8 8 8 8 d 8 f . 
    . . . f 8 6 d 8 8 8 8 d 6 8 f . 
    . . . f f 8 8 8 8 8 8 8 8 f f . 
    . . . . f f . . . . . . f f . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 75, 0)
mySprite.setPosition(123, 98)
mySprite.setStayInScreen(true)
scene.setBackgroundImage(img`
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111fffffffffffffffffffffffffff111ffffffffffffffffffffffffff11111fffffffffffffffffffffffff111ffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    7777777777777777711111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111177777777777777777777
    `)
info.setLife(2)
game.onUpdateInterval(2000, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(2000, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 2 . . . . 
        . . . . . 2 2 4 4 2 2 2 2 . . . 
        . . . . . c 4 2 2 2 2 2 c . . . 
        . . . . 2 c 4 2 2 2 2 2 c 2 . . 
        . . . e 2 c 4 2 2 2 2 2 c 2 e . 
        . . . f 2 c 4 2 2 2 2 2 c 2 f . 
        . . . f e c 2 2 2 2 2 2 c e f . 
        . . . f 2 c 2 b b b b 2 c 2 f . 
        . . . e 2 2 b c c c c b 2 2 e . 
        . . . e e b c c c c c c b e e . 
        . . . f e 4 4 4 4 4 4 4 4 e f . 
        . . . f e d 2 2 2 2 2 2 d e f . 
        . . . . 2 d d 2 2 2 2 d d 2 f . 
        . . . . f 2 d 2 2 2 2 d 2 f . . 
        . . . . . e 2 2 2 2 2 2 e . . . 
        `, SpriteKind.Enemy)
    mySprite2.setPosition(35, -10)
    mySprite2.setVelocity(0, 100)
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 3 3 . . . . 
        . . . . . 3 3 d d 3 3 3 3 . . . 
        . . . . . c d 3 3 3 3 3 c . . . 
        . . . . 3 c d 3 3 3 3 3 c 3 . . 
        . . . a 3 c d 3 3 3 3 3 c 3 a . 
        . . . f 3 c d 3 3 3 3 3 c 3 f . 
        . . . f a c 3 3 3 3 3 3 c a f . 
        . . . f 3 c 3 b b b b 3 c 3 f . 
        . . . a 3 3 b c c c c b 3 3 a . 
        . . . a a b c c c c c c b a a . 
        . . . f a d d d d d d d d a f . 
        . . . f a d 3 3 3 3 3 3 d a f . 
        . . . . 3 d d 3 3 3 3 d d 3 f . 
        . . . . f 3 d 3 3 3 3 d 3 f . . 
        . . . . . a 3 3 3 3 3 3 a . . . 
        `, SpriteKind.Enemy)
    mySprite3.setPosition(96, -40)
    mySprite3.setVelocity(0, 100)
})
game.onUpdateInterval(4000, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(4000, function () {
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 e e f f f f f f f f 1 . . 
        . . 1 e f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 8 8 9 9 9 9 9 9 9 9 1 . . 
        . . 1 8 9 9 9 9 9 9 9 9 9 1 . . 
        . . 1 9 9 9 9 9 9 9 9 9 9 1 . . 
        . . d d d d d d d d d d d d . . 
        . . d 5 5 1 1 1 1 1 1 1 5 d . . 
        . . d 5 1 1 1 1 1 1 1 1 5 d . . 
        . . d d d d d d d d d d d d . . 
        . . f f . . . . . . . . f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite4.setPosition(65, -10)
    mySprite4.setVelocity(0, 50)
})
game.onUpdateInterval(8000, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(8000, function () {
    mySprite5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 5 1 1 1 1 1 1 1 1 5 1 . . 
        . . 1 1 5 1 1 1 1 1 1 5 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . f f . . . . . . . . f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite5.setVelocity(0, 100)
    mySprite5.setPosition(123, -10)
})
