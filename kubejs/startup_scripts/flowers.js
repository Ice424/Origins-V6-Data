const aqua_flower = player => {
    player.tell("aqua")
}
const purple_flower = player => {
    player.tell("purple")
}
const orange_flower = player => {
    player.tell("orange")
}
const green_flower = player => {
    player.tell("green")
}
const yellow_flower = player => {
    player.tell("yellow ")
}
const blue_flower = player => {
    player.tell("blue")

}


StartupEvents.registry('item', event => {
    event.create("ice:aqua_flower").maxStackSize(16)
        .useAnimation('bow')
        .useDuration(itemstack => 64)
        .use((level, player, hand) => {
            if (level.isClientSide()) {
                return false
            }

            const nbt = player.nbt
            const origin =
                nbt['neoforge:attachments']?.['neoorigins:origin_data']?.origins?.['neoorigins:origin']
            return origin === 'ice:flowery'
        })

        .finishUsing((itemstack, level, entity) => {
            if (level.isClientSide()) {
                return itemstack
            }

            itemstack.shrink(1)

            if (entity.player) {
                aqua_flower(entity)
            }

            return itemstack
        })

    event.create("ice:purple_flower").maxStackSize(16)
        .useAnimation('bow')
        .useDuration(itemstack => 64)
        .use((level, player, hand) => {
            if (level.isClientSide()) {
                return false
            }

            const nbt = player.nbt
            const origin =
                nbt['neoforge:attachments']?.['neoorigins:origin_data']?.origins?.['neoorigins:origin']
            return origin === 'ice:flowery'
        })

        .finishUsing((itemstack, level, entity) => {
            if (level.isClientSide()) {
                return itemstack
            }

            itemstack.shrink(1)

            if (entity.player) {
                purple_flower(entity)
            }

            return itemstack
        })

    event.create("ice:orange_flower").maxStackSize(16)
        .useAnimation('bow')
        .useDuration(itemstack => 64)
        .use((level, player, hand) => {
            if (level.isClientSide()) {
                return false
            }

            const nbt = player.nbt
            const origin =
                nbt['neoforge:attachments']?.['neoorigins:origin_data']?.origins?.['neoorigins:origin']
            return origin === 'ice:flowery'
        })

        .finishUsing((itemstack, level, entity) => {
            if (level.isClientSide()) {
                return itemstack
            }

            itemstack.shrink(1)

            if (entity.player) {
                orange_flower(entity)
            }

            return itemstack
        })

    event.create("ice:green_flower").maxStackSize(16)
        .useAnimation("bow")
        .useDuration(itemstack => 64)
        .use((level, player, hand) => {
            if (level.isClientSide()) {
                return false
            }

            const nbt = player.nbt
            const origin =
                nbt['neoforge:attachments']?.['neoorigins:origin_data']?.origins?.['neoorigins:origin']
            return origin === 'ice:flowery'
        })

        .finishUsing((itemstack, level, entity) => {
            if (level.isClientSide()) {
                return itemstack
            }

            itemstack.shrink(1)

            if (entity.player) {
                green_flower(entity)
            }

            return itemstack
        })

    event.create("ice:yellow_flower").maxStackSize(16)
        .useAnimation("bow")
        .useDuration(itemstack => 64)
        .use((level, player, hand) => {
            if (level.isClientSide()) {
                return false
            }

            const nbt = player.nbt
            const origin =
                nbt['neoforge:attachments']?.['neoorigins:origin_data']?.origins?.['neoorigins:origin']
            return origin === 'ice:flowery'
        })

        .finishUsing((itemstack, level, entity) => {
            if (level.isClientSide()) {
                return itemstack
            }

            itemstack.shrink(1)

            if (entity.player) {
                yellow_flower(entity)
            }

            return itemstack
        })

    event.create("ice:blue_flower").maxStackSize(16)
        .useAnimation("bow")
        .useDuration(itemstack => 64)
        .use((level, player, hand) => {
            if (level.isClientSide()) {
                return false
            }

            const nbt = player.nbt
            const origin =
                nbt['neoforge:attachments']?.['neoorigins:origin_data']?.origins?.['neoorigins:origin']
            return origin === 'ice:flowery'
        })

        .finishUsing((itemstack, level, entity) => {
            if (level.isClientSide()) {
                return itemstack
            }

            itemstack.shrink(1)

            if (entity.player) {
                blue_flower(entity)
            }

            return itemstack
        })
})

