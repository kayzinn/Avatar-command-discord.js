const Discord = require("discord.js"); //install discord.js, npm i discord.js (in terminal)
const client = new Discord.Client();


let prefix = ("!") //You can change this parameter

client.on('ready', () => {
    console.log(`i'm ready!`);
 });

 client.on('message', (message) => {

 const args = message.content.slice(prefix.length).trim().split(/ +/g); //we have declared the message command arguments
 const command = args.shift().toLowerCase();

 if(command == "avatar"){
    let mentioned = message.mentions.members.first() || message.member; //If within the command there is a mentioned one we will use its avatar || otherwise we use the avatar of the author of the command
    let embed = new Discord.MessageEmbed()
    embed.setColor("0xDC00FF") //You can change this parameter
    embed.setTitle(`Avatar of **` + `${mentioned.user.username}` + "**") 
    embed.setImage(mentioned.user.displayAvatarURL( {size: 1024, dynamic: true } )) 
    embed.setFooter("requested by: " + message.member.displayName, message.author.displayAvatarURL());
    return message.channel.send(embed)
 }
    
});

client.login('token'); //Your token bot