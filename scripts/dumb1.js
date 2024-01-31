Events.on(BlockDestroyEvent, event => {
  Log.info("faghkujbvlfhilv")
    if(event.tile.build.block == Blocks.thoriumReactor){
      Vars.ui.hudfrag.showToast("reactor down");
    }
  })
 