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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_44_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg3LFxuICAgICAgICAzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA5OCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDksXG4gICAgICAgIDE5MixcbiAgICAgICAgOTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNyxcbiAgICAgICAgMSxcbiAgICAgICAgOSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDYxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDc2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA4LFxuICAgICAgICA1NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDU1LFxuICAgICAgICA3LFxuICAgICAgICAzOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcInVGdTlydjU0ZkltMDRaQnd2RVdqVFdZMmd6ZXJUK2hZdXpYS3E0K3NzYVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU2NzUyNDM2MTYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0RTYzNDlCNzc3ODczQUY3NkZDNUIzREVFQjRGRDExMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE3MjA2ODRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV2gwV2Q4ckpUOUN3ZGd6OWxTa1Jzd1wiLFxuICBcInBob25lSWRcIjogXCI3MTVlZTVjMy1lNzc0LTQ0NjctYWY1NS1jNzM2YjQyM2FjNDRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzQsXG4gICAgICAxODcsXG4gICAgICAxNzcsXG4gICAgICAyMDAsXG4gICAgICAzLFxuICAgICAgODMsXG4gICAgICAzLFxuICAgICAgMjQzLFxuICAgICAgMTgwLFxuICAgICAgMjA0LFxuICAgICAgMjQ5LFxuICAgICAgMTc0LFxuICAgICAgMTAwLFxuICAgICAgMTgzLFxuICAgICAgMjAzLFxuICAgICAgMTkzLFxuICAgICAgMjQyLFxuICAgICAgMjU0LFxuICAgICAgOTUsXG4gICAgICA3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTMsXG4gICAgICAzMixcbiAgICAgIDIzMixcbiAgICAgIDE0OSxcbiAgICAgIDM3LFxuICAgICAgMjM1LFxuICAgICAgNjQsXG4gICAgICAxMyxcbiAgICAgIDc0LFxuICAgICAgOTgsXG4gICAgICAyMjMsXG4gICAgICAxMCxcbiAgICAgIDc5LFxuICAgICAgOTQsXG4gICAgICAyMjUsXG4gICAgICA0MCxcbiAgICAgIDY2LFxuICAgICAgOTEsXG4gICAgICAyMjMsXG4gICAgICAyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYQktEQUNCU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzUyNDM2MTYzOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVklTSU9OXCIsXG4gICAgXCJsaWRcIjogXCIxODE3ODA2MzIwNjAxNDI6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXZGbVlvRUVPRysvYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvcDNWUXhPK0hmeFhBMHBmeW9QTlBwaXR3MTcwRmhaRlZiUTlzTExlZHpZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFybnh5WVpadUNWQ05mNXZOQmRIdlFxaGZiRFdQSTR0Uk9vQkpqajdsdmZ3RHpSRS9ocmVyQzY5Z094Y1VuQVpZVDNuQUhnK1hMNzBCNVRlSUJaaUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdhODlhQWNBNDhPanNLZGtaZlJYaXNBemoxSFBmQXJuS0dvQWIzQWFYVjZBZGtXOUhBenQrTm5kOXFYeUNLUkcxZjJZcDgyMU5tTTBJdlFGczBaZUNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc1MjQzNjE2MzoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNzIwNjc3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTk1LXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOTUsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJLa1RROXZMM1djNWxIc3BKMExQOHcxdnJPUjYxYWhRQzhEV1pxMDJiK3o0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwOTUxMzE4NTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE3MjA1NjM4OTZcIn0iCn0="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperse(),



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
