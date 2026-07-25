const mbti = [
    "INTJ", "INTP", "ENTJ", "ENTP", "ISTJ", "ISFJ", "ESTJ", "ESFJ", "INFJ", "INFP", "ENFJ", "ENFP", "ISTP", "ISFP", "ESTP", "ESFP"
]
const mbti_map = {
    "ENFJ": ["ice:mbti/enfj/haste", "ice:mbti/enfj/slowness", "ice:mbti/enfj/speed", "ice:mbti/enfj/strength"],
    "ENFP": ["ice:mbti/enfp/hunger", "ice:mbti/enfp/jump", "ice:mbti/enfp/speed"],
    "ENTJ": ["ice:mbti/entj/give", "ice:mbti/entj/tools"],
    "ENTP": ["ice:mbti/entp/attack", "ice:mbti/entp/hero"],
    "ESFJ": ["ice:mbti/esfj/cook", "ice:mbti/esfj/eat"],
    "ESFP": ["ice:mbti/esfp/nausea", "ice:mbti/esfp/music", "ice:mbti/esfp/blindness"],
    "ESTJ": ["ice:mbti/estj/haste"],
    "ESTP": [],
    "INFJ": [],
    "INFP": [],
    "INTJ": [],
    "INTP": [],
    "ISFJ": [],
    "ISFP": [],
    "ISTJ": [],
    "ISTP": []
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
                    for (let i = 0; i < mbti_map[old_mbti].length; i++) {
                        console.log("Removed " + mbti_map[old_mbti][i])
                        server.runCommand(`power remove ${String(player.uuid)} ${mbti_map[old_mbti][i]}`)
                    }
                }


                for (let i = 0; i < mbti_map[selected_mbti].length; i++) {
                    console.log("Granted " + mbti_map[selected_mbti][i])
                    server.runCommand(`power grant ${String(player.uuid)} ${mbti_map[selected_mbti][i]}`)
                }
                pData.putString(String(player.uuid), selected_mbti)
            }
        }
        if (missingIndex == -1) {
            open_ui[String(player.uuid)].PreviousView = CurrentView
        }

    }
})
