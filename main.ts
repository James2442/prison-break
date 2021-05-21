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
let mySprite2 = sprites.create(img`
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
let mySprite3 = sprites.create(img`
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
tiles.placeOnTile(mySprite3, tiles.getTileLocation(19, 1))
game.onUpdate(function () {
    if (mySprite3.isHittingTile(CollisionDirection.Left)) {
        mySprite3.vx += 50
    } else if (mySprite3.isHittingTile(CollisionDirection.Right)) {
        mySprite3.vx += -50
    }
    if (mySprite3.isHittingTile(CollisionDirection.Top)) {
        mySprite3.vy += 50
    } else if (mySprite3.isHittingTile(CollisionDirection.Bottom)) {
        mySprite3.vy += -50
    }
})
game.onUpdate(function () {
    if (mySprite2.isHittingTile(CollisionDirection.Left)) {
        mySprite2.vx += 50
    } else if (mySprite2.isHittingTile(CollisionDirection.Right)) {
        mySprite2.vx += -50
    }
    if (mySprite2.isHittingTile(CollisionDirection.Top)) {
        mySprite2.vy += 50
    } else if (mySprite2.isHittingTile(CollisionDirection.Bottom)) {
        mySprite2.vy += -50
    }
})
game.onUpdateInterval(1000, function () {
    mySprite2.setVelocity(randint(-50, 50), randint(-50, 50))
})
game.onUpdateInterval(1000, function () {
    mySprite3.setVelocity(randint(-50, 50), randint(-50, 50))
})
forever(function () {
    if (mySprite2.vx < -1) {
        animation.runImageAnimation(
        mySprite2,
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
    } else if (mySprite2.vy > 1) {
        animation.runImageAnimation(
        mySprite2,
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
    if (mySprite2.vx > 1) {
        animation.runImageAnimation(
        mySprite2,
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
    } else if (mySprite2.vy < -1) {
        animation.runImageAnimation(
        mySprite2,
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
