


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
                global.aqua_flower(entity)
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
                global.purple_flower(entity)
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
                global.orange_flower(entity)
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
                global.green_flower(entity)
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
                global.yellow_flower(entity)
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
                global.blue_flower(entity)
            }

            return itemstack
        })
    event.create("ice:omega_flower").maxStackSize(16)
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
                global.omega_flower(entity)
            }

            return itemstack
        })
})

