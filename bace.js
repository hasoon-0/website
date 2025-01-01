const reverse = !GlobalVars.getBoolean("ToggleScript");
GlobalVars.putBoolean("ToggleScript", reverse);
if (reverse) {
    Chat.log(Chat.createTextBuilder().append("[").withColor(0x7)
        .append("Looking").withColor(0x5)
        .append("]").withColor(0x7).append(" On").withColor(0x2)
        .build());
} else {
    Chat.log(Chat.createTextBuilder().append("[").withColor(0x7)
    .append("Looking").withColor(0x5)
    .append("]").withColor(0x7).append(" Off").withColor(0xc)
    .build());
} 

while (GlobalVars.getBoolean("ToggleScript")) {

    var TeamNames = [
        "Shannel"
    ];
    
    var players = World.getLoadedPlayers();
    
    for (var j = 0; j < players.length; j++) {
        var playerNameUpper = players[j].getName().toString().toUpperCase();
        var nearby = false;
        for (var i = 0; i < TeamNames.length; i++) {
            if (playerNameUpper.includes(TeamNames[i].toUpperCase())) {
                nearby = true;
                break;
            }
        }
        if (!nearby) {
            var x = Math.floor(players[j].getX());
            var y = Math.floor(players[j].getY());
            var z = Math.floor(players[j].getZ());
            var PN = players[j].getName();
            var distance = Math.sqrt(Math.pow(x - players[0].getX(), 2) + Math.pow(y - players[0].getY(), 2) + Math.pow(z - players[0].getZ(), 2));
    
            Chat.log(PN.getString());
            Chat.log( "\u00A74" + "X: " + x + ", Y: " + y + ", Z: " + z);
            Chat.log("\u00A79" + "Distance: " + "\u00A7a" + Math.floor(distance));


            SendWebhook("Player", `${`<@1319978649277042769>\n there is a plyer near by\n\`Player: ${PN.getString()}\`\n\`X: ${x}, Y: ${y}, Z: ${z}\`\n\`Distance: ${Math.floor(distance)}\`\n\`Current Time: ${new Date().toLocaleTimeString()}\``}`)
            Client.disconnect()
        }
    }
    
    Client.waitTick(20);
    
}

function SendWebhook(username, message){
    let data = {
        "username": username,
        "content": message
    };

    const req = Request.create("https://discord.com/api/webhooks/1322953387666440192/q8WYHH2Lk8jRRiH4Nx09nU-v9o6GuUZOC15Vdp4qvaLNLUb8WnowwfGODkIcp90s4OPS")
    req.addHeader('Content-Type', 'application/json')
    req.addHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')
    const response = req.post(JSON.stringify(data))
}