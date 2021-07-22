import { Telegraf } from "telegraf";
import express  from "express";
import fs from "fs";
const expressApp = express();

const API_TOKEN = process.env.API_TOKEN || "1927798018:AAG1ouBolsoRgOa-ZnqMKZ4PS_1BAEbBvTA";
const PORT = process.env.PORT || 3000;
const URL = process.env.URL || "https://introbot-ai.herokuapp.com";
const bot = new Telegraf(API_TOKEN);

//method for invoking start command
bot.telegram.setWebhook(`${URL}/telebot/`);
expressApp.use(bot.webhookCallback(`/telebot/`));

//save data

//saving users
var obj = {
    users: []
 };
let date = year + "-" + month + "-" + date;

obj.users.push({username: ctx.chat.username, date:date});

var json = JSON.stringify(obj);
fs.writeFile('users.json', json, 'utf8', callback);



//messages
bot.command("start", async (ctx, next) => {
    console.log(ctx.from);
    const messages = [
        `Hai ${ctx.chat.first_name}! Saya Introbot - manajer komunitas AI. \n \n Saya dapat membantu dengan persyaratan khusus terkait COVID`,
        //`In the last few weeks, I've spoken with 0 Indians, helped with 0 requests, and saved thousands of lives.`,
        `Kami adalah tim kecil yang terdiri dari warga yang bersemangat. Ikuti kami di twitter.com/introbotAI & twitter.com/COVIDcitizens.`,
        `Jadi apa yang Anda cari? Dan dimana?`,
        `Jawablah dalam format <resource> di <city>. Misalnya. Tempat tidur rumah sakit di Jakarta, Tabung Oksigen di Jakarta, dll.`,
        `Kapan saja, jika Anda menggunakan kata covid, saya akan melompat kembali ke pertanyaan ini.`,
    ];
    for (const msg of messages) {
        await ctx.reply(msg);
    }
});

bot.hears(
    /Hai Introbot!|hai|hai!|Hai!|Hai|Halo|Membantu|Bot|Bot!|hai|halo|hai/,
    async (ctx, next) => {
        console.log(ctx.from);
//saving users
var obj = {
    users: []
 };
let date = year + "-" + month + "-" + date;

obj.users.push({username: ctx.chat.username, date:date});

var json = JSON.stringify(obj);
fs.writeFile('users.json', json, 'utf8', callback);


        const messages = [
            `Hai ${ctx.chat.first_name}! Saya Introbot - manajer komunitas AI. \n \n Saya dapat membantu dengan persyaratan khusus terkait COVID`,
            //`In the last few weeks, I've spoken with 0 Indians, helped with 0 requests, and saved thousands of lives.`,
            `Kami adalah tim kecil yang terdiri dari warga yang bersemangat. Ikuti kami di twitter.com/introbotAI & twitter.com/COVIDcitizens.`,
            `Jadi apa yang Anda cari? Dan dimana?`,
            `Jawablah dalam format <resource> di <city>. Misalnya. Tempat tidur rumah sakit di Jakarta, Tabung Oksigen di Jakarta, dll.`,
            `Kapan saja, jika Anda menggunakan kata covid, saya akan melompat kembali ke pertanyaan ini.`,
        ];
        for (const msg of messages) {
            await ctx.reply(msg);
        }
    }
);

bot.hears(/Covid|covid|COVID/, async (ctx, next) => {
    console.log(ctx.from);
//saving users
var obj = {
    users: []
 };
let date = year + "-" + month + "-" + date;

obj.users.push({username: ctx.chat.username, date:date});

var json = JSON.stringify(obj);
fs.writeFile('users.json', json, 'utf8', callback);


    const messages = [
        `Baik ${ctx.chat.first_name}!`,
         //`In the last few weeks, I've spoken with 0 Indians, helped with 0 requests, and saved thousands of lives.`,
         `Kami adalah tim kecil yang terdiri dari warga yang bersemangat. Ikuti kami di twitter.com/introbotAI & twitter.com/COVIDcitizens.`,
         `Jadi apa yang Anda cari? Dan dimana?`,
         `Jawablah dalam format <resource> di <city>. Misalnya. Tempat tidur rumah sakit di Jakarta, Tabung Oksigen di Jakarta, dll.`,
         `Kapan saja, jika Anda menggunakan kata covid, saya akan melompat kembali ke pertanyaan ini.`,
    ];
    for (const msg of messages) {
        await ctx.reply(msg);
    }
});

bot.telegram.setWebhook(`${URL}/bot${API_TOKEN}`);
expressApp.get("/", (req, res) => {
    res.send("Welcome to Introbot Indonesia");
});
expressApp.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});