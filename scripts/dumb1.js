Events.on(BlockDestroyEvent, event => {
    if(event.tile.build.block == Blocks.thoriumReactor){
      Vars.ui.hudfrag.showToast("reactor down");
    }
  })
 