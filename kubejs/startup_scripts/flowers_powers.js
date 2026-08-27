global.aqua_flower = player => {
    const server = player.level.server
    server.runCommandSilent(`give ${String(player.getUsername())} iron_sword[damage=175,enchantments={levels:{"minecraft:sharpness":7}}] 1`)
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

global.activeAreas = new Map()
global.blue_flower = player => {
    const server = player.level.server

    const snapshot = global.activeAreas.get(player.uuid.toString())

    if (snapshot) {
        restoreArea(snapshot)
    }
    server.runCommandSilent(`execute at ${String(player.uuid)} as ${String(player.uuid)} run tp @s ^ ^ ^${Math.round(player.persistentData.getFloat("blueFlowerCharge") ?? 0)}`)
    global.activeAreas.set(player.uuid.toString(), saveArea(player))
    clearArea(player)
}



global.omega_flower = player => {
    player.tell("omega_flower")

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
        swapPlayers(player, target_player)
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

function saveArea(player) {
    const level = player.level
    const origin = player.blockPosition()

    const snapshot = {
        minX: origin.x - 1.5,
        minY: origin.y - 1.5,
        minZ: origin.z - 1.5,

        maxX: origin.x + 2.5,
        maxY: origin.y + 3.5,
        maxZ: origin.z + 2.5,

        level: level,
        blocks: []
    }

    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 2; y++) {
            for (let z = -1; z <= 1; z++) {
                let pos = origin.offset(x, y, z)

                let blockState = level.getBlockState(pos)
                let blockEntity = level.getBlockEntity(pos)
                let nbt = null

                if (blockEntity) {
                    nbt = blockEntity.saveWithFullMetadata(
                        level.registryAccess()
                    )
                }

                snapshot.blocks.push({
                    x: pos.x,
                    y: pos.y,
                    z: pos.z,
                    state: blockState,
                    nbt: nbt
                })
            }
        }
    }

    return snapshot
}

function clearArea(player) {
    const level = player.level
    const origin = player.blockPosition()
    for (let x = -1; x <= 1; x++) {
        for (let y = 0; y <= 2; y++) {
            for (let z = -1; z <= 1; z++) {
                let pos = origin.offset(x, y, z)
                if (level.getBlockEntity(pos)) {
                    level.removeBlockEntity(pos)
                }  
                level.setBlock(pos, "minecraft:air", 3)
            }
        }

    }
    for (let x = -1; x <= 1; x++) {
        for (let z = -1; z <= 1; z++) {
            let pos = origin.offset(x, -1, z)
            level.setBlock(
                pos,
                "minecraft:blue_concrete",
                3
            )
        }
    }

}

function restoreArea(snapshot) {
    const level = snapshot.level

    for (let saved of snapshot.blocks) {
        let pos = new BlockPos(
            saved.x,
            saved.y,
            saved.z
        )
        level.setBlock(
            pos,
            saved.state,
            3
        )
    }

    for (let saved of snapshot.blocks) {
        if (saved.nbt === null) {
            continue
        }

        let pos = new BlockPos(
            saved.x,
            saved.y,
            saved.z
        )

        let blockEntity = level.getBlockEntity(pos)

        if (blockEntity) {
            blockEntity.loadWithComponents(saved.nbt, level.registryAccess())
            blockEntity.setChanged()
        }
    }
}


