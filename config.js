const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\by
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_14_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDg5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjksXG4gICAgICAgIDY0LFxuICAgICAgICA3NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgODUsXG4gICAgICAgIDM1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAzMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjYsXG4gICAgICAgIDU4LFxuICAgICAgICA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzLFxuICAgICAgICA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MixcbiAgICAgICAgODYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MixcbiAgICAgICAgNSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjksXG4gICAgICAgIDUyLFxuICAgICAgICA4NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExLFxuICAgICAgICA3MixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDk1LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDM5LFxuICAgICAgICA2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDczLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDY1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA5LFxuICAgICAgICA1MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDczLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDY0LFxuICAgICAgICA3MCxcbiAgICAgICAgODEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg4LFxuICAgICAgICA2NSxcbiAgICAgICAgMixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODgsXG4gICAgICAgIDExLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjQwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAzOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDMzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjExLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc2LFxuICAgICAgICA1LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaV3VVZHRwYnZGMXZSd2JFZFViZ3NqUmN6TEJaYVVsT2l3RDRYaldMc2tZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1Njc1MjQzNjE2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDJFMzA5NUExQTJEQTQxNzc3RTZGRUM0MTJBNTU4RTNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNTAyODk1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFsaHZBa01oUkhXdjBBbUFZR09UaVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjJkNzA1ZWQtYzc5OS00YTM4LWJjYTItMWI1OGVkNTM0ZGM4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NyxcbiAgICAgIDE0NyxcbiAgICAgIDE4MSxcbiAgICAgIDE2NCxcbiAgICAgIDIwNixcbiAgICAgIDgxLFxuICAgICAgMjA4LFxuICAgICAgNyxcbiAgICAgIDUsXG4gICAgICA5OSxcbiAgICAgIDUzLFxuICAgICAgMTQwLFxuICAgICAgMTU2LFxuICAgICAgMTkxLFxuICAgICAgMjAzLFxuICAgICAgMjQ0LFxuICAgICAgMTA3LFxuICAgICAgMTAwLFxuICAgICAgMjAsXG4gICAgICAxNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjgsXG4gICAgICAyMDYsXG4gICAgICAxNTcsXG4gICAgICAxNjEsXG4gICAgICAyMSxcbiAgICAgIDc5LFxuICAgICAgMzMsXG4gICAgICAyMTMsXG4gICAgICAxOTEsXG4gICAgICAxMTUsXG4gICAgICAyNDMsXG4gICAgICA4NCxcbiAgICAgIDQwLFxuICAgICAgMjEzLFxuICAgICAgMTcyLFxuICAgICAgOCxcbiAgICAgIDE3NixcbiAgICAgIDE5MCxcbiAgICAgIDI0MCxcbiAgICAgIDQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhBNDJZREVZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NTI0MzYxNjM6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJWSVNJT05cIixcbiAgICBcImxpZFwiOiBcIjE4MTc4MDYzMjA2MDE0MjoxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNUEZtWW9FRUthWjhMUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9wM1ZReE8rSGZ4WEEwcGZ5b1BOUHBpdHcxNzBGaFpGVmJROXNMTGVkelk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU2U1a2JMTnk3clNvT1B5bTJldEUzanFOaW9GQW9KU01xTitvQVhWc2tlS0VhQlJZY29jREQ4dkJMa0cvSEFkWEwzWU02UlI0OTg5azZQckJQdmRaQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYzY0bFJ3SHc5TkpOM1hQNE9idDFPNXRKSm55M1hnVDFHRDAySnlJb3o5NXBIbzBzbTRZT0l1bUoxdW9HdkFCOEhRNDFvS1RTWWVqNDkyNVNRMDE5aVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzUyNDM2MTYzOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1MDI4OTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNbUxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1tTC5qc29uIjogIntcImtleURhdGFcIjpcIjYxMzBQejF1YTRqL2JWa2ZLRFRGQ3ZiUXhaZHIwZXBNUElZa1JDQ1cvekk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA5NTEzMTg0MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "moosadarlington",
  packname: process.env.PACK_NAME || "moosadarlington",
  botname : process.env.BOT_NAME  || "moosadarlington",
  ownername:process.env.OWNER_NAME|| "moosadarlington",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
