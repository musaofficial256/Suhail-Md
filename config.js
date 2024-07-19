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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_19_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMyxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDczLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE1LFxuICAgICAgICA2LFxuICAgICAgICA4NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICA3NixcbiAgICAgICAgMTk5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODgsXG4gICAgICAgIDI2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDc0LFxuICAgICAgICAxODYsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDM5LFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDYxLFxuICAgICAgICA5NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgOCxcbiAgICAgICAgMTI1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODMsXG4gICAgICAgIDcsXG4gICAgICAgIDk0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjExLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDg3LFxuICAgICAgICAzNixcbiAgICAgICAgNjIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNixcbiAgICAgICAgNzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTczLFxuICAgICAgICAxOSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2MixcbiAgICAgICAgNjIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDYyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDksXG4gICAgICAgIDYxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDg0LFxuICAgICAgICA3NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDYxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3MixcbiAgICAgICAgMjMsXG4gICAgICAgIDQyLFxuICAgICAgICAzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MixcbiAgICAgICAgNTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQRm93SWRYMWlPc0JxdStpdVZHWUFncEtNekh0UjJCbzBhR0dLWGdlS1R3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1X29uLWlnWVNKLXBTUFhTTUNodnF3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjkzOTVmN2E4LTE3YWYtNDExYi1iYWEzLTMyNTkzNWY5M2ZmM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTQsXG4gICAgICAxODgsXG4gICAgICA2MSxcbiAgICAgIDE3OCxcbiAgICAgIDIzNSxcbiAgICAgIDExNixcbiAgICAgIDE3MyxcbiAgICAgIDIxNixcbiAgICAgIDE4OSxcbiAgICAgIDgxLFxuICAgICAgMTA5LFxuICAgICAgNjcsXG4gICAgICAzOSxcbiAgICAgIDE5MSxcbiAgICAgIDcwLFxuICAgICAgMTU0LFxuICAgICAgMjI3LFxuICAgICAgNjYsXG4gICAgICA4OCxcbiAgICAgIDE1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDQsXG4gICAgICAxNDcsXG4gICAgICAxNDYsXG4gICAgICAxNTYsXG4gICAgICAyMzcsXG4gICAgICA0LFxuICAgICAgMTEsXG4gICAgICAyMDksXG4gICAgICA3MixcbiAgICAgIDU2LFxuICAgICAgMjAwLFxuICAgICAgMTQsXG4gICAgICAxNjcsXG4gICAgICAxMTMsXG4gICAgICA1NCxcbiAgICAgIDE5NSxcbiAgICAgIDQ3LFxuICAgICAgMTQ5LFxuICAgICAgMTMzLFxuICAgICAgMTIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjg1VFlEMTdWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NTI0MzYxNjM6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlZJU0lPTlwiLFxuICAgIFwibGlkXCI6IFwiMTgxNzgwNjMyMDYwMTQyOjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUhGbVlvRUVLYmY2TFFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvcDNWUXhPK0hmeFhBMHBmeW9QTlBwaXR3MTcwRmhaRlZiUTlzTExlZHpZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjlramJtV01abU0xU0Q4S21ZeTRvMWxIakppWFA0T2hDVGZvVkI0MHVRZEQxRy94SERlOUdtVklPY0NYOTZ3L1lDMU9RTDBWU0hDalVuQVRwK0U1d0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkQzK1RVQ0JRc2p2a1hMMGp5VXJQUWhVdVB3bFJHV3FPc1p3NFc3cmY2WTNZYUEvRytXQm1yUUFPTW84eno3UXNIRmlJRTFkSkQ0WEx2eG1XTmc1cWdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc1MjQzNjE2Mzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzODA3NzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGcG1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZwbS5qc29uIjogIntcImtleURhdGFcIjpcImZRZnZKSHRnWWc1Y05RUjhrVy9pdkg3M0dwS0xYdUZCTGdvSm9RbEVPUGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA5NTEzMTg0MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMjQxNDE3OTc4XCJ9Igp9"  // PUT your SESSION_ID 


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
