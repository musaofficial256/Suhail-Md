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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_05_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk3LFxuICAgICAgICA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICA2MyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUsXG4gICAgICAgIDg2LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDk2LFxuICAgICAgICAzNSxcbiAgICAgICAgOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQxLFxuICAgICAgICA4LFxuICAgICAgICAxODUsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDcwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA0NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MixcbiAgICAgICAgMTc2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MyxcbiAgICAgICAgOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjksXG4gICAgICAgIDg5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDU5LFxuICAgICAgICAwLFxuICAgICAgICA1MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY1LFxuICAgICAgICA4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MixcbiAgICAgICAgNTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDkzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NixcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI1LFxuICAgICAgICA4OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODYsXG4gICAgICAgIDc4LFxuICAgICAgICAxODIsXG4gICAgICAgIDY2LFxuICAgICAgICA2OSxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRWdPVFl2RGlyS2NrczlaOXZVN3RRSnpBUTl2bExiYTFJenVtTEQwRTJacz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTY3NTI0MzYxNjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjRGOEU4NjRFRDVGNUUzMEU5NUMxNkMzMTcwQzczNERBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTY3MTUyOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyS08yMVVXTVRTYU00TlVkVlltZ1V3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ4YWU5ZjU2LTYyMTEtNDQxZC1hZjZjLTFkZWFhMDUxMDI0OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MCxcbiAgICAgIDIwMCxcbiAgICAgIDE3MSxcbiAgICAgIDE1MyxcbiAgICAgIDE1LFxuICAgICAgNzAsXG4gICAgICAxNTIsXG4gICAgICAyMDgsXG4gICAgICA0NyxcbiAgICAgIDIzOSxcbiAgICAgIDE0MixcbiAgICAgIDIxNixcbiAgICAgIDEzMyxcbiAgICAgIDQ5LFxuICAgICAgMTkwLFxuICAgICAgMTk5LFxuICAgICAgMjQ0LFxuICAgICAgMTQ1LFxuICAgICAgMjUwLFxuICAgICAgOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE1LFxuICAgICAgMTgxLFxuICAgICAgNTIsXG4gICAgICAyMDUsXG4gICAgICA0LFxuICAgICAgMzgsXG4gICAgICAxODMsXG4gICAgICAyMTEsXG4gICAgICAxMTUsXG4gICAgICAyMjksXG4gICAgICAzMSxcbiAgICAgIDIzMyxcbiAgICAgIDE2NSxcbiAgICAgIDMxLFxuICAgICAgOTcsXG4gICAgICAxMjEsXG4gICAgICAxMDksXG4gICAgICAzOSxcbiAgICAgIDEzMCxcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxWUldaMlZHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NTI0MzYxNjM6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJWSVNJT05cIixcbiAgICBcImxpZFwiOiBcIjE4MTc4MDYzMjA2MDE0MjoxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNZkZtWW9FRU55KytyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9wM1ZReE8rSGZ4WEEwcGZ5b1BOUHBpdHcxNzBGaFpGVmJROXNMTGVkelk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwialNEaENHSFBoVHpYajVZbm1RM3kyb3NhNzNqNW1tMC9WYjROUGlDSEFNNGFFaGJaUVIraTl4cUxvT2daUmdIMk5FalVjOG95UEdwL2k2YWZ0RXFhQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRXhqVjREMEViZjFKbEdwN3orQmVPWHZrdGlCZFRQbCtlY0xDMCt6aE52VW9BNE90b1VzQ0dSRVJuTmJHeW5yWklsY0ZvVkR4emFCZFNyWFRia1R0alE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzUyNDM2MTYzOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE2NzE1MjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQdmZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVB2Zi5qc29uIjogIntcImtleURhdGFcIjpcIjREZk9ETW5CNGtQSnc3czZTM2pMRnltNG9NTzVpU1gvSzlNbHZRRlFhdU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA5NTEzMTg0NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNjcxNTIzOTA5XCJ9Igp9"  // PUT your SESSION_ID 


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
