const mbti = [
    "INTJ", "INTP", "ENTJ", "ENTP", "ISTJ", "ISFJ", "ESTJ", "ESFJ", "INFJ", "INFP", "ENFJ", "ENFP", "ISTP", "ISFP", "ESTP", "ESFP"
]
const mbti_map = {
    "ENFJ": ["ice:mbti/enfj/haste", "ice:mbti/enfj/slowness", "ice:mbti/enfj/speed", "ice:mbti/enfj/strength"],
    "ENFP": [],
    "ENTJ": [],
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
var CurrentView = []
var PreviousView = []

const close = (player) => {
    global.open_ui.pop(String(player.uuid))
    var minecart = player.level.getEntities().find(e => {
        return e.type == "minecraft:chest_minecart" &&
            e.tags.contains(String(player.uuid))
    }
    )
    minecart.clearContent()
    minecart.kill()
    CurrentView = []
    PreviousView = []
}

PlayerEvents.inventoryClosed(e => {

    let player = e.getPlayer()

    if (global.open_ui.includes(String(player.uuid))) {
        close(player)
    }
})

PlayerEvents.tick(e => {
    let player = e.getPlayer()
    if (global.open_ui.includes(String(player.uuid))) {
        var minecart = player.level.getEntities().find(e =>
            e.type == "minecraft:chest_minecart" &&
            e.tags.contains(String(player.uuid))
        )
        CurrentView = minecart.getAllItems()
        if (PreviousView.length != 0) {
            if (CurrentView.length != PreviousView.length) {



                let missingIndex = PreviousView.findIndex(stack => stack.id === "minecraft:air");
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

                for (let i = 0; i < powers.length; i++) {
                    OriginsJS.revokePower(player, "mbti_revoke", powers[i])
                }
                
                for (let i = 0; i < mbti_map[selected_mbti].length; i++) {
                    OriginsJS.grantPower(player, "mbti_grant", mbti_map[selected_mbti][i])
                }

                OriginsJS.startCooldown(player, "ice:mbti/change_cooldown")

            }
        }
        PreviousView = CurrentView
    }
})
