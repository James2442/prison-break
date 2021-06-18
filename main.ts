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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile34`, function (sprite, location) {
    game.splash("Thanks for getting my stuff back. Here's a tip for you : The cameras have a blind spot at the front of the prison, in the bottom-left corner - if you have the right tools you might be able to dig yourself out... Tod in cell 4 sells tools, and might be willing to give one to you for the right price.")
    tiles.setTileAt(tiles.getTileLocation(57, 5), sprites.dungeon.darkGroundNorthWest1)
    game.showLongText("New Goal : Talk to Tod in cell 4.", DialogLayout.Bottom)
    tiles.setWallAt(tiles.getTileLocation(33, 6), false)
    tiles.setTileAt(tiles.getTileLocation(33, 5), assets.tile`myTile35`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile32`, function (sprite, location) {
    game.showLongText("You Found : Ricky's Wallet", DialogLayout.Bottom)
    tiles.setTileAt(tiles.getTileLocation(50, 15), sprites.dungeon.darkGroundNorthWest1)
    info.changeScoreBy(-1)
    if (info.player1.score() == 0) {
        game.showLongText("You found Ricky's belongings! Bring them back to him for a reward.", DialogLayout.Bottom)
        tiles.setTileAt(tiles.getTileLocation(57, 5), assets.tile`myTile34`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Guard, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite, location) {
    game.showLongText("You Found : Ricky's Toothbrush", DialogLayout.Bottom)
    tiles.setTileAt(tiles.getTileLocation(53, 8), sprites.dungeon.floorLight1)
    info.changeScoreBy(-1)
    if (info.player1.score() == 0) {
        game.showLongText("You found Ricky's belongings! Bring them back to him for a reward.", DialogLayout.Bottom)
        tiles.setTileAt(tiles.getTileLocation(57, 5), assets.tile`myTile34`)
    }
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
info.onCountdownEnd(function () {
    game.over(true, effects.dissolve)
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile36`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(1, 30), assets.tile`myTile37`)
    pause(500)
    tiles.setTileAt(tiles.getTileLocation(1, 30), assets.tile`myTile38`)
    pause(500)
    tiles.setTileAt(tiles.getTileLocation(1, 30), assets.tile`myTile39`)
    pause(500)
    tiles.setTileAt(tiles.getTileLocation(1, 30), assets.tile`myTile40`)
    pause(500)
    tiles.setTileAt(tiles.getTileLocation(1, 30), assets.tile`myTile41`)
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
info.onLifeZero(function () {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(118, 30))
    game.showLongText("You died. Try again.", DialogLayout.Bottom)
    tiles.placeOnTile(guard1, tiles.getTileLocation(118, 25))
    tiles.placeOnTile(guard2, tiles.getTileLocation(118, 20))
    tiles.placeOnTile(guard3, tiles.getTileLocation(118, 15))
    guard1.follow(mySprite, 90)
    guard2.follow(mySprite, 80)
    guard3.follow(mySprite, 70)
    info.setLife(3)
    info.startCountdown(8)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile31`, function (sprite, location) {
    game.showLongText("You Found : Ricky's Pillow", DialogLayout.Bottom)
    tiles.setTileAt(tiles.getTileLocation(22, 13), sprites.castle.tileGrass1)
    info.changeScoreBy(-1)
    if (info.player1.score() == 0) {
        game.showLongText("You found Ricky's belongings! Bring them back to him for a reward.", DialogLayout.Bottom)
        tiles.setTileAt(tiles.getTileLocation(57, 5), assets.tile`myTile34`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile41`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(118, 30))
    game.showLongText("You escaped, but the guards are still after you! Run as far away as you can!", DialogLayout.Bottom)
    tiles.placeOnTile(guard1, tiles.getTileLocation(118, 25))
    tiles.placeOnTile(guard2, tiles.getTileLocation(118, 20))
    tiles.placeOnTile(guard3, tiles.getTileLocation(118, 15))
    guard1.follow(mySprite, 100)
    guard2.follow(mySprite, 90)
    guard3.follow(mySprite, 75)
    info.setLife(3)
    mySprite.setKind(SpriteKind.Player)
    guard1.setKind(SpriteKind.Guard)
    guard3.setKind(SpriteKind.Guard)
    guard2.setKind(SpriteKind.Guard)
    info.startCountdown(8)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile35`, function (sprite, location) {
    game.splash("Hey kid. I've heard you're in the market for some tools, huh? How about this : I'll lend you some tools if you can get both of us out of here. Sound good?.")
    tiles.setTileAt(tiles.getTileLocation(33, 5), sprites.dungeon.darkGroundNorthWest1)
    game.showLongText("New Goal : Use Tod's tools to dig out of prison.", DialogLayout.Bottom)
    tiles.setTileAt(tiles.getTileLocation(1, 30), assets.tile`myTile36`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    game.splash("Hey, I'm Ricky. I've got a favour to ask for. Someone's taken my things again, and if you could find them i'll be able to help you escape this place. Find my toothbrush, pillow and wallet and i'll help you out.")
    tiles.setTileAt(tiles.getTileLocation(57, 5), sprites.dungeon.darkGroundNorthWest1)
    game.showLongText("New Goal : Find Ricky's toothbrush, pillow and wallet and bring them back to him", DialogLayout.Bottom)
    tiles.setTileAt(tiles.getTileLocation(22, 13), assets.tile`myTile31`)
    tiles.setTileAt(tiles.getTileLocation(50, 15), assets.tile`myTile32`)
    tiles.setTileAt(tiles.getTileLocation(53, 8), assets.tile`myTile33`)
    info.setScore(3)
})
let mySprite: Sprite = null
let guard3: Sprite = null
let guard2: Sprite = null
let guard1: Sprite = null
scene.setBackgroundImage(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccfcffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccfcccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccfcccccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccfcccfcccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccfcccfccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccfccfccccccccccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccfccfccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccfcfccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccfcfcccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccffcccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccffccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccffcccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccfcccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccfccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccffccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccffcccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccfcccccfcfccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccfccccccfcfcccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccffccccccfcfccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccffcccfccfcccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccffcfccfccfccccccccccccccccccccccccccccccffffcccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccfffffffcccccccccccccccccccccccccc
    ccccccccccfffcfcfccccccccccccccccccccccccfffffffccccffccccccccccccccccccccccfccccccccccccccccccccccfccccccccccccfccccccccccccffccccccfcccccccccccccccccccccccccc
    ccccccccccccffffcccccccccccccccccccccffffcccccccccccccffcccccccccccccccccccfccccccccccccccccccccfffcccccccccccccfcccccccccccfccccccccfcccccccccccccccccccccccccc
    ccccccccccccfcfcccccccccccccccccccccfcccccccccccccccccccccccfcccccccccccccfccccccccccccccccccccfffccccccccccccccfccccccccccfcccccccccfcccccccccccccccccccccccccc
    ccccccccccccfcfcccccccccccccccccccccfcccccccccccccccccccccccfccccccccccccfcccccccccccccccccccffcccfcccccccccccccfccccccccffccccccccccfcccccccccccccccccccccccccc
    ccccccccccccfcfcccccccccccccccccccccfcccccccccccccccccccccccfcccccccccccfccccccccccccccccccffccccccfccccccccccccfcccccccfccccccccccccfcccccccccccccccccccccccccc
    ccccccccccccfcfcccccccccccccccccccccfcccccccccccccccccccccccfccccccccccfccccccccccccccccccfccccccccfccccccccccccfccccccfcccccccccccccfcccccccccccccccccccccccccc
    ccccccccccccfcfcccccccccccccccccccccfcccccccccccccccccccccccfcccccccccccfcccccccccccccccccfcccccccccfcccccccccccfccccffccccccccccccccfcccccccccccccccccccccccccc
    ccccccccccccfcfccccccccccccccccccccffcccccccccccccccccccccccfccccccccccccfccccccccccccccccfccccccccfccccccccccccfcccfccccccccccccccccfcccccccccccccccccccccccccc
    ccccccccccccfcfccccccccccccccccccccffcccccccccccccccccccccccfcccccccccccccffccccccccccccccfccccccccfccccccccccccfccfcccccccccccccccccfcccccccccccccccccccccccccc
    ccccccccccccfcfccccccccccccccccccccffcccccccccccccccccccccccfcccccccccccccccfcccccccccccccfccccccccfccccccccccccfcfcccccccccccccccccccfccccccccccccccccccccccccc
    ccccccccccccfcfccccccccccccccccccccffcccccccccccccccccccccccfccccccccccccccccfccccccccccccfcccccccfccccccccccccccffcccccccccccccccccccfccccccccccccccccccccccccc
    cccccccccccccffccccccccccccccccccccfcfccccccccccccccccccccccfccccccccccccccccfccccccccccccfcccccccfccccccccccccccfccccccccccccccccccccfccccccccccccccccccccccccc
    cccccccccccccffcccccccccccccccccccfccfccccccccccccccccccccccfcccccccccccccccccfcccccccccccfccccccfcccccccccccccccfccccccccccccccccccccfccccccccccccccccccccccccc
    cccccccccccccffcccccccccccccccccccfccfccccccccccccccccccccccfcccccccccccccccccfcccccccccccfccccccfccccccccccccccffccccccccccccccccccccfccccccccccccccccccccccccc
    cccccccccccccffcccccccccccccccccccfccfccccccccccccccccccccccfccccccccccccccccccfccccccccccfccccfffccccccccccccccfccccccccccccccccccccfcccccccccccccccccccccccccc
    cccccccccccccffcccccccccccccccccccfccfccccccccccccccccccccccfccccccccccccccccffcccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccffcccccccccccccccccccffffcccccccccccccccccccccccfcccccccccccccffccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccffccccccccccccccccccccccffccccccccccccccccccccccfcccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccfcccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccfcccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccfcccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccfcccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccffccfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccffcccccccfffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccfffcccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccfcfcccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccfcfccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccfccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccfcccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccfccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccfcccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccfccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccfcccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccfccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccfccccccfccccccccccccccccccccfffffccccccccccccccccccccccccccccccccccfcccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccfcccccfccccccccccccccccccccfcccccfffffccccccccccccccccccccccccccccffcccccccccccccfccccccccccfffffccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccfccccfcccccccccccccccccccccfccccccccccfcccffffffffccccccccccccccccffcccccccccccccfccccccffffccffcccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccfccccfccccccccccccccccccccccfcccccccccccffcfcccccfcccccccccccccccccffccccccccccccfccccccfcccccfcccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccfcccfcccccccccccccccccccccccfcccccccccccccffcccccfccccccccccccccccfffccccccccccccfccccccfcccffccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccfccfffffffffffffcccccccccccfccccccccccccccffccccfcccccccccccccccccfcfccccccccccccfcccccfccffccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccfcccccccccccccfccccccccfcccfccccccccccccccfccccfcccccccccccccccccfccfccccccccccccfccccfccfccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccfccccccccccccfcccccccccfcccfccccccccccccccfccccfccccccccccccccccffccfccccccccccccfccccfffcccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccfccccccccccccfcccccccccfcccfcccccccccccccfccccfccccccccccccccccffcccfcccccccccccfccccffcccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccfcccccccccccfccccccccccfccfccccccccccccccfccccfccccccccccccccffcfcccfcccccccccccfcccffccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccfccccccccccfccccccccccccfcfccccccccccccccfcccfccccccccccccccfcccfcccfcccccccccccfcfffcccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccfcccccccccccfccccccccccccfcfcccccccccccccfcccfccccccccccccccfcccfccccfcccccccccccffcfccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccfccccccccccfcccccccccccccfcfcccccccccccccfcccfcccccccccccccfccccfccccfcccccccccccfcffccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccfcccccccccfccccccccccccccfcfcccccccccccccfccfcccccccccccccfccccfcccccfcccccccccccfcfcffccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccfcccccccccfcccccccccccccccfcccccccccccccfcccfccccccccccccfcccccfcccccfccccccccccfcfccccffccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccfcccccccffccccccccccccccccfccccccccccccccfcfccccccccccccfcccccfccccccfccccccccccfcfccccccfcccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccfcccccffccccccccccccccccccfcccccccccccccccffccccccccccccfcccccfccccccfccccccccccffccccccccffcccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccfcccffccccccccccccccccccccffccccccccccccccfcfccccccccccccfcccfcccccccfccccccccccffccccccccccffcccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccfcffcccccccccccccccccccccccfcccccccccccccccccfcccccccccccffccfcccccccffcccccccccfcccccccccccccfccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccfffcccccccccccccccccccccccccfccccccccccccccccccffccccccfffcfccfcccccccccffffccccffccccccccccccccffccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccffcccccccccccccccccccccccccccffcccccccccccccccccccfccfffcccccffccccccccccccccfffcfcccccccccccccccccfcccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccffcccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
pause(2000)
guard1 = sprites.create(img`
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
guard2 = sprites.create(img`
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
guard3 = sprites.create(img`
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
let prisoner2 = sprites.create(img`
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
mySprite = sprites.create(assets.image`Sprite`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(13, 1))
tiles.placeOnTile(prisoner1, tiles.getTileLocation(55, 1))
tiles.placeOnTile(guard1, tiles.getTileLocation(52, 16))
tiles.placeOnTile(guard2, tiles.getTileLocation(6, 16))
tiles.placeOnTile(guard3, tiles.getTileLocation(30, 16))
tiles.placeOnTile(guard4, tiles.getTileLocation(55, 28))
tiles.placeOnTile(prisoner2, tiles.getTileLocation(31, 1))
game.showLongText("Welcome to Wilford Prison. You're going to be here for a long time, so make yourself welcome. You are housed here with 7 other prisoners and 4 guards. Say hi when you get some time!", DialogLayout.Bottom)
tiles.setWallAt(tiles.getTileLocation(15, 6), true)
tiles.setWallAt(tiles.getTileLocation(33, 6), true)
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
    if (prisoner2.isHittingTile(CollisionDirection.Left)) {
        prisoner2.vx += 50
    } else if (prisoner2.isHittingTile(CollisionDirection.Right)) {
        prisoner2.vx += -50
    }
    if (prisoner2.isHittingTile(CollisionDirection.Top)) {
        prisoner2.vy += 50
    } else if (prisoner2.isHittingTile(CollisionDirection.Bottom)) {
        prisoner2.vy += -50
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
    prisoner2.setVelocity(randint(-50, 50), randint(-50, 50))
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
