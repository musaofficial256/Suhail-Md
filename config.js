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

global.warncount = process.env.WARN_COUNT || 2
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_18_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg4LFxuICAgICAgICA0NixcbiAgICAgICAgMTc1LFxuICAgICAgICA1MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYwLFxuICAgICAgICA3NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1LFxuICAgICAgICAyNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICAzLFxuICAgICAgICA3NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk0LFxuICAgICAgICA2NixcbiAgICAgICAgMjM0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDcxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODQsXG4gICAgICAgIDkwLFxuICAgICAgICA3OSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDM0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNixcbiAgICAgICAgMjI2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI1LFxuICAgICAgICA1NixcbiAgICAgICAgMjUxLFxuICAgICAgICAyOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI3LFxuICAgICAgICA3LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwLFxuICAgICAgICA4NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDg1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDc0LFxuICAgICAgICA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxODYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDY3LFxuICAgICAgICAyNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDY0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDY5LFxuICAgICAgICA4MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFOSmUvK2pSdlVLcFNMZFBDZWFZVHE1Q0F2RTZTVGQvSjBqYXZTQVhaNzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU2NzUyNDM2MTYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyMjE0OTE2N0EyRTA2NEEwNzJGMDUwOUZCODQyMzI5QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE4MDE4ODFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTY3NTI0MzYxNjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjIxOUVEOUJEMUY2REEzNEU1NjExNDQxNUU5Qjc3OEVDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTgwMTg4MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0RnFqSzFJeFE0dXpRb19sQ3pNQ1d3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjViYzMyMTIxLTE4NTMtNDhiYS1hNjE1LTFmN2IzM2RkYzcyNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OCxcbiAgICAgIDIwMixcbiAgICAgIDE3OCxcbiAgICAgIDE1MSxcbiAgICAgIDIwNCxcbiAgICAgIDE2OSxcbiAgICAgIDEyMSxcbiAgICAgIDg0LFxuICAgICAgMjU0LFxuICAgICAgMTI3LFxuICAgICAgMTM3LFxuICAgICAgMTI0LFxuICAgICAgOCxcbiAgICAgIDE0NixcbiAgICAgIDEzLFxuICAgICAgMzUsXG4gICAgICA1MyxcbiAgICAgIDIwLFxuICAgICAgMjEyLFxuICAgICAgMTQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMSxcbiAgICAgIDE5NSxcbiAgICAgIDI0NyxcbiAgICAgIDQ2LFxuICAgICAgMjIxLFxuICAgICAgMjI3LFxuICAgICAgMTM2LFxuICAgICAgMjQ5LFxuICAgICAgMjksXG4gICAgICAyNTQsXG4gICAgICA4NyxcbiAgICAgIDEyNCxcbiAgICAgIDY1LFxuICAgICAgMTA0LFxuICAgICAgMTI4LFxuICAgICAgMjI0LFxuICAgICAgMTc0LFxuICAgICAgMTI3LFxuICAgICAgNjgsXG4gICAgICA5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXS1c0V1o2RFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzUyNDM2MTYzOjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVklTSU9OXCIsXG4gICAgXCJsaWRcIjogXCIxODE3ODA2MzIwNjAxNDI6MjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXZGbVlvRUVKSzVnclVHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvcDNWUXhPK0hmeFhBMHBmeW9QTlBwaXR3MTcwRmhaRlZiUTlzTExlZHpZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInkvbjJjemVYR0hGWHR5SHQySGExN0plYTBjNFdGc2loYXJLRm9FdzFpNnoreTJFRmxkOWRJNlMwa3FvZHdnOEVQTWE2a2c1angrSGdGenM4KzVjOUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImNaWkViOTkrYjYzZE5DWjVqUGpFbjMySTVoTnVkY1QwTU51S0pJdFE1OGVsRk52YkdMWUNJektQRWVyMEhkWVpIL0xoNHZHc0NlM2Q2dTUrb0V2MWhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc1MjQzNjE2MzoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxODAxODc4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTk1MXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOTUwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkZStnemdkeEFTMnA1NCtKNWl3cS9veXN5bGUwK1JONThKczl2ajUzSURvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwOTUxMzE4NTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTcyMDcwODMwN1wifSIKfQ=="  // PUT your SESSION_ID 


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
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpper),



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
