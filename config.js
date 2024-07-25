const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_35_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDk2LFxuICAgICAgICAxODUsXG4gICAgICAgIDU4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDcxLFxuICAgICAgICA4MixcbiAgICAgICAgMTk3LFxuICAgICAgICAyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDczLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgNDUsXG4gICAgICAgIDcwLFxuICAgICAgICA2MixcbiAgICAgICAgODUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTExLFxuICAgICAgICA0MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUzLFxuICAgICAgICA1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDMyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzksXG4gICAgICAgIDUwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA4OSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDQwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTY2LFxuICAgICAgICA2OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MixcbiAgICAgICAgNjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDg4LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA1NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDgxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDUwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQwLFxuICAgICAgICA0NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA2LFxuICAgICAgICA5MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjksXG4gICAgICAgIDQyLFxuICAgICAgICAxMixcbiAgICAgICAgMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDY3LFxuICAgICAgICAxODIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAzOSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDkxLFxuICAgICAgICAzMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA5NixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDk4LFxuICAgICAgICA5MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDMxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiL05rRit2MkZMdjFKLzFvUUEyYlJOWDZ6Z21IK0s0ZTFjNmJOcmFHZy9lQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTY3NTI0MzYxNjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQxREE0RkVBRDUyQjdCOUM0NUQxNjU0RUMzMjEzMzY4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTk0NjkzNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4SXlVYkFtcFFXV1drLUJjdk9fcGF3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjVjMDMzNjgxLWE2MWEtNDNiMi1hYjM2LTQxMzc2MjYyZGIxYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDEsXG4gICAgICAxOTQsXG4gICAgICA2OSxcbiAgICAgIDMwLFxuICAgICAgMTYyLFxuICAgICAgNDMsXG4gICAgICAyMDMsXG4gICAgICAxODgsXG4gICAgICAxNTQsXG4gICAgICAxOTYsXG4gICAgICAxODcsXG4gICAgICAxMzIsXG4gICAgICAxODQsXG4gICAgICAxODUsXG4gICAgICA5NixcbiAgICAgIDkxLFxuICAgICAgNDEsXG4gICAgICAzLFxuICAgICAgMTEzLFxuICAgICAgMjMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MSxcbiAgICAgIDE1NyxcbiAgICAgIDE1NSxcbiAgICAgIDE1LFxuICAgICAgMTQxLFxuICAgICAgMTc2LFxuICAgICAgNTksXG4gICAgICAxMDUsXG4gICAgICA3MixcbiAgICAgIDgwLFxuICAgICAgMTg2LFxuICAgICAgMjQsXG4gICAgICAxMjcsXG4gICAgICA0MSxcbiAgICAgIDIsXG4gICAgICAxNjEsXG4gICAgICA5OSxcbiAgICAgIDE4NixcbiAgICAgIDc2LFxuICAgICAgMTE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVQNVhMTFFSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NTI0MzYxNjM6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJWSVNJT05cIixcbiAgICBcImxpZFwiOiBcIjE4MTc4MDYzMjA2MDE0MjoyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNM0ZtWW9FRUt5bWk3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9wM1ZReE8rSGZ4WEEwcGZ5b1BOUHBpdHcxNzBGaFpGVmJROXNMTGVkelk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZWZuWTlVMjV5QXArMkIyVTgxbk9yS2I4ZU5qL3dObFlOa0swZVVGazM2UGU2MWNzRDhwM0o1L1ZiS0xZekpjNXRqbFdlOUJ1Y1BpMFJKUWhseS9nQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicGZ2dDkvQWJQTEx1NlJMYll2OUZOQVZBOHBjbnB0RnNyTDRwVkN0dEVxTnFsaG16VG9XRCtkZk9aZTkwS2FBM2wzazRsOWZKMVB4Z3laYW9jaGNSaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzUyNDM2MTYzOjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5NDY5MjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOTUxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5NTC5qc29uIjogIntcImtleURhdGFcIjpcImRlK2d6Z2R4QVMycDU0K0o1aXdxL295c3lsZTArUk41OEpzOXZqNTNJRG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA5NTEzMTg1MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNzIwNzA4MzA3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
