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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_47_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA2OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDc1LFxuICAgICAgICA4NixcbiAgICAgICAgNjAsXG4gICAgICAgIDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMyLFxuICAgICAgICA4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICA1NCxcbiAgICAgICAgMixcbiAgICAgICAgODksXG4gICAgICAgIDEzNixcbiAgICAgICAgODksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIzLFxuICAgICAgICA5MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA0MyxcbiAgICAgICAgNCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA4LFxuICAgICAgICA5NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgODYsXG4gICAgICAgIDkxLFxuICAgICAgICAzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1LFxuICAgICAgICAzMixcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcxLFxuICAgICAgICAzMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ5LFxuICAgICAgICA2NyxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDc3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzLFxuICAgICAgICA5NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDg5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMCxcbiAgICAgICAgNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTksXG4gICAgICAgIDM3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA5NixcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDUxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc0LFxuICAgICAgICA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDg4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjMzVoMDNSZ1NvaklGNjBCUmtVczlKcWxkZ2JrdHpCS21HU0hhV3NDL1hvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWdFBmYnFvMVFkLTF4TlE4LUVYai1RXCIsXG4gIFwicGhvbmVJZFwiOiBcImMyNWEwZGRkLTBmZjctNDI2OC1hMWFmLTRlNzRjZTZmZGJlOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NSxcbiAgICAgIDE2MixcbiAgICAgIDExMSxcbiAgICAgIDE5NCxcbiAgICAgIDEwMixcbiAgICAgIDEyMSxcbiAgICAgIDEwOSxcbiAgICAgIDk0LFxuICAgICAgMTc0LFxuICAgICAgMTg5LFxuICAgICAgMTU5LFxuICAgICAgNjQsXG4gICAgICAxMTEsXG4gICAgICAxOCxcbiAgICAgIDEzMyxcbiAgICAgIDE4NyxcbiAgICAgIDIwOCxcbiAgICAgIDcxLFxuICAgICAgMzIsXG4gICAgICAyMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgOTgsXG4gICAgICAxNjksXG4gICAgICAyNyxcbiAgICAgIDAsXG4gICAgICAyNCxcbiAgICAgIDcsXG4gICAgICAxMjQsXG4gICAgICAyMTUsXG4gICAgICAxODQsXG4gICAgICAxMjQsXG4gICAgICAxMCxcbiAgICAgIDIzOCxcbiAgICAgIDI0NixcbiAgICAgIDIwMCxcbiAgICAgIDUzLFxuICAgICAgNzcsXG4gICAgICAxOTIsXG4gICAgICAxMDAsXG4gICAgICAyMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUUFLOUI2RlFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1Njc1MjQzNjE2MzoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlZJU0lPTlwiLFxuICAgIFwibGlkXCI6IFwiMTgxNzgwNjMyMDYwMTQyOjIzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ016Rm1Zb0VFT1hHZ3JVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL3AzVlF4TytIZnhYQTBwZnlvUE5QcGl0dzE3MEZoWkZWYlE5c0xMZWR6WT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXVkJZRXhudlRsOFF3dFRJNHFxRit3MFdTUVByUUpvQlB1cFhBd0MvRkpsRHVzMW01cTNLa3M5MzRkUnFqa3o1TGV4dG9mb1Rza3dEbC9oUEdVL2lDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJEdGZFTkN1enZhaUxzTzZISVdmZDM2RFdPTlBTQ0J5dkR6RFh1YThreTdOZkFKc3duR0VVbTNQWDBXaFl1Ulh5YzFGSUN6U1kzZWhPUGNGaUFwaUpodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3NTI0MzYxNjM6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTgwMzYyNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5NTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTk1MLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZGUrZ3pnZHhBUzJwNTQrSjVpd3Evb3lzeWxlMCtSTjU4SnM5dmo1M0lEbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDk1MTMxODUxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE3MjA3MDgzMDdcIn0iCn0="  // PUT your SESSION_ID 


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
