// OriginsJS.registerEntityAction("open", (entity, params) => {
//     if (OriginsJS.getCooldown(entity, "ice:mbti/change_cooldown") == 0)
//     open(entity)
// });

// global.open_ui = {}

// const open = (player) => {
//     var minecart = player.level.createEntity("minecraft:chest_minecart")
//     minecart.setPosition(player.x, player.y, player.z)
//     minecart.addTag(String(player.uuid))
//     minecart.addTag("invisible_minecart")
//     minecart.setInvulnerable(true)
//     minecart.setNoGravity(true)
//     minecart.spawn()
//     for (let i = 0; i < CHEST.length; i++) {
//         minecart.setStackInSlot(i, CHEST[i].copy())
//     }
//     global.open_ui[String(player.uuid)] = {"CurrentView": [], "PreviousView": []}
//     if (minecart) {
//         player.openMenu(minecart)
//     }
//     return 1
// }

// const CHEST = [
//     Item.of('minecraft:bricks', { "minecraft:item_name": { "color": "light_purple", "italic": false, "text": "INTJ" }, "minecraft:custom_data": { "UI": 1 } }),
//     Item.of('minecraft:redstone', { "minecraft:item_name": { "color": "light_purple", "italic": false, "text": "INTP" }, "minecraft:custom_data": { "UI": 1 } }),
//     Item.of('minecraft:crossbow', { "minecraft:item_name": { "color": "light_purple", "italic": false, "text": "ENTJ" }, "minecraft:custom_data": { "UI": 1 } }),
//     Item.of('minecraft:emerald', { "minecraft:item_name": { "color": "light_purple", "italic": false, "text": "ENTP" }, "minecraft:custom_data": { "UI": 1 } }),
//     Item.of("minecraft:air"),
//     Item.of('minecraft:iron_chestplate', { "minecraft:item_name": { "color": "blue", "italic": false, "text": "ISTJ" }, "minecraft:custom_data": { "UI": 1 } }),
//     Item.of('minecraft:milk_bucket', { "minecraft:item_name": { "color": "blue", "italic": false, "text": "ISFJ" }, "minecraft:custom_data": { "UI": 1 } }),
//     Item.of('minecraft:iron_pickaxe', { "minecraft:item_name": { "color": "blue", "italic": false, "text": "ESTJ" }, "minecraft:custom_data": { "UI": 1 } }),
//     Item.of('minecraft:cake', { "minecraft:item_name": { "color": "blue", "italic": false, "text": "ESFJ" }, "minecraft:custom_data": { "UI": 1 } }),
//     Item.of("minecraft:air"),
//     Item.of("minecraft:air"),
//     Item.of("minecraft:air"),
//     Item.of("minecraft:air"),
//     Item.of("minecraft:air"),
//     Item.of("minecraft:air"),
//     Item.of("minecraft:air"),
//     Item.of("minecraft:air"),
//     Item.of("minecraft:air"),
//     Item.of("minecraft:ender_eye", { "minecraft:item_name": { "color": "green", "italic": false, "text": "INFJ" }, "minecraft:custom_data": { "UI": 1 } }),
//     Item.of("minecraft:lead", { "minecraft:item_name": { "color": "green", "italic": false, "text": "INFP" }, "minecraft:custom_data": { "UI": 1 } }),
//     Item.of("minecraft:beacon", { "minecraft:item_name": { "color": "green", "italic": false, "text": "ENFJ" }, "minecraft:custom_data": { "UI": 1 } }),
//     Item.of("minecraft:sugar", { "minecraft:item_name": { "color": "green", "italic": false, "text": "ENFP" }, "minecraft:custom_data": { "UI": 1 } }),
//     Item.of("minecraft:air"),
//     Item.of("minecraft:anvil", { "minecraft:item_name": { "color": "yellow", "italic": false, "text": "ISTP" }, "minecraft:custom_data": { "UI": 1 } }),
//     Item.of("minecraft:compass", { "minecraft:item_name": { "color": "yellow", "italic": false, "text": "ISFP" }, "minecraft:custom_data": { "UI": 1 } }),
//     Item.of("minecraft:iron_sword", { "minecraft:item_name": { "color": "yellow", "italic": false, "text": "ESTP" }, "minecraft:custom_data": { "UI": 1 } }),
//     Item.of("minecraft:music_disc_blocks", { "minecraft:item_name": { "color": "yellow", "italic": false, "text": "ESFP" }, "minecraft:custom_data": { "UI": 1 } })
// ]