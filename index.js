const connection = require("./connection");
const moment = require("moment");

const TelegramBot = require("node-telegram-bot-api");

const token = "1065658281:AAG-UXeORnB3hnQnOZXxPa0PXbDdmHmk9eM";

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/open/, (msg) => {
  const chatId = msg.chat.id;

  const start = moment().startOf("month").format("YYYY-MM-DD hh:mm");

  console.log(start);

  // connection.query(
  //   `SELECT * FROM ticket WHERE Status = 1 AND DateTimeOpen >= ${start} ORDER BY DateTimeOpen DESC`,
  //   function (error, results, fields) {
  //     if (error) console.log(error);
  //     bot.sendMessage(chatId, `${results[0].Problem}`);
  //   }
  // );
});
