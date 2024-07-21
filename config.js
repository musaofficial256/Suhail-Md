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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_16_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDcyLFxuICAgICAgICA3NSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICAyMixcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY0LFxuICAgICAgICA4NyxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgODUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDkyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI4LFxuICAgICAgICA1NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDYwLFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MyxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDk0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzksXG4gICAgICAgIDI2LFxuICAgICAgICA2MCxcbiAgICAgICAgMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYzLFxuICAgICAgICA1NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDYzLFxuICAgICAgICA2MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDU3LFxuICAgICAgICA2NyxcbiAgICAgICAgODksXG4gICAgICAgIDE1MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA5MixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYXhRSWJlbkxoaHM4SEhuNVEyTlZZMHBsSU1JeUE1aG82aG0zeFErZFIycz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTY3MjY5NzA2NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkFFMjEyMUY0OTJDQkU4OTlGOEQyODQ2RTBGNTVEMkU5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTU0OTc3NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NjcyNjk3MDY0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzJEMzhGQTExRUQyNDE4NEJCNjdDRjA2RTc3NEQ3NjNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNTQ5Nzc0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU2NzI2OTcwNjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFRkVDMEI3QzI5NjJGMUY0RjQzOEFCMzJDQTZCMEI1OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE1NDk3NzdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTY3MjY5NzA2NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVBODAxMERGQzdEMkUxNDc3QTJDMTU1RTUzNzUxNjc0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTU0OTc3OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJZNTUzT3o1cFNZRzl1MFl5LTQ3TEh3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjNiZjQzNzNkLTI5YWUtNDczYS1iNmYwLWI0NmU3ZDc1NWUxMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3LFxuICAgICAgMzEsXG4gICAgICAxNTksXG4gICAgICA5NyxcbiAgICAgIDE5NSxcbiAgICAgIDE2NixcbiAgICAgIDIzNixcbiAgICAgIDczLFxuICAgICAgMTksXG4gICAgICAxNDksXG4gICAgICA0NixcbiAgICAgIDIzOSxcbiAgICAgIDE2MixcbiAgICAgIDE4NixcbiAgICAgIDE3MyxcbiAgICAgIDEyOCxcbiAgICAgIDE0OSxcbiAgICAgIDc1LFxuICAgICAgNDEsXG4gICAgICAyMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMyLFxuICAgICAgMzQsXG4gICAgICAyMSxcbiAgICAgIDc4LFxuICAgICAgMjQzLFxuICAgICAgMTkzLFxuICAgICAgMjEzLFxuICAgICAgMzYsXG4gICAgICAyMzYsXG4gICAgICAyMjgsXG4gICAgICAxMTMsXG4gICAgICA0OCxcbiAgICAgIDIwNixcbiAgICAgIDE2LFxuICAgICAgMTA2LFxuICAgICAgODksXG4gICAgICAxMDIsXG4gICAgICA3MCxcbiAgICAgIDI0OCxcbiAgICAgIDEyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLVldEVDNQMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzI2OTcwNjQ2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4ODI5NjExNDI2MjE1MzoyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIktpbVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05Dbmdad0dFTW1IODdRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwib1haSEozTUs3cDllMDNQN0dIUzZ4SklxMnRsNFhxL2luNGZYaVhueXNTVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsSEFiRWs5RDhtV3ZFdmxaSXB4eDRxZUh1Q3JZYm1hQTNaN3RkMlM2V0JzRWVwTkZ5ck8wKzBjNGE3VlBOL3l4QXlwcjlPREoycERNLzBMQU9kenpCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmdkJUZkxHUjJoMWhSZEI2YTBiMnQ4NTR3SWo0aWFQUFJFNW9qbWM5NWsraVRXRlFkMWZGSU15MUFiTy9HK0NweXJFTXBqUTVPaEN6dit3MElnZmhqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3MjY5NzA2NDY6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1NDk3NzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKcUVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpxRS5qc29uIjogIntcImtleURhdGFcIjpcImdDMTRscWxkTFlDUnNjbWFIYmpYNktBVWxXWTZndWF3Z3grSmVNZGNVK009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY2OTM1NDQ0OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNTQ5Njk0NTkwXCJ9Igp9"  // PUT your SESSION_ID 


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
