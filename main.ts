sprites.on_fire_created(function (location) {
    scene.createParticleEffectAtLocation(location, effects.fire)
    sprites.set_flame_strength(location, 5)
})
controller.anyButton.onEvent(ControllerButtonEvent.Repeated, function () {
    sprites.spray(mySprite, assets.image`water`)
})
sprites.on_fire_destroyed(function (location) {
    scene.clearParticleEffectsAtLocation(location)
    tiles.setTileAt(location, assets.tile`burnt tree`)
})
scene.onOverlapTile(SpriteKind.Water, assets.tile`tree fire`, function (sprite, location) {
    sprite.destroy()
    sprites.change_flame_strength_by(location, -1)
})
let mySprite: Sprite = null
game.set_health_of_trees(7)
game.set_strength_of_wind(3)
game.set_dryness_of_grass(3)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`Fire Helicopter Right`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
for (let index = 0; index < 16; index++) {
    sprites.create_spreading_fire(assets.tile`tree`, assets.tile`tree fire`)
}
hud.fire_hud(true)
hud.fire_hud_label("Fires:")
hud.danger_hud(true)
hud.danger_hud_label("Fire Danger Levels")
hud.forest_hud(true)
hud.forest_hud_label("Healthy Forest")
game.onUpdate(function () {
    sprites.random_spread()
})
