NeoOrigins.registerCallback("ice:rewind", player => {
    rewind(player)
})

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event
    event.register(Commands.literal("rewind").requires(source => source.hasPermission(2)).executes(ctx => rewind(ctx.source.player)))

}

)
const rewind = (player) => {
    console.log("HEllo?")
    const entities = player.level.getEntities().filterDistance(player.blockPosition(), 128)
    let server = player.level.server
    server.runCommandSilent(`execute as ${String(player.uuid)} at @s run playsound ice:ice.rewind.user master @s ~ ~ ~`)
    let markers = []
    for (let i = 0; i < entities.length; i++) {
        markers.push(summon_marker(entities[i]))
        if (entities[i] != player) {
            server.runCommandSilent(`execute as ${String(entities[i].uuid)} at @s run playsound ice:ice.rewind.victim master @s ~ ~ ~`)
        }
    }
    setTimeout(() => { resolve_rewind(markers) }, 10000, markers);
    return 1

}

const resolve_rewind = (markers) => {
    const server = markers[0].marker.server
    for (let i = 0; i < markers.length; i++) {
        let entity = markers[i].entity
        let marker = markers[i].marker
        if (entity.isAlive()) {
            if (entity.isPlayer()) {
                entity.potionEffects.add('minecraft:blindness',
                    30,
                    0,
                    true,
                    false
                )
            }
            entity.setPosition(marker.x, marker.y, marker.z)
            entity.setYaw(marker.yaw)
            entity.setPitch(marker.pitch)
        }
    }
    server.runCommandSilent("kill @e[type=marker, tag=rewind]")
}

const summon_marker = (entity) => {
    var marker = entity.level.createEntity("minecraft:marker")
    marker.setPosition(entity.x, entity.y, entity.z)
    marker.setYaw(entity.yaw)
    marker.setPitch(entity.pitch)
    marker.addTag("rewind")
    marker.spawn()
    return { "entity": entity, "marker": marker }
}


