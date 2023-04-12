const { Telegraf } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN)
const web_link = "https://dancing-kulfi-85047d.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome to the Test Form.", {
    reply_markup: {
      keyboard: [[{ text: "TEST FORM", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
