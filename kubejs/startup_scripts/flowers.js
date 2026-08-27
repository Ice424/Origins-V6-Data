


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



            if (entity.player) {

                global.aqua_flower(entity)
                itemstack.shrink(1)
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

                global.purple_flower(entity)
                itemstack.shrink(1)
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


            if (entity.player) {

                global.orange_flower(entity)
                itemstack.shrink(1)
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



            if (entity.player) {

                global.green_flower(entity)
                itemstack.shrink(1)
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



            if (entity.player) {

                global.yellow_flower(entity)
                itemstack.shrink(1)
            }

            return itemstack
        })


    event.create("ice:blue_flower").maxStackSize(16)
        .useAnimation("bow")
        .useDuration((itemstack, player) => 72000)
        .use((level, player, hand) => {
            if (level.isClientSide()) {
                return false
            }
            player.persistentData.putFloat("blueFlowerCharge", 0.0)
            level.server.runCommandSilent(`execute at ${String(player.uuid)} run summon block_display ~ ~ ~ {Tags:["blue_platform", "${player.uuid}"], Passengers:[{id:"minecraft:block_display",block_state:{Name:"minecraft:blue_concrete",Properties:{}},transformation:[3f,0f,0f,-1.5f,0f,1f,0f,0f,0f,0f,3f,-1.5f,0f,0f,0f,1f],glow_color_override:16777215,Glowing:1b,Tags:["blue_platform", "${player.uuid}"]}]}`)
            
            
            const nbt = player.nbt
            const origin =
                nbt['neoforge:attachments']?.['neoorigins:origin_data']?.origins?.['neoorigins:origin']
            return origin === 'ice:flowery'
        })

        .releaseUsing((itemstack, level, entity) => {
            if (level.isClientSide()) {
                return itemstack
            }


            if (entity.player) {
                global.blue_flower(entity)
                itemstack.shrink(1)
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


            if (entity.player) {
                entity.tell("First HI")
                global.omega_flower(entity)
                itemstack.shrink(1)
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
            if (ray.entity != null && ray.entity.isPlayer()) {
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
                if (global.seth_book(entity, itemstack)) {
                    itemstack.shrink(1)
                }

            }

            return itemstack
        })
})


