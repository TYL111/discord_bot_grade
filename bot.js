const { TOKEN } = require('./token.json')
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});
const grade = "$"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', msg => {
  if (msg.content.startsWith(grade)) {
    const [CMD, ...args] = msg.content
      .trim()
      .substring(grade.length)
      .split(" ");

    if(CMD === "grade"){
      const end_grade = args[0]*0.2 + args[1]*0.2 + args[2]*0.2 + args[3]*0.4 ;
      if( parseInt(end_grade ) >= 60){
        msg.channel.send("總成績："+ end_grade +"，你居然沒被當欸！")
      }
      else if( 60 > parseInt(end_grade , parseInt >= 40)){
        msg.channel.send("總成績："+ end_grade +"，補考吧 孩子！")
      }
      else{
        msg.channel.send("總成績："+ end_grade +"，痾...你有點慘")
      };
      
    }
  }
  
})
client.login(TOKEN);