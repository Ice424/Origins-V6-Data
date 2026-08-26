global.aqua_flower = player => {
    player.tell("aqua")
}
global.purple_flower = player => {
    const server = player.level.server
    server.runCommandSilent(`give ${String(player.getUsername())} ice:seth_specs`)
    //player.addItem("ice:seth_specs") <- this can lead to the item being voided bcs reasons
}
global.orange_flower = player => {
    player.tell("orange")
    const effects = player.potionEffects
    effects.add('minecraft:strength', 5 * 60 * 20, 4)
}
global.green_flower = player => {
    const effects = player.potionEffects
    effects.add('minecraft:saturation', 10 * 60 * 20, 0, false, false)
    player.tell("green")
}
global.yellow_flower = player => {
    player.tell("Secondary ability added")
    const server = player.level.server
    server.runCommandSilent(`power grant ${String(player.getUsername())} ice:flowery/give`)
}
global.blue_flower = player => {
    player.tell("blue")

}
global.omega_flower = player => {
    player.tell("FLOWERY")

}

global.seth_specs = player => {
    const ray = player.rayTrace(16)
    const target = ray.entity
    let server = player.level.server
    
    server.runCommandSilent(`give ${String(player.getUsername())} ice:seth_book[lore=['[{"italic":false,"text":"Bound to "},{"bold":true,"color":"light_purple","italic":false,"text":${String(target.getUsername())}}]'],custom_data={player:"${String(target.uuid)}"}] 1`)
    server.runCommandSilent(`clear ${String(player.getUsername())} ice:seth_specs 1`)
    
}

global.seth_book = (player, book) => {
    const server = player.level.server

    let components = Array.from(book.components)
    let target_uuid = null
    for (let i = 0; i < components.length; i++) {
        if (String(components[i].type()) == "minecraft:custom_data") {
            target_uuid = String(components[i].value().copyTag()["player"]).replaceAll('"', '')
        }
    }
    let target_player = null
    if (target_uuid) {
        target_player = server.getPlayerList().getPlayer(target_uuid)
    }
    if (target_player) {
        try {
            swapPlayers(player, target_player)
        } catch (error) {
            console.log(error)
        }
        
        return true
    } 
        
    player.tell("User not online")
    return false

}


function swapPlayers(a, b) {

    const aPos = a.position()
    const aLevel = a.serverLevel()
    const aYaw = a.yRotO
    const aPitch = a.xRotO

    const bPos = b.position()
    const bLevel = b.serverLevel()
    const bYaw = b.yRotO
    const bPitch = b.xRotO

    a.teleportToLevel(
        bLevel,
        bPos.x(), bPos.y(), bPos.z(),
        bYaw, bPitch
    )

    b.teleportToLevel(
        aLevel,
        aPos.x(), aPos.y(), aPos.z(),
        aYaw, aPitch
    )
}