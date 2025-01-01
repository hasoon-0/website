if (!World.isWorldLoaded()) {
    JsMacros.waitForEvent('ChunkLoad');
}

const mc = Client.getMinecraft();

const icdf = Reflection.getDeclaredField(mc.getClass(), 'field_1752');
icdf.setAccessible(true);

const bcdf = Reflection.getDeclaredField(Java.type('net.minecraft.class_636'), 'field_3716');
bcdf.setAccessible(true);

const jcdf = Reflection.getDeclaredField(Java.type('net.minecraft.class_1309'), 'field_6228');
jcdf.setAccessible(true);

JsMacros.on('Tick', JavaWrapper.methodToJava(() => {
    const p = mc.field_1724;
    const im = mc.field_1761;
    
    if (im) {
        bcdf.set(im, 0);
    }
    
    if (p && jcdf.get(p) > 5) {
        jcdf.set(p, 5);
    }

    if (icdf.get(mc) > 2) {
        icdf.set(mc, 2);
    }
}));