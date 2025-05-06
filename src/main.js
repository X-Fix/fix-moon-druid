function print(...args) {
    console.log('[FMD] ', ...args);
}

function init() {
    CONFIG.debug.hooks = true;
    print('Debug hooks set to:', true)
}

Hooks.once("init", init);
print('[FMD]', 'Hello there! Module loaded!')