ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event
    event.register(Commands.literal("steal")
    .requires(source => source.hasPermission(2))
    .then(Commands.argument('target', Arguments.PLAYER.create(event)))
    .executes(ctx => steal(ctx.source.player, Arguments.PLAYER.getResult(ctx, 'target'))))

})

const steal = (player, target) => {
    console.log
}