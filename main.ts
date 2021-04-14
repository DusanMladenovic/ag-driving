namespace SpriteKind {
    export const RightSide = SpriteKind.create()
    export const LeftSide = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
    info.setScore(info.highScore())
})
let mySprite5: Sprite = null
let roadSlice2: Sprite = null
let roadSlice: Sprite = null
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
info.setLife(1)
game.onUpdateInterval(2000, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(2000, function () {
    mySprite2 = sprites.create(img`
        . . . . . . e e c c e e . . . . 
        . . . . . e 2 2 2 2 2 2 e . . . 
        . . . . 2 c 2 2 2 2 2 2 c 2 . . 
        . . . e 2 c 4 2 2 2 2 2 c 2 e . 
        . . . f 2 2 4 2 2 2 2 2 c 2 f . 
        . . . f 2 2 4 2 2 2 2 2 2 2 f . 
        . . . f 2 2 4 2 2 2 2 2 2 2 f . 
        . . . f 2 c 2 4 4 2 2 2 c 2 f . 
        . . . e 2 c e c c c c e c 2 e . 
        . . . e 2 e c b b b b c e 2 e . 
        . . . e 2 e b b b b b b e 2 e . 
        . . . e e e e e e e e e e e e . 
        . . . f e d e e e e e e d e f . 
        . . . f e 2 d e e e e d 2 e f . 
        . . . f f e e e e e e e e f f . 
        . . . . f f . . . . . . f f . . 
        `, SpriteKind.Enemy)
    mySprite2.setPosition(50, -10)
    mySprite2.setVelocity(0, 100)
    mySprite3 = sprites.create(img`
        . . . . . . a a c c a a . . . . 
        . . . . . a 3 3 3 3 3 3 a . . . 
        . . . . 3 c 3 3 3 3 3 3 c 3 . . 
        . . . a 3 c d 3 3 3 3 3 c 3 a . 
        . . . f 3 3 d 3 3 3 3 3 c 3 f . 
        . . . f 3 3 d 3 3 3 3 3 3 3 f . 
        . . . f 3 3 d 3 3 3 3 3 3 3 f . 
        . . . f 3 c 3 d d 3 3 3 c 3 f . 
        . . . a 3 c a c c c c a c 3 a . 
        . . . a 3 a c b b b b c a 3 a . 
        . . . a 3 a b b b b b b a 3 a . 
        . . . a a a a a a a a a a a a . 
        . . . f a d a a a a a a d a f . 
        . . . f a 3 d a a a a d 3 a f . 
        . . . f f a a a a a a a a f f . 
        . . . . f f . . . . . . f f . . 
        `, SpriteKind.Enemy)
    mySprite3.setPosition(96, -40)
    mySprite3.setVelocity(0, 100)
})
game.onUpdateInterval(4000, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(4000, function () {
    mySprite4 = sprites.create(img`
        . . . . . . c c c c c c . . . . 
        . . . . . c b b b b b b c . . . 
        . . . . b c b b b b b b c b . . 
        . . . c b c d b b b b b c b c . 
        . . . f b b d b b b b b c b f . 
        . . . f b b d b b b b b b b f . 
        . . . f b b d b b b b b b b f . 
        . . . f b c b d d b b b c b f . 
        . . . c b c c c c c c c c b c . 
        . . . c b c c b b b b c c b c . 
        . . . c b c b b b b b b c b c . 
        . . . c c c c c c c c c c c c . 
        . . . f c d c c c c c c d c f . 
        . . . f c b d c c c c d b c f . 
        . . . f f c c c c c c c c f f . 
        . . . . f f . . . . . . f f . . 
        `, SpriteKind.Enemy)
    mySprite4.setPosition(65, -10)
    mySprite4.setVelocity(0, 50)
})
game.onUpdateInterval(100, function () {
    roadSlice = sprites.createProjectileFromSide(img`
        777777777777777777777777777777777777777777777777777777777777711111111...........
        777777777777777777777777777777777888777777777777777777777777711111111...........
        777777777888777777777777777777777888777777777777777888777777711111111...........
        777777777888777777777777777777777888777777777777777888777777711111111...........
        777777777888777777777777777777777777777777777777777888777777711111111...........
        777777777777777777888777777777777777777777777777777777777777722222222...........
        777777777777777777888777777777777777777777778887777777777777722222222...........
        778887777777777777888777777777777777777777778887777777777777722222222...........
        778887777777777777777777777778887777777777778887777777777777722222222...........
        778887777777777777777777777778887777777777777777777777777777722222222...........
        `, 0, 80)
    roadSlice.right = 50
    roadSlice.setKind(SpriteKind.RightSide)
    roadSlice2 = sprites.createProjectileFromSide(img`
        .............1111111177777777777777777777777777777777777777777777777777777777777
        .............1111111177777777777788877777777777777777777777777777777777777777777
        .............1111111177777777777788877777777777777788877777777777777888777777777
        .............1111111177777777777788877777777777777788877777777777777888777777777
        .............1111111177777777777777777777777777777788877777777777777888777778887
        .............2222222277777777777777777777777777777777777777777777777777777778887
        .............2222222277777777777777777777777888777777777777777777777777777778887
        .............2222222277777777777777777777777888777777777777788877777777777777777
        .............2222222277777777888777777777777888777777777777788877777777777777777
        .............2222222277777777888777777777777777777777777777788877777777777777777
        `, 0, 80)
    roadSlice2.right = 200
    roadSlice2.setKind(SpriteKind.LeftSide)
})
game.onUpdateInterval(8000, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(8000, function () {
    mySprite5 = sprites.create(img`
        . . . . . . 7 7 c c 7 7 . . . . 
        . . . . . 7 5 5 5 5 5 5 7 . . . 
        . . . . 5 c 5 5 5 5 5 5 c 5 . . 
        . . . 7 5 c 9 5 5 5 5 5 c 5 7 . 
        . . . f 5 5 9 5 5 5 5 5 c 5 f . 
        . . . f 5 5 9 5 5 5 5 5 5 5 f . 
        . . . f 5 5 9 5 5 5 5 5 5 5 f . 
        . . . f 5 c 5 9 9 5 5 5 c 5 f . 
        . . . 7 5 c 7 c c c c 7 c 5 7 . 
        . . . 7 5 7 c b b b b c 7 5 7 . 
        . . . 7 5 7 b b b b b b 7 5 7 . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . f 7 d 7 7 7 7 7 7 d 7 f . 
        . . . f 7 5 d 7 7 7 7 d 5 7 f . 
        . . . f f 7 7 7 7 7 7 7 7 f f . 
        . . . . f f . . . . . . f f . . 
        `, SpriteKind.Enemy)
    mySprite5.setVelocity(0, 100)
    mySprite5.setPosition(123, -10)
})
