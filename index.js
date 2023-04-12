const { Telegraf } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN)
const web_link = "https://dancing-kulfi-85047d.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome to the Fast Food.", {
    reply_markup: {
      keyboard: [[{ text: "Fast Food", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
