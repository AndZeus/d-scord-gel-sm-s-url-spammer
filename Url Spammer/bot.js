const Discord = require("discord.js")
const client = new Discord.Client() 
const request = require('request')
const config = require("./config.json")


    client.on("ready", () => {
        client.user.setPresence({ activity: { name: config.durum }, status: "idle" });
        client.channels.cache.get(config.voicekanal).join().catch(x => x)
         const guild = client.guilds.cache.get(config.sunucu)
           console.log(`${guild.name} sunucusu için "${config.vanity}" urlsi spamlanmaya başladı.`)


    setInterval(async () => {
        if(guild.vanityURLCode == config.vanity) {
            let onay = new Discord.MessageEmbed().setAuthor(guild.name, guild.iconURL({dynamic: true})).setColor('RANDOM').setTimestamp().setDescription(`"**${guild.name}**" sunucusunun özel url'si belirtildiği gibi **\`${config.vanity}\`** olarak değiştirildi :white_check_mark:`)
                let kanal = await guild.channels.cache.get(config.urllog)
                     await kanal.send(onay)
                        await kanal.send(`<@${config.botOwner}>`)


    console.log(`${guild.name} = "${guild.vanityURLCode}" Durum: ✔`) 
        console.log(`Bottan Çıkış Yapıldı.`)
            process.exit()
                } else {
                    novasyyyy(config.vanity, config.guild, config.token)
                         }}, 1*500)})

    async function novasyyyy(vanity, token) {
        const spammer = {
            url: `https://discord.com/api/v8/guilds/${config.sunucu}/vanity-url`,
                body: {
                    code: `${vanity}`},
    json: true,
        method: 'PATCH',
            headers: {
                "Authorization": `Bot ${config.token}`
                    }
                        };

    request(spammer, (err, res, body) => {
        if (err) {
            return console.log(err)}})}


client.login(config.token).catch(err => { console.log("Token Hatalı !")})
