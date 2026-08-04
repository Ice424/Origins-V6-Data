const mbti = [
    "INTJ", "INTP", "ENTJ", "ENTP", "ISTJ", "ISFJ", "ESTJ", "ESFJ", "INFJ", "INFP", "ENFJ", "ENFP", "ISTP", "ISFP", "ESTP", "ESFP"
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




const open_mbti = (player) => {
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

const MBTI_CHEST = [
    Item.of('minecraft:bricks', { "minecraft:item_name": { "color": "light_purple", "italic": false, "text": "INTJ" }, "minecraft:custom_data": { "UI": 1 } }),
    Item.of('minecraft:redstone', { "minecraft:item_name": { "color": "light_purple", "italic": false, "text": "INTP" }, "minecraft:custom_data": { "UI": 1 } }),
    Item.of('minecraft:crossbow', { "minecraft:item_name": { "color": "light_purple", "italic": false, "text": "ENTJ" }, "minecraft:custom_data": { "UI": 1 } }),
    Item.of('minecraft:emerald', { "minecraft:item_name": { "color": "light_purple", "italic": false, "text": "ENTP" }, "minecraft:custom_data": { "UI": 1 } }),
    Item.of("minecraft:air"),
    Item.of('minecraft:iron_chestplate', { "minecraft:item_name": { "color": "blue", "italic": false, "text": "ISTJ" }, "minecraft:custom_data": { "UI": 1 } }),
    Item.of('minecraft:milk_bucket', { "minecraft:item_name": { "color": "blue", "italic": false, "text": "ISFJ" }, "minecraft:custom_data": { "UI": 1 } }),
    Item.of('minecraft:iron_pickaxe', { "minecraft:item_name": { "color": "blue", "italic": false, "text": "ESTJ" }, "minecraft:custom_data": { "UI": 1 } }),
    Item.of('minecraft:cake', { "minecraft:item_name": { "color": "blue", "italic": false, "text": "ESFJ" }, "minecraft:custom_data": { "UI": 1 } }),
    Item.of("minecraft:air"),
    Item.of("minecraft:air"),
    Item.of("minecraft:air"),
    Item.of("minecraft:air"),
    Item.of("minecraft:air"),
    Item.of("minecraft:air"),
    Item.of("minecraft:air"),
    Item.of("minecraft:air"),
    Item.of("minecraft:air"),
    Item.of("minecraft:ender_eye", { "minecraft:item_name": { "color": "green", "italic": false, "text": "INFJ" }, "minecraft:custom_data": { "UI": 1 } }),
    Item.of("minecraft:lead", { "minecraft:item_name": { "color": "green", "italic": false, "text": "INFP" }, "minecraft:custom_data": { "UI": 1 } }),
    Item.of("minecraft:beacon", { "minecraft:item_name": { "color": "green", "italic": false, "text": "ENFJ" }, "minecraft:custom_data": { "UI": 1 } }),
    Item.of("minecraft:sugar", { "minecraft:item_name": { "color": "green", "italic": false, "text": "ENFP" }, "minecraft:custom_data": { "UI": 1 } }),
    Item.of("minecraft:air"),
    Item.of("minecraft:anvil", { "minecraft:item_name": { "color": "yellow", "italic": false, "text": "ISTP" }, "minecraft:custom_data": { "UI": 1 } }),
    Item.of("minecraft:compass", { "minecraft:item_name": { "color": "yellow", "italic": false, "text": "ISFP" }, "minecraft:custom_data": { "UI": 1 } }),
    Item.of("minecraft:iron_sword", { "minecraft:item_name": { "color": "yellow", "italic": false, "text": "ESTP" }, "minecraft:custom_data": { "UI": 1 } }),
    Item.of("minecraft:music_disc_blocks", { "minecraft:item_name": { "color": "yellow", "italic": false, "text": "ESFP" }, "minecraft:custom_data": { "UI": 1 } })
]



NeoOrigins.registerCallback("ice:open_mbti_ui", player => {
    open_mbti(player)
})

const close = (player) => {
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
    let player = e.getPlayer()


    if (String(player.uuid) in open_ui) {
        let CurrentView = open_ui[String(player.uuid)].CurrentView
        let PreviousView = open_ui[String(player.uuid)].PreviousView
        var minecart = player.level.getEntities().find(e =>
            e.type == "minecraft:chest_minecart" &&
            e.tags.contains(String(player.uuid))
        )
        let pData = player.persistentData
        let server = player.getServer()
        server.runCommandSilent(`tp ${String(minecart.uuid)} ${String(player.uuid)}`)
        open_ui[String(player.uuid)].CurrentView = minecart.getAllItems()
        let missingIndex = -1
        if (PreviousView.length != 0) {
            if (CurrentView.length != PreviousView.length) {

                missingIndex = PreviousView.findIndex(stack => stack.id === "minecraft:air");
                let selected_mbti = ""





                if (missingIndex !== -1) {
                    selected_mbti = mbti[missingIndex];
                    close(player);
                }

                server.runCommandSilent("clear @a *[minecraft:custom_data~{UI:1.0d}]")

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
        }
        if (missingIndex == -1) {
            open_ui[String(player.uuid)].PreviousView = CurrentView
        }

    }
})
