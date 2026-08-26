


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

            

            if (entity.player) {
                itemstack.shrink(1)
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


    event.create("ice:seth_specs")
        .maxStackSize(1)
        .useAnimation("bow")
        .useDuration(itemstack => 1)
        .use((level, player, hand) => {
            if (level.isClientSide()) {
                return false
            }

            const ray = player.rayTrace(16)
            if (ray.entity != null && ray.entity.isPlayer() ){
                return true
            }
            return false
        })

        .finishUsing((itemstack, level, entity) => {
            if (level.isClientSide()) {
                return itemstack
            }



            if (entity.player) {
                global.seth_specs(entity)
            }

            return itemstack
        })
    
    event.create("ice:seth_book")
        .maxStackSize(1)
        .useAnimation("bow")
        .useDuration(itemstack => 40)
        .use((level, player, hand) => {
            return true
        })

        .finishUsing((itemstack, level, entity) => {
            if (level.isClientSide()) {
                return itemstack
            }

            if (entity.player) {
                if (global.seth_book(entity, itemstack)){
                    itemstack.shrink(1)
                }
                
            }

            return itemstack
        })
})


