const mbti = [
    "INTJ", "INTP", "ENTJ", "ENTP", "ENTP", "ISTJ", "ISFJ", "ESTJ", "ESFJ", "ESFJ", "ESFJ", "ESFJ", "ESFJ", "ESFJ", "ESFJ", "ESFJ", "ESFJ", "ESFJ", "INFJ", "INFP", "ENFJ", "ENFP", "ENFP", "ISTP", "ISFP", "ESTP", "ESFP"
]
const mbti_map = {
    "ENFJ": {
        "grant": ["ice:mbti/enfj/haste", "ice:mbti/enfj/slowness", "ice:mbti/enfj/speed", "ice:mbti/enfj/strength"],
        "revoke": ["ice:mbti/enfj/haste", "ice:mbti/enfj/slowness", "ice:mbti/enfj/speed", "ice:mbti/enfj/strength"],
        "revoke_commands": []
    },

    "ENFP": {
        "grant": ["ice:mbti/enfp/hunger", "ice:mbti/enfp/jump", "ice:mbti/enfp/speed"],
        "revoke": ["ice:mbti/enfp/hunger", "ice:mbti/enfp/jump", "ice:mbti/enfp/speed"],
        "revoke_commands": []
    },
    "ENTJ": {
        "grant": ["ice:mbti/entj/give", "ice:mbti/entj/tools"],
        "revoke": ["ice:mbti/entj/give", "ice:mbti/entj/tools", "ice:mbti/entj/fire"],
        "revoke_commands": []
    },
    "ENTP": {
        "grant": ["ice:mbti/entp/attack", "ice:mbti/entp/hero"],
        "revoke": ["ice:mbti/entp/attack", "ice:mbti/entp/hero"],
        "revoke_commands": []
    },
    "ESFJ": {
        "grant": ["ice:mbti/esfj/cook", "ice:mbti/esfj/eat"],
        "revoke": ["ice:mbti/esfj/cook", "ice:mbti/esfj/eat"],
        "revoke_commands": []
    },
    "ESFP": {
        "grant": ["ice:mbti/esfp/nausea", "ice:mbti/esfp/effects_mode", "ice:mbti/esfp/blindness", "ice:mbti/esfp/start_effects"],
        "revoke": ["ice:mbti/esfp/nausea", "ice:mbti/esfp/effects_mode", "ice:mbti/esfp/blindness", "ice:mbti/esfp/start_effects", "ice:mbti/esfp/stop_effects"],
        "revoke_commands": ["effect clear @e[distance=..50] minecraft:nausea", "effect clear @e[distance=..50] minecraft:blindness", "stopsound @a * ice:ice.caramelldansen.play"]
    },
    "ESTJ": {
        "grant": ["ice:mbti/estj/haste", "ice:mbti/estj/durability_drain_hit", "ice:mbti/estj/durability_drain_break"],
        "revoke": ["ice:mbti/estj/haste", "ice:mbti/estj/durability_drain_hit", "ice:mbti/estj/durability_drain_break"],
        "revoke_commands": []
    },
    "ESTP": {
        "grant": ["ice:mbti/estp/damage_through_armour", "ice:mbti/estp/tools"],
        "revoke": ["ice:mbti/estp/damage_through_armour", "ice:mbti/estp/tools"],
        "revoke_commands": []
    },
    "INFJ": {
        "grant": ["ice:mbti/infj/invis", "ice:mbti/infj/footsteps", "ice:mbti/infj/fatigue"],
        "revoke": ["ice:mbti/infj/invis", "ice:mbti/infj/footsteps", "ice:mbti/infj/fatigue"],
        "revoke_commands": []
    },
    "INFP": {
        "grant": ["ice:mbti/infp/regen", "ice:mbti/infp/ride", "ice:mbti/infp/tame", "ice:mbti/infp/target"],
        "revoke": ["ice:mbti/infp/regen", "ice:mbti/infp/ride", "ice:mbti/infp/tame", "ice:mbti/infp/target"],
        "revoke_commands": []
    },
    "INTJ": {
        "grant": ["ice:mbti/intj/climb", "ice:mbti/intj/light", "ice:mbti/intj/reach", "ice:mbti/intj/weak"],
        "revoke": ["ice:mbti/intj/climb", "ice:mbti/intj/light", "ice:mbti/intj/reach", "ice:mbti/intj/weak"],
        "revoke_commands": []
    },
    "INTP": {
        "grant": ["ice:mbti/intp/anvil", "ice:mbti/intp/damage", "ice:mbti/intp/enchanting", "ice:mbti/intp/phasing"],
        "revoke": ["ice:mbti/intp/anvil", "ice:mbti/intp/damage", "ice:mbti/intp/enchanting", "ice:mbti/intp/phasing"],
        "revoke_commands": []
    },
    "ISFJ": {
        "grant": ["ice:mbti/isfj/interact"],
        "revoke": ["ice:mbti/isfj/interact"],
        "revoke_commands": []
    },
    "ISFP": {
        "grant": ["ice:mbti/isfp/adventure", "ice:mbti/isfp/effects", "ice:mbti/isfp/levitation"],
        "revoke": ["ice:mbti/isfp/adventure", "ice:mbti/isfp/effects", "ice:mbti/isfp/levitation"],
        "revoke_commands": ["gamemode survival"]
    },
    "ISTJ": {
        "grant": ["ice:mbti/istj/blast_prot", "ice:mbti/istj/effects", "ice:mbti/istj/fall_damage", "ice:mbti/istj/sink"],
        "revoke": ["ice:mbti/istj/blast_prot", "ice:mbti/istj/effects", "ice:mbti/istj/fall_damage", "ice:mbti/istj/sink"],
        "revoke_commands": []
    },
    "ISTP": {
        "grant": ["ice:mbti/istp/durability_break", "ice:mbti/istp/durability_hit", "ice:mbti/istp/looting", "ice:mbti/istp/sleep"],
        "revoke": ["ice:mbti/istp/durability_break", "ice:mbti/istp/durability_hit", "ice:mbti/istp/looting", "ice:mbti/istp/sleep"],
        "revoke_commands": []
    }
}

var open_ui = {}


const MBTI_CHEST = [
    Item.of('minecraft:bricks', {
        "minecraft:item_name": { "color": "light_purple", "italic": false, "text": "INTJ" },
        "lore": [
            { "color": "gray", "italic": false, "text": 'Ability: Create light' },
            { "color": "gray", "italic": false, "text": 'Increased reach' },
            { "color": "gray", "italic": false, "text": 'Wall climbing' },
            { "color": "gray", "italic": false, "text": 'Weakness V' }
        ],
        "minecraft:custom_data": { "UI": 1 },
    }),

    Item.of('minecraft:redstone', {
        "minecraft:item_name": { "color": "light_purple", "italic": false, "text": "INTP" },
        "lore": [
            { "color": "gray", "italic": false, "text": 'Better enchanting' },
            { "color": "gray", "italic": false, "text": 'Cheap anvil cost' },
            { "color": "gray", "italic": false, "text": 'Phasing' },
            { "color": "gray", "italic": false, "text": 'Hurt by water & grass' }
        ],
        "minecraft:custom_data": { "UI": 1 },
    }),

    Item.of('minecraft:crossbow', {
        "minecraft:item_name": { "color": "light_purple", "italic": false, "text": "ENTJ" },
        "lore": [
            { "color": "gray", "italic": false, "text": 'Ability: Knockback Sniper' },
            { "color": "gray", "italic": false, "text": 'Cant use weapons' }
        ],
        "minecraft:custom_data": { "UI": 1 },
    }),

    Item.of('minecraft:emerald', {
        "minecraft:item_name": { "color": "light_purple", "italic": false, "text": "ENTP" },
        "lore": [
            { "color": "gray", "italic": false, "text": 'Hero of the village' },
            { "color": "gray", "italic": false, "text": 'Increased aggro range' }
        ],
        "minecraft:custom_data": { "UI": 1 },
    }),

    Item.of("minecraft:barrier", {"hide_tooltip":{},"custom_model_data":1, "minecraft:custom_data": { "UI": 1 }}),

    Item.of('minecraft:iron_chestplate', {
        "minecraft:item_name": { "color": "blue", "italic": false, "text": "ISTJ" },
        "lore": [
            { "color": "gray", "italic": false, "text": 'Fire resistance' },
            { "color": "gray", "italic": false, "text": 'Absorption V' },
            { "color": "gray", "italic": false, "text": 'Explosion immunity' },
            { "color": "gray", "italic": false, "text": 'Cant swim' },
            { "color": "gray", "italic": false, "text": 'Increased Fall damage' },
            { "color": "gray", "italic": false, "text": 'Slowness' }
        ],
        "minecraft:custom_data": { "UI": 1 },
    }),

    Item.of('minecraft:milk_bucket', {
        "minecraft:item_name": { "color": "blue", "italic": false, "text": "ISFJ" },
        "lore": [
            { "color": "gray", "italic": false, "text": 'Interact with entity to give:' },
            { "color": "gray", "italic": false, "text": 'Regeneration II' },
            { "color": "gray", "italic": false, "text": 'Absorption II' },
            { "color": "gray", "italic": false, "text": 'Takes 5 hearts' }
        ],
        "minecraft:custom_data": { "UI": 1 },
    }),

    Item.of('minecraft:iron_pickaxe', {
        "minecraft:item_name": { "color": "blue", "italic": false, "text": "ESTJ" },
        "lore": [
            { "color": "gray", "italic": false, "text": "Haste III" },
            { "color": "gray", "italic": false, "text": "Tools use more durability" }
        ],
        "minecraft:custom_data": { "UI": 1 },
    }),

    Item.of('minecraft:cake', {
        "minecraft:item_name": { "color": "blue", "italic": false, "text": "ESFJ" },
        "lore": [
            { "color": "gray", "italic": false, "text": "Crafted food gives more saturation" },
            { "color": "gray", "italic": false, "text": "Can only eat crafted food" }
        ],
        "minecraft:custom_data": { "UI": 1 },
    }),

    Item.of("minecraft:barrier", {"hide_tooltip":{},"custom_model_data":1, "minecraft:custom_data": { "UI": 1 }}),
    Item.of("minecraft:barrier", {"hide_tooltip":{},"custom_model_data":1, "minecraft:custom_data": { "UI": 1 }}),
    Item.of("minecraft:barrier", {"hide_tooltip":{},"custom_model_data":1, "minecraft:custom_data": { "UI": 1 }}),
    Item.of("minecraft:barrier", {"hide_tooltip":{},"custom_model_data":1, "minecraft:custom_data": { "UI": 1 }}),
    Item.of("minecraft:barrier", {"hide_tooltip":{},"custom_model_data":1, "minecraft:custom_data": { "UI": 1 }}),
    Item.of("minecraft:barrier", {"hide_tooltip":{},"custom_model_data":1, "minecraft:custom_data": { "UI": 1 }}),
    Item.of("minecraft:barrier", {"hide_tooltip":{},"custom_model_data":1, "minecraft:custom_data": { "UI": 1 }}),
    Item.of("minecraft:barrier", {"hide_tooltip":{},"custom_model_data":1, "minecraft:custom_data": { "UI": 1 }}),
    Item.of("minecraft:barrier", {"hide_tooltip":{},"custom_model_data":1, "minecraft:custom_data": { "UI": 1 }}),

    Item.of("minecraft:ender_eye", {
        "minecraft:item_name": { "color": "green", "italic": false, "text": "INFJ" },
        "lore": [
            { "color": "gray", "italic": false, "text": "Invisible" },
            { "color": "gray", "italic": false, "text": "Mining fatigue V" }
        ],
        "minecraft:custom_data": { "UI": 1 },
    }),

    Item.of("minecraft:lead", {
        "minecraft:item_name": { "color": "green", "italic": false, "text": "INFP" },
        "lore": [
            { "color": "gray", "italic": false, "text": "Ability: Tame mob" },
            { "color": "gray", "italic": false, "text": "Interact to ride entity" },
            { "color": "gray", "italic": false, "text": "No regeneration" }
        ],
        "minecraft:custom_data": { "UI": 1 },
    }),

    Item.of("minecraft:beacon", {
        "minecraft:item_name": { "color": "green", "italic": false, "text": "ENFJ" },
        "lore": [
            { "color": "gray", "italic": false, "text": "Aura of haste II" },
            { "color": "gray", "italic": false, "text": "Aura of speed II" },
            { "color": "gray", "italic": false, "text": "Aura of strength II" },
            { "color": "gray", "italic": false, "text": "Slowness V" }
        ],
        "minecraft:custom_data": { "UI": 1 },
    }),

    Item.of("minecraft:sugar", {
        "minecraft:item_name": { "color": "green", "italic": false, "text": "ENFP" },
        "lore": [
            { "color": "gray", "italic": false, "text": "Speed III" },
            { "color": "gray", "italic": false, "text": "Jump boost II" },
            { "color": "gray", "italic": false, "text": "Hunger II" }
        ],
        "minecraft:custom_data": { "UI": 1 },
    }),

    Item.of("minecraft:barrier", {"hide_tooltip":{},"custom_model_data":1, "minecraft:custom_data": { "UI": 1 }}),

    Item.of("minecraft:anvil", {
        "minecraft:item_name": { "color": "yellow", "italic": false, "text": "ISTP" },
        "lore": [
            { "color": "gray", "italic": false, "text": "Mobs drop 3x loot" },
            { "color": "gray", "italic": false, "text": "Tools don't use durability" },
            { "color": "gray", "italic": false, "text": "Can't sleep" }
        ],
        "minecraft:custom_data": { "UI": 1 },
    }),

    Item.of("minecraft:compass", {
        "minecraft:item_name": { "color": "yellow", "italic": false, "text": "ISFP" },
        "lore": [
            { "color": "gray", "italic": false, "text": "Ability: Toggle Levitation" },
            { "color": "gray", "italic": false, "text": "Dolphin's grace I" },
            { "color": "gray", "italic": false, "text": "Slow falling I" },
            { "color": "gray", "italic": false, "text": "Night Vision I" },
            { "color": "gray", "italic": false, "text": "Saturation I" },
            { "color": "gray", "italic": false, "text": "Adventure Mode" }
        ],
        "minecraft:custom_data": { "UI": 1 },
    }),

    Item.of("minecraft:iron_sword", {
        "minecraft:item_name": { "color": "yellow", "italic": false, "text": "ESTP" },
        "lore": [
            { "color": "gray", "italic": false, "text": "Strength II" },
            { "color": "gray", "italic": false, "text": "Deal damage through armour" },
            { "color": "gray", "italic": false, "text": "Cant use weapons" }
        ],
        "minecraft:custom_data": { "UI": 1 },
    }),

    Item.of("minecraft:music_disc_blocks", {
        "minecraft:item_name": { "color": "yellow", "italic": false, "text": "ESFP" },
        "lore": [
            { "color": "gray", "italic": false, "text": "Ability: Toggle aura" },
            { "color": "gray", "italic": false, "text": "Aura of blindness I" },
            { "color": "gray", "italic": false, "text": "Aura of nausea III" },
            { "color": "gray", "italic": false, "text": "Aura of caramelldansen" }
        ],
        "minecraft:custom_data": { "UI": 1 },
    })
]



NeoOrigins.registerCallback("ice:open_mbti_ui", player => {
    open_mbti(player)
})


const open_mbti = (player) => {
    player.addTag("mbti")
    var minecart = player.level.createEntity("minecraft:chest_minecart")
    minecart.setPosition(player.x, player.y, player.z)
    minecart.addTag(String(player.uuid))
    minecart.addTag("invisible_minecart")
    minecart.setInvulnerable(true)
    minecart.setNoGravity(true)
    minecart.setSilent(true)
    minecart.spawn()
    for (let i = 0; i < MBTI_CHEST.length; i++) {
        minecart.setStackInSlot(i, MBTI_CHEST[i].copy())
    }
    open_ui[String(player.uuid)] = { "CurrentView": [], "PreviousView": [] }
    if (minecart) {
        player.openMenu(minecart)
    }
    return 1
}

const close = (player) => {
    player.removeTag("mbti")
    player.removeTag("thief")
    delete open_ui[String(player.uuid)]
    var minecart = player.level.getEntities().find(e => {
        return e.type == "minecraft:chest_minecart" &&
            e.tags.contains(String(player.uuid))
    }
    )
    minecart.clearContent()
    minecart.kill()
}

PlayerEvents.inventoryClosed(e => {

    let player = e.getPlayer()

    if (String(player.uuid) in open_ui) {
        close(player)
    }
})

PlayerEvents.tick(e => {
    const player = e.getPlayer()
    const server = player.getServer()

    if (String(player.uuid) in open_ui) {
        let CurrentView = open_ui[String(player.uuid)].CurrentView
        let PreviousView = open_ui[String(player.uuid)].PreviousView
        var minecart = player.level.getEntities().find(e =>
            e.type == "minecraft:chest_minecart" &&
            e.tags.contains(String(player.uuid))
        )
        let pData = player.persistentData
        
        server.runCommandSilent(`tp ${String(minecart.uuid)} ${String(player.uuid)}`)
        open_ui[String(player.uuid)].CurrentView = minecart.getAllItems()
        let missingIndex = -1
        if (PreviousView.length != 0) {
            if (CurrentView.length != PreviousView.length) {
                if (player.getTags().contains("mbti")) {

                    missingIndex = PreviousView.findIndex(stack => stack.id === "minecraft:air");
                    let selected_mbti = ""





                    if (missingIndex !== -1) {
                        selected_mbti = mbti[missingIndex];
                        close(player);
                    }


                    server.runCommandSilent(`clear ${String(player.getUsername())} *[minecraft:custom_data~{UI:1.0d}]`)

                    if (pData.getAllKeys().contains(String(player.uuid))) {
                        let old_mbti = pData.getString(String(player.uuid))
                        for (let i = 0; i < mbti_map[old_mbti]["revoke"].length; i++) {
                            console.log("Removed " + mbti_map[old_mbti]["revoke"][i])
                            server.runCommand(`power remove ${String(player.uuid)} ${mbti_map[old_mbti]["revoke"][i]}`)
                        }
                        for (let i = 0; i < mbti_map[old_mbti]["revoke_commands"].length; i++) {
                            console.log("Removed " + mbti_map[old_mbti]["revoke_commands"][i])
                            server.runCommandSilent(`execute as ${String(player.uuid)} at ${String(player.uuid)} run ${mbti_map[old_mbti]["revoke_commands"][i]}`)
                        }
                    }


                    for (let i = 0; i < mbti_map[selected_mbti]["grant"].length; i++) {
                        console.log("Granted " + mbti_map[selected_mbti]["grant"][i])
                        server.runCommand(`power grant ${String(player.uuid)} ${mbti_map[selected_mbti]["grant"][i]}`)
                    }
                    pData.putString(String(player.uuid), selected_mbti)
                }
                if (player.getTags().contains("thief")) {
                    close(player)
                    server.runCommand(`clear ${String(player.getUsername())} *[minecraft:custom_data~{UI:1.0d}]`)
                
                }
            }
        }
        if (missingIndex == -1) {
            open_ui[String(player.uuid)].PreviousView = CurrentView
        }

    }

    //blue flower
    if (player.level.isClientSide()) {
        return
    }

    const key = player.uuid.toString()
    const snapshot = global.activeAreas.get(key)

    if (snapshot) {
        if (!isPlayerInside(snapshot, player)) {
        restoreArea(snapshot)
        global.activeAreas.delete(key)
    }
    }

    if (!player.isUsingItem()) {
        //console.log(`kill @e[type=block_display, tag=blue_platform, tag=${String(player.uuid)}]`)
        server.runCommandSilent(`kill @e[type=block_display, tag=blue_platform, tag=${String(player.uuid)}]`)
        return
    }

    const item = player.getUseItem()

    if (item.id !== 'ice:blue_flower') {
        return
    }

    let charge = (player.persistentData.getFloat("blueFlowerCharge") ?? 0)
    const eye = player.getEyePosition()
    const look = player.getLookAngle()

    const target_pos = {
        x: eye.x() + look.x() * charge,
        y: eye.y() + look.y() * charge,
        z: eye.z() + look.z() * charge
    }
    server.runCommandSilent(`execute at ${String(player.uuid)} as ${String(player.uuid)} run tp @e[tag=blue_platform, tag=${String(player.uuid)}] ${Math.round(target_pos.x)} ${Math.round(target_pos.y)-3} ${Math.round(target_pos.z)}`)
    server.runCommand("tag @e list")
    console.log(`execute at ${String(player.uuid)} as ${String(player.uuid)} run tp @e[tag=blue_platform, tag=${String(player.uuid)}] ${Math.round(target_pos.x)} ${Math.round(target_pos.y)-3} ${Math.round(target_pos.z)}`)
    if (charge < 64) {
        player.persistentData.putFloat("blueFlowerCharge", charge+=0.5)
    }

})

function isPlayerInside(snapshot, player) {
    const box = player.boundingBox

    return (
        box.minX >= snapshot.minX &&
        box.maxX <= snapshot.maxX &&

        box.minY >= snapshot.minY &&
        box.maxY <= snapshot.maxY &&

        box.minZ >= snapshot.minZ &&
        box.maxZ <= snapshot.maxZ
    )
}

function restoreArea(snapshot) {
    const level = snapshot.level
    
    // First restore all block states
    for (let saved of snapshot.blocks) {
        let pos = new BlockPos(
            saved.x,
            saved.y,
            saved.z
        )
        console.log(pos)
        level.setBlock(
            pos,
            saved.state,
            3
        )
    }

    // Then restore block entities
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



ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    event.register(Commands.literal('stealInv') 
        .requires(source => source.hasPermission(2))
        .executes(ctx => stealInv(ctx.source.player))

    )
    event.register(Commands.literal('stealArm') 
        .requires(source => source.hasPermission(2)) 
        .executes(ctx => stealArm(ctx.source.player)) 
        
    )
    event.register(Commands.literal('testing') 
        .requires(source => source.hasPermission(2)) 
        .executes(ctx => testing(ctx.source.player)) 
        
    )
})

const testing = player => {
    player.tell()
    return 1
}
NeoOrigins.registerCallback("ice:steal_inv", player => {
    stealInv(player)
})

NeoOrigins.registerCallback("ice:steal_arm", player => {
    stealArm(player)
})
const stealInv = (player) => {
    player.addTag("thief")
    const ray = player.rayTrace(124)
    if (!ray.entity) {return 0}
    if (!ray.entity.isPlayer()) {
        player.tell("Only works on players")
        return 0}
    const target = ray.entity
    
    const server = player.level.server
    server.runCommandSilent(`resource set ${String(player.getUsername())} ice:thief/cooldown 0`)
    open_ui[String(player.uuid)] = { "CurrentView": [], "PreviousView": [] }
    var minecart = player.level.createEntity("minecraft:chest_minecart")
    minecart.setPosition(player.x, player.y, player.z)
    minecart.addTag(String(player.uuid))
    minecart.addTag("invisible_minecart")
    minecart.setInvulnerable(true)
    minecart.setNoGravity(true)
    minecart.setSilent(true)
    minecart.spawn()
    for (let i = 9; i <= 35; i++) {
        console.log(i)
        console.log(target.inventory.getItem(i))
        fill_slot(minecart, i-9, target.inventory.getItem(i))
    }
    if (minecart) {
        player.openMenu(minecart)
    }
    return 1
}

const stealArm = (player) => {
    player.addTag("thief")
    const ray = player.rayTrace(124)
    if (!ray.entity) {return 0}
    if (!ray.entity.isPlayer()) {
        player.tell("Only works on players")
        return 0}
    const target = ray.entity
    const server = player.level.server

    server.runCommandSilent(`resource set ${String(player.getUsername())} ice:thief/cooldown 0`)
    open_ui[String(player.uuid)] = { "CurrentView": [], "PreviousView": [] }
    var minecart = player.level.createEntity("minecraft:chest_minecart")
    minecart.setPosition(player.x, player.y, player.z)
    minecart.addTag(String(player.uuid))
    minecart.addTag("invisible_minecart")
    minecart.setInvulnerable(true)
    minecart.setNoGravity(true)
    minecart.setSilent(true)
    minecart.spawn()
    for (let i = 0; i <= 35; i++) {
        minecart.setStackInSlot(i, Item.of("minecraft:barrier", {"hide_tooltip":{},"custom_model_data":1, "minecraft:custom_data": { "UI": 1 }}))
    }
    for (let i = 0; i <= 9; i++) {
        console.log(i)
        fill_slot(minecart, i+18, target.inventory.getItem(i))
    }
    fill_slot(minecart, 0, target.inventory.getItem(39))
    fill_slot(minecart, 1, target.inventory.getItem(38))
    fill_slot(minecart, 2, target.inventory.getItem(37))
    fill_slot(minecart, 3, target.inventory.getItem(36))
    fill_slot(minecart, 9 , target.inventory.getItem(40))

    if (minecart) {
        player.openMenu(minecart)
    }
    return 1
}

const fill_slot = (minecart, slot, item) => {
    if (item != Item.of("minecraft:air")){
            minecart.setStackInSlot(slot, item)
        } else {
            minecart.setStackInSlot(slot, Item.of("minecraft:barrier", {"hide_tooltip":{},"custom_model_data":1, "minecraft:custom_data": { "UI": 1 }}))
        
    }
}

