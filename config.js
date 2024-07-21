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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_06_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODAsXG4gICAgICAgIDUzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgODYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDUyLFxuICAgICAgICA1MixcbiAgICAgICAgMjIxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICA0NixcbiAgICAgICAgMTIwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjksXG4gICAgICAgIDg0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2NixcbiAgICAgICAgMTczLFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDM4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDc4LFxuICAgICAgICA4NyxcbiAgICAgICAgNixcbiAgICAgICAgMTQzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDM0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDU3LFxuICAgICAgICA2MCxcbiAgICAgICAgODUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUyLFxuICAgICAgICA4NCxcbiAgICAgICAgMzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIsXG4gICAgICAgIDcsXG4gICAgICAgIDQxLFxuICAgICAgICA3OCxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA4NixcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg4LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDY0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg2LFxuICAgICAgICA3NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDM5LFxuICAgICAgICA4NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDgsXG4gICAgICAgIDY4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjExLFxuICAgICAgICA3MCxcbiAgICAgICAgNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc3LFxuICAgICAgICA2OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NixcbiAgICAgICAgMjM3LFxuICAgICAgICAzNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI3LFxuICAgICAgICA5NixcbiAgICAgICAgMTE5LFxuICAgICAgICAzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDM5LFxuICAgICAgICA2NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDk4LFxuICAgICAgICAxODMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMixcbiAgICAgICAgNjksXG4gICAgICAgIDMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMxLFxuICBcImFkdlNlY3JldEtleVwiOiBcInRKZndwWVczanBHUVNHajNGdVlKaUVsOVJKWTZkUm1aT2h3b0Y5Tk80TzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU2NzUyNDM2MTYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1MzE0NDU2NEVCMDU3RDFDMzNEQUExRkYyRjMzRTdGRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE1ODg3NjNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWi1nVVQxNUZUUFdYTTRzamFRZVlfQVwiLFxuICBcInBob25lSWRcIjogXCJjMWVhZDRjNS03NjE0LTQ3MDQtODk2Ny02ZWU0ZTA3NmViYTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTczLFxuICAgICAgMTc4LFxuICAgICAgMjQ5LFxuICAgICAgMTAzLFxuICAgICAgMTUwLFxuICAgICAgMzgsXG4gICAgICAzLFxuICAgICAgMjAyLFxuICAgICAgMTM4LFxuICAgICAgNTUsXG4gICAgICAyNDUsXG4gICAgICA0NyxcbiAgICAgIDE0MCxcbiAgICAgIDE1LFxuICAgICAgMjE5LFxuICAgICAgMTQyLFxuICAgICAgMTI4LFxuICAgICAgMTIwLFxuICAgICAgMjU1LFxuICAgICAgMTQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NyxcbiAgICAgIDIyNyxcbiAgICAgIDIwOCxcbiAgICAgIDIzNCxcbiAgICAgIDYzLFxuICAgICAgMTcsXG4gICAgICA5LFxuICAgICAgMTU3LFxuICAgICAgMjIsXG4gICAgICAxOTAsXG4gICAgICAxMzIsXG4gICAgICAxMTgsXG4gICAgICAxNTAsXG4gICAgICAxMixcbiAgICAgIDI0OCxcbiAgICAgIDQ4LFxuICAgICAgMjAzLFxuICAgICAgNjMsXG4gICAgICAyMzYsXG4gICAgICAxMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUllSRVdUOTlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1Njc1MjQzNjE2MzoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlZJU0lPTlwiLFxuICAgIFwibGlkXCI6IFwiMTgxNzgwNjMyMDYwMTQyOjEzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01iRm1Zb0VFSk80OWJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL3AzVlF4TytIZnhYQTBwZnlvUE5QcGl0dzE3MEZoWkZWYlE5c0xMZWR6WT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvY0o4QjRWNzZaOFdtVWZrY1BZdytMeGozOHM3WmRFZjJmSEtxaHlqanVpdEZydWtranpaZnNWdEpKSFptdGxZa28ydnduK2VLKzBtaWgyRjhzWjNEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwWlRwSEdqSlE1VEtqM0hvY3BQOEhYWDJwU1kzdTBjU0tIL1hIWXFoaUt6UTVoKzRjZWV1QXhJR3RNU1lFZGpseVRzVVVyVEFJZFdnL3BuNjBUeFJnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3NTI0MzYxNjM6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTU4ODc1OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlublwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSW5uLmpzb24iOiAie1wia2V5RGF0YVwiOlwid2J0YzVmeFhpVVhFVU56UU53SytmblBNRzI0Zis1NEt6SW9NUG5Dd1d0MD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDk1MTMxODQ1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxNTg4NzM3MzQ5XCJ9Igp9"  // PUT your SESSION_ID 


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
