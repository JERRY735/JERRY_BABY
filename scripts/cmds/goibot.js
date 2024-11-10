const fs = require("fs-extra");

module.exports = {
config: {
    name: "goibot",
    version: "1.0",
    author: "Samir",
    countDown: 5,
    role: 0,
    shortDescription: "no-prefix",
    longDescription: "Bot Will Reply You In Engish/Bangla Language",
    category: "no prefix",
    guide: {
      en: "{p}{n}",
    }
  },

 onStart: async function ({  }) { },
  onChat: async function ({ api, event, args, Threads, userData }) {

  var { threadID, messageID, senderID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;

  var Messages = ["Hmm jan bolo", "Ki kobi ko somoy nai🥱", " আপনার কি চরিত্রে সমস্যা যে এতো বার আমাকে বট বলে ডাকছেন🧐", "🙂বট বট না বলে সিরিয়াস রিলেশন করতে চাইলে ইনবক্স🫣😒", "🙂Bot bot koros kn?", "Block Your Baby And Propose me 🙂💔"];

    var rand = Messages[Math.floor(Math.random() * Messages.length)]

        if ((event.body.toLowerCase() == "bot") || (event.body.toLowerCase() == "Bot")) {
         return api.sendMessage("Hmm bby bolo🥹🫶🏻", threadID);
       };

        if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒")) {
         return api.sendMessage("Chaye thakos kn ki kobi ko🤨", threadID);
       };

       if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
         return api.sendMessage("uppre ki dekho ami to niche🥺", threadID);
       };

       if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😅😅")) {
         return api.sendMessage("Kosto lukay rekhe haso kn😥", threadID);
       };

       if ((event.body.toLowerCase() == "🫣") || (event.body.toLowerCase() == "🫣🫣")) {
         return api.sendMessage("Notun biye korso naki..je eto lojja paw🫠", threadID);
       };

      if ((event.body.toLowerCase() == "🤭") || (event.body.toLowerCase() == "🤭🤭")) {
         return api.sendMessage("Notun biye korso naki... je eto lojja pao🙃", threadID);
       };

       if ((event.body.toLowerCase() == "🫡") || (event.body.toLowerCase() == "🫡🫡")) {
         return api.sendMessage("Selut sir👌", threadID);
       };

       if ((event.body.toLowerCase() == "btvv nha mn") || (event.body.toLowerCase() == "btvv nha mn")) {
         return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
       };

       if ((event.body.toLowerCase() == "tt go mng") || (event.body.toLowerCase() == "tt go mng")) {
         return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
       };

       if ((event.body.toLowerCase() == "let's go") || (event.body.toLowerCase() == "let's go")) {
         return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
       };

       if ((event.body.toLowerCase() == "tt mng oi") || (event.body.toLowerCase() == "tt mng oi")) {
         return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
       };

       if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
         return api.sendMessage("️Sleep well <3 Wish you all super nice dreams <3", threadID);
       };

       if ((event.body.toLowerCase() == "tt go mn") || (event.body.toLowerCase() == "tt go mn")) {
         return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
       };

       if ((event.body.toLowerCase() == "flop over") || (event.body.toLowerCase() == "flop")) {
         return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
       };

       if ((event.body.toLowerCase() == "clmm bot")) {
         return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
       };

       if ((event.body.toLowerCase() == "bot cc")) {
         return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
       };

       if ((event.body.toLowerCase() == "cc bot")) {
         return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
       };

       if ((event.body.toLowerCase() == "bot dthw too") || (event.body.toLowerCase() == "bot dthw over")) {
         return api.sendMessage("️ that's very commendable hihi :>", threadID);
       };

       if ((event.body.toLowerCase() == "dm bot")) {
         return api.sendMessage("️Swear something to your dad :), you're a kid but you like to be alive :)", threadID);
       };

       if ((event.body.toLowerCase() == "nobody loves me")) {
         return api.sendMessage("️Come on, the bot loves you <3 <3", threadID);
       };

       if ((event.body.toLowerCase() == "does the bot love the admin bot")) {
         return api.sendMessage("Yes, love him the most, don't try to rob me", threadID);
       };

       if ((event.body.toLowerCase() == "bot im going") || (event.body.toLowerCase() == "bot im di")) {
         return api.sendMessage("Im cc :))) m stop barking for me, but tell me im :>>", threadID);
       };

       if ((event.body.toLowerCase() == "bot go away") || (event.body.toLowerCase() == "bot cut di")) {
         return api.sendMessage("You're gone, your dad's gone, don't make you speak :))))", threadID);
       };

       if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
         return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
       };

       if ((event.body.toLowerCase() == "is the bot sad")) {
         return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
       };

       if ((event.body.toLowerCase() == "does the bot love you")) {
         return api.sendMessage("Yes I love you and everyone so much", threadID);
       };

       if ((event.body.toLowerCase() == "bot goes to sleep")) {
         return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
       };

       if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
         return api.sendMessage("I'm full when I see you eat <3", threadID);
       };

       if ((event.body.toLowerCase() == "does the bot love me")) {
         return api.sendMessage("Yes <3", threadID);
       };

       if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
         return api.sendMessage("Yes <3", threadID);
       };

    if ((event.body.toLowerCase() == "oh bot")) {
     return api.sendMessage("Hurry, I have to serve other boxes :)", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "chup thak")) {
     return api.sendMessage("️Amr boss Alamin ke bole dibo tumi domok diso 😒", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "💃") || (event.body.toLowerCase() == "💃💃")) {
     return api.sendMessage("️Lungi dance lungi dance 💃🕺", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "🕺") || (event.body.toLowerCase() == "🕺🕺")) {
     return api.sendMessage(" Lungi dance lungi dance💃🕺", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "💔") || (event.body.toLowerCase() == "💔💔")) {
     return api.sendMessage("️Kire cheka khaiso naki🙂💔", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "oh") || (event.body.toLowerCase() == "Oh")) {
     return api.sendMessage("️তুমাকে তোমার বউ পেটায় নাকি, যে Oh Oh করো?!", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "good morning") || (event.body.toLowerCase() == "Good Morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("️Good Morningg!🌄", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "Good Night") || (event.body.toLowerCase() == "good night")) {
     return api.sendMessage("️Good Night🌃, Take Care Babe🥺", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "bot")) {
     return api.sendMessage("️But I am a Simple Messenger Chatbot, You Can Call Me TOM 卝 চৌধুরীヅ", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "Name") || (event.body.toLowerCase() == "Name")) {
     return api.sendMessage("️my name is >>Tom bby<< & my boss Alamin 🐤", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "bebe") || (event.body.toLowerCase() == "bebi")) {
     return api.sendMessage("️hm Bebe😚🖤", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "baby")) {
     return api.sendMessage("️bolo Baby😚🖤", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "bebe")) {
     return api.sendMessage("hmm Babe😚🖤", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "fight") || (event.body.toLowerCase() == "fyt")) {
     return api.sendMessage("️Sorry, We Are Peace Lover ✌🏻🕊", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "alamin") || (event.body.toLowerCase() == "Alamin") || (event.body.toLowerCase() == "Alamin")) {
     return api.sendMessage("️Amar boss ke dako kn🥺", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "😋😋")) {
     return api.sendMessage("️Aha sei shad..eto sadh kn😋😋", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "who are you") || (event.body.toLowerCase() == "who r u")) {
     return api.sendMessage("️I Am Alamin Bot, An AI Based Messenger Chatbot.", threadID, messageID);
   };

  if (event.body.indexOf("Bot") == 0 || (event.body.toLowerCase() == "bot") || (event.body.indexOf("বট") == 0)) {
    var msg = {
      body: ` ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  }
}
};
