const mbti = [
    "INTJ", "INTP", "ENTJ", "ENTP", "ISTJ", "ISFJ", "ESTJ", "ESFJ", "INFJ", "INFP", "ENFJ", "ENFP", "ISTP", "ISFP", "ESTP", "ESFP"
]
const mbti_map = {
    "ENFJ": ["ice:mbti/enfj/haste", "ice:mbti/enfj/slowness", "ice:mbti/enfj/speed", "ice:mbti/enfj/strength"],
    "ENFP": ["ice:mbti/enfp/hunger", "ice:mbti/enfp/jump", "ice:mbti/enfp/speed"],
    "ENTJ": ["ice:mbti/entj/give"],
    "ENTP": [],
    "ESFJ": [],
    "ESFP": [],
    "ESTJ": [],
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


const close = (player) => {
    delete global.open_ui[String(player.uuid)]
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

    if (String(player.uuid) in global.open_ui) {
        close(player)
    }
})

PlayerEvents.tick(e => {
    let player = e.getPlayer()
   

    if (String(player.uuid) in global.open_ui) {
        let CurrentView = global.open_ui[String(player.uuid)].CurrentView
        let PreviousView = global.open_ui[String(player.uuid)].PreviousView
        var minecart = player.level.getEntities().find(e =>
            e.type == "minecraft:chest_minecart" &&
            e.tags.contains(String(player.uuid))
        )
        global.open_ui[String(player.uuid)].CurrentView = minecart.getAllItems()
        let missingIndex = -1
        if (PreviousView.length != 0) {
            if (CurrentView.length != PreviousView.length) {



                missingIndex = PreviousView.findIndex(stack => stack.id === "minecraft:air");
                let selected_mbti = ""
                
                if (missingIndex !== -1) {
                    selected_mbti = mbti[missingIndex];
                    close(player);
                }
                player.getServer().runCommandSilent("clear @a *[minecraft:custom_data~{UI:1.0d}]")
                let powers = OriginsJS.getPlayerHolder(player).allPowerIds

                powers = powers.filter(function (item) {
                    return item !== "ice:mbti/change"
                })
                powers = powers.filter(function (item) {
                    return item !== "ice:mbti/change_cooldown"
                })
                console.log(powers)
                for (let i = 0; i < powers.length; i++) {
                    console.log("Removed " + powers[i])
                    OriginsJS.revokePower(player, "mbti_revoke", powers[i])
                }
                
                for (let i = 0; i < mbti_map[selected_mbti].length; i++) {
                    console.log("Granted " + mbti_map[selected_mbti][i])
                    OriginsJS.grantPower(player, "mbti_grant", mbti_map[selected_mbti][i])
                }

                OriginsJS.startCooldown(player, "ice:mbti/change_cooldown")
                
            }
        }
        if (missingIndex == -1) {
            global.open_ui[String(player.uuid)].PreviousView = CurrentView
        }
        
    }
})
