function init() {
  CONFIG.debug.hooks = true;
  console.log('module loaded!')
}

Hooks.once("init", init);