Events.on(BlockDestroyEvent, event => {
    if(event.tile.build.block == Blocks.thoriumReactor){
      Vars.ui.hudfrag.showToast("reactor down");
    }
  })
  Events.on(BlockDestroyEvent, event => {
      if(event.tile.build.block == Blocks.impactReactor){
        Vars.ui.hudfrag.showToast("impact down");
      }
    })
    //Weathers.rain.create(100, 600)