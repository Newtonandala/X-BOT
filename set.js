const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID ||BELTAH-MD;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEh2VEYyMHd2WGgyYTZUMmRQbkVVaXQ2dHdWTkx3TlJOYkgzZmoxaEhsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWFuVFRwWEk1dTZBYlhTZGVlRnd3Y29VSUN3Mmc3SWVXbTJ6LzlxeXZrZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrTGphclp2R3pnQlJmMEpXcEw2ZUEyMWpuSGlXc1Nsb3R5ZTFYVllCbW5NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiU2Z1NzQyTGdJT2xqcHU3UVhjaHlLVFZsc3BmcVFRT0dyUWlzWGVqMVNrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVOanA5WmNNVytzTk10MHFRdU5QYmdwUXNkR2FqWUVqSGZPeE5zaWVoa0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdCTzBrNFhtVDY0MnhBVWFKRW9UQUIwNU1CUVBzRmNvRk9scCtQeFE3M3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUpvSisvcEY4ejhqSzVSbTI1b3ZUNFBxdC9hRTk0bVF0MTdpRUtqa2Jucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2pyYWZ2emZPaldTR2svVjZtMGN4YUtTWm5MWnFKNUpCWWZrWHFJdFpVYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRNQTNBM2hNaHh6bnpJaUlOZmVKbFlKTnFjUVVKQWZnM3pNQ0hWRVBzWkQ1aXZvc045d0RBMnVMclpEZEdwMi9BeGE1TC9yeDRRMmw1V3ZvbmRHUkJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTAsImFkdlNlY3JldEtleSI6IktYOXBqcUJBMlFrc3Zha0MxdnVmQjdzZk93TENaY2lMay9LNExWblgxVG89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzgwNjA1NzMxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkUyOUQzRDc2QjNDMkRDQUEyOTk0Rjk2MTk3RUJGNjlFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDM5Mjk0NzB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc4MDYwNTczMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQjkwRjNBNjEzMkU1RUZCRUE3MDQ5RTREQ0RGRjA3MiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQzOTI5NDcwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJjWnFOYldOOVNGbUc3Y19EMzQyc19nIiwicGhvbmVJZCI6ImFiMDM1NGYyLTkxZDktNDU5NC1iMmVhLWZlNDNmNWI4MDk4NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsRDlLd3gxWFNBaG1qR1E5THo0WEFTY0wxVFU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDhwYXlxTXBzR2FnUWt1NHUzRTltNmpaVmRvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllXREVOMlJNIiwibWUiOnsiaWQiOiIyNTQ3ODA2MDU3MzE6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4piFIOKDnUFuZGFsYS5UaGUu8J2En+KDnU1yIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJRG5nWmdDRU82QXliOEdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ3TjRocmRtSjBpb0pSeGl6bEJuZitlYW91TnFNbnlrREcxK0gzaEYxVFFnPSIsImFjY291bnRTaWduYXR1cmUiOiJxZldFbWc1am5NTXdBaXA5VldiYlVnZitoQnZtbyt5ZVEvdE9rM2RZZjJ1TmRuTC9KWmJFd05XeXFFRW1Gd2o1bitTSGNQakdLY2t6RGJHSy9rZFRBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSnVMRitTWlVHY29laWJEK1A0RjdRYTNFeko0UVdoZVdNNGxiaWYwSzF0Y1QzQVFMcXVmSXFmUnlNcnI2T1VQSDhyUmV5R1ZTcGFia1k0Wjltc2tQRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3ODA2MDU3MzE6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY0RlSWEzWmlkSXFDVWNZczVRWjMvbm1xTGphako4cEF4dGZoOTRSZFUwSSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MzkyOTQ2NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKK2MifQ== 'BELTAH-MD',
    PREFIXE: process.env.PREFIX || "+",
    GITHUB : process.env.GITHUB|| 'https://github.com/Beltah254/BELTAH-MD',
    OWNER_NAME : process.env.OWNER_NAME || "Andala.The.Mr",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254793753327",  
              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    AUTO_REACT: process.env.AUTO_REACTION || "non",  
    URL: process.env.URL || "https://telegra.ph/file/dcce2ddee6cc7597c859a.jpg",  
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || 'non',              
    EMOJIS: process.env.EMOJIS || "👻,☺️,❤️,🦚",              
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "yes",
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_CONTROL || 'no', 
    GREET : process.env.GREET || "no",            
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by Beltah md',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',
    AUTOBIO: process.env.AUTOBIO || 'yes',       
    ANTICALL_MSG : process.env.ANTICALL_MESSAGE || '',             
    GURL: process.env.GURL  || "https://whatsapp.com/channel/0029VAUSV0PFCCOSB5TX9C1F",
    EVENTS :process.env.EVENTS || "yes",
    CAPTION : process.env.CAPTION || "BELTAH-MD",
    BOT : process.env.BOT_NAME || '𝗕𝗘𝗟𝗧𝗔𝗛-𝗠𝗗',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '1',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTICALL: process.env.ANTICALL || 'yes',              
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
