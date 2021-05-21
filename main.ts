namespace SpriteKind {
    export const Guard = SpriteKind.create()
    export const Prisoner = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f f e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f f e e e e e e f e f 
        f f f f e e e e f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        e 4 f 2 4 4 4 4 2 f 4 e 
        4 d f 1 1 1 1 1 1 c d 4 
        4 4 f 4 4 4 4 4 4 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f e e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f e e e e e e e f e f 
        f f f e e e e f f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        . 4 f 1 1 1 1 1 f e 4 e 
        . 4 f 2 4 4 4 2 e d d 4 
        . e f f f f f f e e 4 . 
        . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f f e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f f f e e e e e f e f 
        f f f f f e e e e f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        e 4 e f 1 1 1 1 1 f 4 . 
        4 d d e 2 4 4 4 2 f 4 . 
        . 4 e e f f f f f f e . 
        . . . . . . . f f f . . 
        `],
    250,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . f f f f f . . . . 
        . . f e e e e e f f . . 
        . f e e e e e e e f f . 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        f f e 4 4 f f 4 e 4 f f 
        . f f e e e e 4 d 4 f . 
        . . f f f e e 4 f f f . 
        . . f e e e e e e f . . 
        . . f 4 4 2 e d d 4 . . 
        . . f 1 1 1 e d d e . . 
        . . f 4 4 4 f e e f . . 
        . . . f f f f f f . . . 
        . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . . f e e e e e f f f . 
        . f e e e e e e e f f f 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        . f e 4 4 f f 4 e 4 f f 
        . . f e e e e 4 d 4 f . 
        . . f f f e e e f f f . 
        . . f e 4 e d d 4 f . . 
        . . f 1 1 e d d e f . . 
        . f f 4 4 f e e f f f . 
        . f f f f f f f f f f . 
        . . f f f . . . f f . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . . f e e e e e f f f . 
        . f e e e e e e e f f f 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        . f e 4 4 f f 4 e 4 f f 
        . . f e e e e 4 d 4 f f 
        . . f f f e e 4 f f f . 
        . . f e e e 4 e d d 4 . 
        . . f 1 1 1 4 e d d e . 
        . f f 4 4 4 4 f e e f . 
        . f f f f f f f f f f . 
        . . f f f . . . f f . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    game.showLongText("I've heard you're new here. Meet me in cell 8 (on the far right) and I can help you out. - Ricky", DialogLayout.Bottom)
    tiles.setWallAt(tiles.getTileLocation(16, 1), true)
    tiles.setWallAt(tiles.getTileLocation(17, 1), true)
    tiles.setWallAt(tiles.getTileLocation(15, 6), false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f f . . . 
        . . f f e e e e e f . . 
        . f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f f 
        . f 4 d 4 e e e e f f . 
        . f f f 4 e e f f f . . 
        . . f e e e e e e f . . 
        . . 4 d d e 2 4 4 f . . 
        . . e d d e 1 1 1 f . . 
        . . f e e f 4 4 4 f . . 
        . . . f f f f f f . . . 
        . . . . f f f . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e e f . . 
        f f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f . 
        . f 4 d 4 e e e e f . . 
        . f f f e e e f f f . . 
        . . f 4 d d e 4 e f . . 
        . . f e d d e 1 1 f . . 
        . f f f e e f 4 4 f f . 
        . f f f f f f f f f f . 
        . . f f . . . f f f . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e e f . . 
        f f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f . 
        f f 4 d 4 e e e e f . . 
        . f f f 4 e e f f f . . 
        . 4 d d e 4 e e e f . . 
        . e d d e 1 1 1 1 f . . 
        . f e e f 4 4 4 4 f f . 
        . f f f f f f f f f f . 
        . . f f . . . f f f . . 
        `],
    200,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 e e e e e e 4 e f 
        . f e e e f f e e e f . 
        . f f e e e e e e f f . 
        e 4 f 2 4 4 4 4 2 f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 4 4 4 4 4 4 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e f f f . 
        f f f e e e e e e f f f 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 e e e e e e 4 e f 
        . f e e e f f e 4 e f e 
        f f f e 4 4 4 4 d d 4 e 
        e 4 f 1 1 1 1 e d d e . 
        . . f 2 4 4 2 f e e . . 
        . . f f f f f f f . . . 
        . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e f f f . 
        f f f e e e e e e f f f 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 e e e e e e 4 e f 
        e f e 4 e f f e e e f . 
        e 4 d d 4 4 4 4 e f f f 
        . e d d e 1 1 1 1 f 4 e 
        . . e e f 2 4 4 2 f . . 
        . . . f f f f f f f . . 
        . . . . . . . f f f . . 
        `],
    250,
    true
    )
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Sprite`, SpriteKind.Player)
let guard1 = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
    f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
    f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
    f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
    f 6 6 6 6 8 8 8 8 6 6 6 6 6 6 f 
    f 6 6 6 8 8 6 6 6 6 6 6 6 6 6 f 
    f 6 6 8 8 6 6 6 6 6 6 6 6 6 6 f 
    f 6 6 8 6 6 6 6 6 6 6 6 6 6 6 f 
    f 6 6 8 6 6 6 8 8 8 8 6 6 6 6 f 
    f 6 6 8 6 6 6 6 6 8 8 6 6 6 6 f 
    f 6 6 8 8 6 6 6 6 8 6 6 6 6 6 f 
    f 6 6 6 8 8 6 6 8 8 6 6 6 6 6 f 
    f 6 6 6 6 6 8 8 6 6 6 6 6 6 6 f 
    f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Guard)
let guard2 = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
    f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
    f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
    f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
    f 6 6 6 6 8 8 8 8 6 6 6 6 6 6 f 
    f 6 6 6 8 8 6 6 6 6 6 6 6 6 6 f 
    f 6 6 8 8 6 6 6 6 6 6 6 6 6 6 f 
    f 6 6 8 6 6 6 6 6 6 6 6 6 6 6 f 
    f 6 6 8 6 6 6 8 8 8 8 6 6 6 6 f 
    f 6 6 8 6 6 6 6 6 8 8 6 6 6 6 f 
    f 6 6 8 8 6 6 6 6 8 6 6 6 6 6 f 
    f 6 6 6 8 8 6 6 8 8 6 6 6 6 6 f 
    f 6 6 6 6 6 8 8 6 6 6 6 6 6 6 f 
    f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Guard)
let guard3 = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
    f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
    f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
    f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
    f 6 6 6 6 8 8 8 8 6 6 6 6 6 6 f 
    f 6 6 6 8 8 6 6 6 6 6 6 6 6 6 f 
    f 6 6 8 8 6 6 6 6 6 6 6 6 6 6 f 
    f 6 6 8 6 6 6 6 6 6 6 6 6 6 6 f 
    f 6 6 8 6 6 6 8 8 8 8 6 6 6 6 f 
    f 6 6 8 6 6 6 6 6 8 8 6 6 6 6 f 
    f 6 6 8 8 6 6 6 6 8 6 6 6 6 6 f 
    f 6 6 6 8 8 6 6 8 8 6 6 6 6 6 f 
    f 6 6 6 6 6 8 8 6 6 6 6 6 6 6 f 
    f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Guard)
let guard4 = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
    f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
    f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
    f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
    f 6 6 6 6 8 8 8 8 6 6 6 6 6 6 f 
    f 6 6 6 8 8 6 6 6 6 6 6 6 6 6 f 
    f 6 6 8 8 6 6 6 6 6 6 6 6 6 6 f 
    f 6 6 8 6 6 6 6 6 6 6 6 6 6 6 f 
    f 6 6 8 6 6 6 8 8 8 8 6 6 6 6 f 
    f 6 6 8 6 6 6 6 6 8 8 6 6 6 6 f 
    f 6 6 8 8 6 6 6 6 8 6 6 6 6 6 f 
    f 6 6 6 8 8 6 6 8 8 6 6 6 6 6 f 
    f 6 6 6 6 6 8 8 6 6 6 6 6 6 6 f 
    f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Guard)
let prisoner1 = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
    f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
    f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
    f 4 4 4 4 2 2 2 2 2 4 4 4 4 4 f 
    f 4 4 4 4 2 4 4 4 2 4 4 4 4 4 f 
    f 4 4 4 4 2 4 4 2 2 4 4 4 4 4 f 
    f 4 4 4 4 2 2 2 2 4 4 4 4 4 4 f 
    f 4 4 4 4 2 4 4 4 4 4 4 4 4 4 f 
    f 4 4 4 4 2 4 4 4 4 4 4 4 4 4 f 
    f 4 4 4 4 2 4 4 4 4 4 4 4 4 4 f 
    f 4 4 4 4 2 4 4 4 4 4 4 4 4 4 f 
    f 4 4 4 4 2 4 4 4 4 4 4 4 4 4 f 
    f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
    f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Prisoner)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(13, 1))
tiles.placeOnTile(prisoner1, tiles.getTileLocation(19, 1))
tiles.placeOnTile(guard1, tiles.getTileLocation(52, 16))
tiles.placeOnTile(guard2, tiles.getTileLocation(6, 16))
tiles.placeOnTile(guard3, tiles.getTileLocation(30, 16))
tiles.placeOnTile(guard4, tiles.getTileLocation(55, 28))
game.showLongText("Welcome to Wilford Prison. You're going to be here for a long time, so make yourself welcome. You are housed here with 7 other prisoners and 4 guards. Say hi when you get some time!", DialogLayout.Bottom)
tiles.setWallAt(tiles.getTileLocation(15, 6), true)
game.onUpdate(function () {
    if (prisoner1.isHittingTile(CollisionDirection.Left)) {
        prisoner1.vx += 50
    } else if (prisoner1.isHittingTile(CollisionDirection.Right)) {
        prisoner1.vx += -50
    }
    if (prisoner1.isHittingTile(CollisionDirection.Top)) {
        prisoner1.vy += 50
    } else if (prisoner1.isHittingTile(CollisionDirection.Bottom)) {
        prisoner1.vy += -50
    }
})
game.onUpdate(function () {
    if (guard3.isHittingTile(CollisionDirection.Left)) {
        guard3.vx += 50
    } else if (guard3.isHittingTile(CollisionDirection.Right)) {
        guard3.vx += -50
    }
    if (guard3.isHittingTile(CollisionDirection.Top)) {
        guard3.vy += 50
    } else if (guard3.isHittingTile(CollisionDirection.Bottom)) {
        guard3.vy += -50
    }
})
game.onUpdate(function () {
    if (guard4.isHittingTile(CollisionDirection.Left)) {
        guard4.vx += 50
    } else if (guard4.isHittingTile(CollisionDirection.Right)) {
        guard4.vx += -50
    }
    if (guard4.isHittingTile(CollisionDirection.Top)) {
        guard4.vy += 50
    } else if (guard4.isHittingTile(CollisionDirection.Bottom)) {
        guard4.vy += -50
    }
})
game.onUpdate(function () {
    if (guard1.isHittingTile(CollisionDirection.Left)) {
        guard1.vx += 50
    } else if (guard1.isHittingTile(CollisionDirection.Right)) {
        guard1.vx += -50
    }
    if (guard1.isHittingTile(CollisionDirection.Top)) {
        guard1.vy += 50
    } else if (guard1.isHittingTile(CollisionDirection.Bottom)) {
        guard1.vy += -50
    }
})
game.onUpdate(function () {
    if (guard2.isHittingTile(CollisionDirection.Left)) {
        guard2.vx += 50
    } else if (guard2.isHittingTile(CollisionDirection.Right)) {
        guard2.vx += -50
    }
    if (guard2.isHittingTile(CollisionDirection.Top)) {
        guard2.vy += 50
    } else if (guard2.isHittingTile(CollisionDirection.Bottom)) {
        guard2.vy += -50
    }
})
game.onUpdateInterval(1000, function () {
    guard4.setVelocity(randint(-50, 50), randint(-50, 50))
})
game.onUpdateInterval(1000, function () {
    guard3.setVelocity(randint(-50, 50), randint(-50, 50))
})
game.onUpdateInterval(1000, function () {
    guard2.setVelocity(randint(-50, 50), randint(-50, 50))
})
game.onUpdateInterval(1000, function () {
    guard1.setVelocity(randint(-50, 50), randint(-50, 50))
})
game.onUpdateInterval(1000, function () {
    prisoner1.setVelocity(randint(-50, 50), randint(-50, 50))
})
forever(function () {
    if (guard3.vx < -1) {
        animation.runImageAnimation(
        guard3,
        [img`
            . . . f f f f f . . . . 
            . . f e e e e e f f . . 
            . f e e e e e e e f f . 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            f f e 4 4 f f 4 e 4 f f 
            . f f e e e e 4 d 4 f . 
            . . f f f e e 4 f f f . 
            . . f e e e e e e f . . 
            . . f 8 6 6 e d d 4 . . 
            . . f 8 8 6 e d d e . . 
            . . f 8 8 8 f e e f . . 
            . . . f f f f f f . . . 
            . . . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . . f e e e e e f f f . 
            . f e e e e e e e f f f 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            . f e 4 4 f f 4 e 4 f f 
            . . f e e e e 4 d 4 f . 
            . . f f f e e e f f f . 
            . . f e 6 e d d 4 f . . 
            . . f 8 6 e d d e f . . 
            . f f 8 8 f e e f f f . 
            . f f f f f f f f f f . 
            . . f f f . . . f f . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . . f e e e e e f f f . 
            . f e e e e e e e f f f 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            . f e 4 4 f f 4 e 4 f f 
            . . f e e e e 4 d 4 f f 
            . . f f f e e 4 f f f . 
            . . f e 4 6 6 e d d 4 . 
            . . f 8 8 8 6 e d d e . 
            . f f 8 8 8 8 f e e f . 
            . f f f f f f f f f f . 
            . . f f f . . . f f . . 
            `],
        200,
        true
        )
    } else if (guard3.vy > 1) {
        animation.runImageAnimation(
        guard3,
        [img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 e e e e e e 4 e f 
            . f e e e f f e e e f . 
            . f f e e e e e e f f . 
            e 4 f 6 8 8 8 8 6 f 4 e 
            4 d f 8 8 8 8 8 8 f d 4 
            4 4 f 9 9 8 8 9 9 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e f f f . 
            f f f e e e e e e f f f 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 e e e e e e 4 e f 
            . f e e e f f e 4 e f e 
            f f f e 4 4 4 4 d d 4 e 
            e 4 f 6 8 8 6 e d d e . 
            . . f 9 8 8 9 f e e . . 
            . . f f f f f f f . . . 
            . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e f f f . 
            f f f e e e e e e f f f 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 e e e e e e 4 e f 
            e f e 4 e f f e e e f . 
            e 4 d d 4 4 4 4 e f f f 
            . e d d e 6 8 8 6 f 4 e 
            . . e e f 9 8 8 9 f . . 
            . . . f f f f f f f . . 
            . . . . . . . f f f . . 
            `],
        250,
        true
        )
    }
    if (guard3.vx > 1) {
        animation.runImageAnimation(
        guard3,
        [img`
            . . . . f f f f f . . . 
            . . f f e e e e e f . . 
            . f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f f 
            . f 4 d 4 e e e e f f . 
            . f f f 4 e e f f f . . 
            . . f e e e e e e f . . 
            . . 4 d d e 6 6 8 f . . 
            . . e d d e 6 8 8 f . . 
            . . f e e f 8 8 8 f . . 
            . . . f f f f f f . . . 
            . . . . f f f . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e e f . . 
            f f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f . 
            . f 4 d 4 e e e e f . . 
            . f f f e e e f f f . . 
            . . f 4 d d e 6 e f . . 
            . . f e d d e 6 8 f . . 
            . f f f e e f 8 8 f f . 
            . f f f f f f f f f f . 
            . . f f . . . f f f . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e e f . . 
            f f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f . 
            f f 4 d 4 e e e e f . . 
            . f f f 4 e e f f f . . 
            . 4 d d e 6 6 4 e f . . 
            . e d d e 6 8 8 8 f . . 
            . f e e f 8 8 8 8 f f . 
            . f f f f f f f f f f . 
            . . f f . . . f f f . . 
            `],
        200,
        true
        )
    } else if (guard3.vy < -1) {
        animation.runImageAnimation(
        guard3,
        [img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f f e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f f e e e e e e f e f 
            f f f f e e e e f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            e 4 f 6 8 8 8 8 6 f 4 e 
            4 d f 8 8 8 8 8 8 c d 4 
            4 4 f 9 9 8 8 9 9 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f e e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f e e e e e e e f e f 
            f f f e e e e f f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            . 4 f 6 8 8 8 6 f e 4 e 
            . 4 f 9 8 8 8 9 e d d 4 
            . e f f f f f f e e 4 . 
            . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f f e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f f f e e e e e f e f 
            f f f f f e e e e f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            e 4 e f 6 8 8 8 6 f 4 . 
            4 d d e 9 8 8 8 9 f 4 . 
            . 4 e e f f f f f f e . 
            . . . . . . . f f f . . 
            `],
        250,
        true
        )
    }
})
forever(function () {
    if (guard4.vx < -1) {
        animation.runImageAnimation(
        guard4,
        [img`
            . . . f f f f f . . . . 
            . . f e e e e e f f . . 
            . f e e e e e e e f f . 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            f f e 4 4 f f 4 e 4 f f 
            . f f e e e e 4 d 4 f . 
            . . f f f e e 4 f f f . 
            . . f e e e e e e f . . 
            . . f 8 6 6 e d d 4 . . 
            . . f 8 8 6 e d d e . . 
            . . f 8 8 8 f e e f . . 
            . . . f f f f f f . . . 
            . . . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . . f e e e e e f f f . 
            . f e e e e e e e f f f 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            . f e 4 4 f f 4 e 4 f f 
            . . f e e e e 4 d 4 f . 
            . . f f f e e e f f f . 
            . . f e 6 e d d 4 f . . 
            . . f 8 6 e d d e f . . 
            . f f 8 8 f e e f f f . 
            . f f f f f f f f f f . 
            . . f f f . . . f f . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . . f e e e e e f f f . 
            . f e e e e e e e f f f 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            . f e 4 4 f f 4 e 4 f f 
            . . f e e e e 4 d 4 f f 
            . . f f f e e 4 f f f . 
            . . f e 4 6 6 e d d 4 . 
            . . f 8 8 8 6 e d d e . 
            . f f 8 8 8 8 f e e f . 
            . f f f f f f f f f f . 
            . . f f f . . . f f . . 
            `],
        200,
        true
        )
    } else if (guard4.vy > 1) {
        animation.runImageAnimation(
        guard4,
        [img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 e e e e e e 4 e f 
            . f e e e f f e e e f . 
            . f f e e e e e e f f . 
            e 4 f 6 8 8 8 8 6 f 4 e 
            4 d f 8 8 8 8 8 8 f d 4 
            4 4 f 9 9 8 8 9 9 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e f f f . 
            f f f e e e e e e f f f 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 e e e e e e 4 e f 
            . f e e e f f e 4 e f e 
            f f f e 4 4 4 4 d d 4 e 
            e 4 f 6 8 8 6 e d d e . 
            . . f 9 8 8 9 f e e . . 
            . . f f f f f f f . . . 
            . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e f f f . 
            f f f e e e e e e f f f 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 e e e e e e 4 e f 
            e f e 4 e f f e e e f . 
            e 4 d d 4 4 4 4 e f f f 
            . e d d e 6 8 8 6 f 4 e 
            . . e e f 9 8 8 9 f . . 
            . . . f f f f f f f . . 
            . . . . . . . f f f . . 
            `],
        250,
        true
        )
    }
    if (guard4.vx > 1) {
        animation.runImageAnimation(
        guard4,
        [img`
            . . . . f f f f f . . . 
            . . f f e e e e e f . . 
            . f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f f 
            . f 4 d 4 e e e e f f . 
            . f f f 4 e e f f f . . 
            . . f e e e e e e f . . 
            . . 4 d d e 6 6 8 f . . 
            . . e d d e 6 8 8 f . . 
            . . f e e f 8 8 8 f . . 
            . . . f f f f f f . . . 
            . . . . f f f . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e e f . . 
            f f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f . 
            . f 4 d 4 e e e e f . . 
            . f f f e e e f f f . . 
            . . f 4 d d e 6 e f . . 
            . . f e d d e 6 8 f . . 
            . f f f e e f 8 8 f f . 
            . f f f f f f f f f f . 
            . . f f . . . f f f . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e e f . . 
            f f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f . 
            f f 4 d 4 e e e e f . . 
            . f f f 4 e e f f f . . 
            . 4 d d e 6 6 4 e f . . 
            . e d d e 6 8 8 8 f . . 
            . f e e f 8 8 8 8 f f . 
            . f f f f f f f f f f . 
            . . f f . . . f f f . . 
            `],
        200,
        true
        )
    } else if (guard4.vy < -1) {
        animation.runImageAnimation(
        guard4,
        [img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f f e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f f e e e e e e f e f 
            f f f f e e e e f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            e 4 f 6 8 8 8 8 6 f 4 e 
            4 d f 8 8 8 8 8 8 c d 4 
            4 4 f 9 9 8 8 9 9 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f e e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f e e e e e e e f e f 
            f f f e e e e f f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            . 4 f 6 8 8 8 6 f e 4 e 
            . 4 f 9 8 8 8 9 e d d 4 
            . e f f f f f f e e 4 . 
            . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f f e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f f f e e e e e f e f 
            f f f f f e e e e f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            e 4 e f 6 8 8 8 6 f 4 . 
            4 d d e 9 8 8 8 9 f 4 . 
            . 4 e e f f f f f f e . 
            . . . . . . . f f f . . 
            `],
        250,
        true
        )
    }
})
forever(function () {
    if (guard2.vx < -1) {
        animation.runImageAnimation(
        guard2,
        [img`
            . . . f f f f f . . . . 
            . . f e e e e e f f . . 
            . f e e e e e e e f f . 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            f f e 4 4 f f 4 e 4 f f 
            . f f e e e e 4 d 4 f . 
            . . f f f e e 4 f f f . 
            . . f e e e e e e f . . 
            . . f 8 6 6 e d d 4 . . 
            . . f 8 8 6 e d d e . . 
            . . f 8 8 8 f e e f . . 
            . . . f f f f f f . . . 
            . . . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . . f e e e e e f f f . 
            . f e e e e e e e f f f 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            . f e 4 4 f f 4 e 4 f f 
            . . f e e e e 4 d 4 f . 
            . . f f f e e e f f f . 
            . . f e 6 e d d 4 f . . 
            . . f 8 6 e d d e f . . 
            . f f 8 8 f e e f f f . 
            . f f f f f f f f f f . 
            . . f f f . . . f f . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . . f e e e e e f f f . 
            . f e e e e e e e f f f 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            . f e 4 4 f f 4 e 4 f f 
            . . f e e e e 4 d 4 f f 
            . . f f f e e 4 f f f . 
            . . f e 4 6 6 e d d 4 . 
            . . f 8 8 8 6 e d d e . 
            . f f 8 8 8 8 f e e f . 
            . f f f f f f f f f f . 
            . . f f f . . . f f . . 
            `],
        200,
        true
        )
    } else if (guard2.vy > 1) {
        animation.runImageAnimation(
        guard2,
        [img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 e e e e e e 4 e f 
            . f e e e f f e e e f . 
            . f f e e e e e e f f . 
            e 4 f 6 8 8 8 8 6 f 4 e 
            4 d f 8 8 8 8 8 8 f d 4 
            4 4 f 9 9 8 8 9 9 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e f f f . 
            f f f e e e e e e f f f 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 e e e e e e 4 e f 
            . f e e e f f e 4 e f e 
            f f f e 4 4 4 4 d d 4 e 
            e 4 f 6 8 8 6 e d d e . 
            . . f 9 8 8 9 f e e . . 
            . . f f f f f f f . . . 
            . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e f f f . 
            f f f e e e e e e f f f 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 e e e e e e 4 e f 
            e f e 4 e f f e e e f . 
            e 4 d d 4 4 4 4 e f f f 
            . e d d e 6 8 8 6 f 4 e 
            . . e e f 9 8 8 9 f . . 
            . . . f f f f f f f . . 
            . . . . . . . f f f . . 
            `],
        250,
        true
        )
    }
    if (guard2.vx > 1) {
        animation.runImageAnimation(
        guard2,
        [img`
            . . . . f f f f f . . . 
            . . f f e e e e e f . . 
            . f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f f 
            . f 4 d 4 e e e e f f . 
            . f f f 4 e e f f f . . 
            . . f e e e e e e f . . 
            . . 4 d d e 6 6 8 f . . 
            . . e d d e 6 8 8 f . . 
            . . f e e f 8 8 8 f . . 
            . . . f f f f f f . . . 
            . . . . f f f . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e e f . . 
            f f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f . 
            . f 4 d 4 e e e e f . . 
            . f f f e e e f f f . . 
            . . f 4 d d e 6 e f . . 
            . . f e d d e 6 8 f . . 
            . f f f e e f 8 8 f f . 
            . f f f f f f f f f f . 
            . . f f . . . f f f . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e e f . . 
            f f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f . 
            f f 4 d 4 e e e e f . . 
            . f f f 4 e e f f f . . 
            . 4 d d e 6 6 4 e f . . 
            . e d d e 6 8 8 8 f . . 
            . f e e f 8 8 8 8 f f . 
            . f f f f f f f f f f . 
            . . f f . . . f f f . . 
            `],
        200,
        true
        )
    } else if (guard2.vy < -1) {
        animation.runImageAnimation(
        guard2,
        [img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f f e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f f e e e e e e f e f 
            f f f f e e e e f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            e 4 f 6 8 8 8 8 6 f 4 e 
            4 d f 8 8 8 8 8 8 c d 4 
            4 4 f 9 9 8 8 9 9 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f e e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f e e e e e e e f e f 
            f f f e e e e f f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            . 4 f 6 8 8 8 6 f e 4 e 
            . 4 f 9 8 8 8 9 e d d 4 
            . e f f f f f f e e 4 . 
            . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f f e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f f f e e e e e f e f 
            f f f f f e e e e f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            e 4 e f 6 8 8 8 6 f 4 . 
            4 d d e 9 8 8 8 9 f 4 . 
            . 4 e e f f f f f f e . 
            . . . . . . . f f f . . 
            `],
        250,
        true
        )
    }
})
forever(function () {
    if (guard1.vx < -1) {
        animation.runImageAnimation(
        guard1,
        [img`
            . . . f f f f f . . . . 
            . . f e e e e e f f . . 
            . f e e e e e e e f f . 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            f f e 4 4 f f 4 e 4 f f 
            . f f e e e e 4 d 4 f . 
            . . f f f e e 4 f f f . 
            . . f e e e e e e f . . 
            . . f 8 6 6 e d d 4 . . 
            . . f 8 8 6 e d d e . . 
            . . f 8 8 8 f e e f . . 
            . . . f f f f f f . . . 
            . . . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . . f e e e e e f f f . 
            . f e e e e e e e f f f 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            . f e 4 4 f f 4 e 4 f f 
            . . f e e e e 4 d 4 f . 
            . . f f f e e e f f f . 
            . . f e 6 e d d 4 f . . 
            . . f 8 6 e d d e f . . 
            . f f 8 8 f e e f f f . 
            . f f f f f f f f f f . 
            . . f f f . . . f f . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . . f e e e e e f f f . 
            . f e e e e e e e f f f 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            . f e 4 4 f f 4 e 4 f f 
            . . f e e e e 4 d 4 f f 
            . . f f f e e 4 f f f . 
            . . f e 4 6 6 e d d 4 . 
            . . f 8 8 8 6 e d d e . 
            . f f 8 8 8 8 f e e f . 
            . f f f f f f f f f f . 
            . . f f f . . . f f . . 
            `],
        200,
        true
        )
    } else if (guard1.vy > 1) {
        animation.runImageAnimation(
        guard1,
        [img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 e e e e e e 4 e f 
            . f e e e f f e e e f . 
            . f f e e e e e e f f . 
            e 4 f 6 8 8 8 8 6 f 4 e 
            4 d f 8 8 8 8 8 8 f d 4 
            4 4 f 9 9 8 8 9 9 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e f f f . 
            f f f e e e e e e f f f 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 e e e e e e 4 e f 
            . f e e e f f e 4 e f e 
            f f f e 4 4 4 4 d d 4 e 
            e 4 f 6 8 8 6 e d d e . 
            . . f 9 8 8 9 f e e . . 
            . . f f f f f f f . . . 
            . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e f f f . 
            f f f e e e e e e f f f 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 e e e e e e 4 e f 
            e f e 4 e f f e e e f . 
            e 4 d d 4 4 4 4 e f f f 
            . e d d e 6 8 8 6 f 4 e 
            . . e e f 9 8 8 9 f . . 
            . . . f f f f f f f . . 
            . . . . . . . f f f . . 
            `],
        250,
        true
        )
    }
    if (guard1.vx > 1) {
        animation.runImageAnimation(
        guard1,
        [img`
            . . . . f f f f f . . . 
            . . f f e e e e e f . . 
            . f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f f 
            . f 4 d 4 e e e e f f . 
            . f f f 4 e e f f f . . 
            . . f e e e e e e f . . 
            . . 4 d d e 6 6 8 f . . 
            . . e d d e 6 8 8 f . . 
            . . f e e f 8 8 8 f . . 
            . . . f f f f f f . . . 
            . . . . f f f . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e e f . . 
            f f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f . 
            . f 4 d 4 e e e e f . . 
            . f f f e e e f f f . . 
            . . f 4 d d e 6 e f . . 
            . . f e d d e 6 8 f . . 
            . f f f e e f 8 8 f f . 
            . f f f f f f f f f f . 
            . . f f . . . f f f . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e e f . . 
            f f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f . 
            f f 4 d 4 e e e e f . . 
            . f f f 4 e e f f f . . 
            . 4 d d e 6 6 4 e f . . 
            . e d d e 6 8 8 8 f . . 
            . f e e f 8 8 8 8 f f . 
            . f f f f f f f f f f . 
            . . f f . . . f f f . . 
            `],
        200,
        true
        )
    } else if (guard1.vy < -1) {
        animation.runImageAnimation(
        guard1,
        [img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f f e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f f e e e e e e f e f 
            f f f f e e e e f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            e 4 f 6 8 8 8 8 6 f 4 e 
            4 d f 8 8 8 8 8 8 c d 4 
            4 4 f 9 9 8 8 9 9 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f e e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f e e e e e e e f e f 
            f f f e e e e f f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            . 4 f 6 8 8 8 6 f e 4 e 
            . 4 f 9 8 8 8 9 e d d 4 
            . e f f f f f f e e 4 . 
            . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f f e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f f f e e e e e f e f 
            f f f f f e e e e f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            e 4 e f 6 8 8 8 6 f 4 . 
            4 d d e 9 8 8 8 9 f 4 . 
            . 4 e e f f f f f f e . 
            . . . . . . . f f f . . 
            `],
        250,
        true
        )
    }
})
