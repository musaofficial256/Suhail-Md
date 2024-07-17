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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_37_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDYxLFxuICAgICAgICA5OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA2OSxcbiAgICAgICAgNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDYsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMixcbiAgICAgICAgMTA5LFxuICAgICAgICA1LFxuICAgICAgICAzMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYsXG4gICAgICAgIDc0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDksXG4gICAgICAgIDUxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDkyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDcxLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDcyLFxuICAgICAgICAxODAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDYxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMixcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLY2pheW84dnJITHo5Q3pLQ3o5dnVTejcvRVJ2ZGhYUlRITEphYXN4Z2k4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1Njc1MjQzNjE2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzEzNDQ3MUQ3M0E1NjEyMzYzNzcyMEJEODY5MjEyQkVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMjQxNDIxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU2NzUyNDM2MTYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzRUU1RTIyOTdGRUVFQTNGQTJFRDVEMEQ3MDgxQUQzOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEyNDE0MjFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSTQzMGE2bzdROXFPNmFEV1Q0NEgzQVwiLFxuICBcInBob25lSWRcIjogXCJkMTc3OTBhNi1iODAwLTRkMGUtYjBjMC1hMjM3Y2Y4YzViNTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA5LFxuICAgICAgMjA2LFxuICAgICAgMjE0LFxuICAgICAgNCxcbiAgICAgIDEwLFxuICAgICAgMTQsXG4gICAgICAxOTIsXG4gICAgICAxNTEsXG4gICAgICAxMTksXG4gICAgICAyMCxcbiAgICAgIDI1MyxcbiAgICAgIDE5MCxcbiAgICAgIDcwLFxuICAgICAgOSxcbiAgICAgIDIzMSxcbiAgICAgIDE1MixcbiAgICAgIDIwMSxcbiAgICAgIDAsXG4gICAgICAyMTEsXG4gICAgICA5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NCxcbiAgICAgIDIxNCxcbiAgICAgIDI0MyxcbiAgICAgIDIyMyxcbiAgICAgIDE2NCxcbiAgICAgIDIyOCxcbiAgICAgIDM1LFxuICAgICAgMTUwLFxuICAgICAgNjEsXG4gICAgICAxNjMsXG4gICAgICAxODUsXG4gICAgICAxNTYsXG4gICAgICAxOTEsXG4gICAgICAyMTEsXG4gICAgICAxMzUsXG4gICAgICAxMzksXG4gICAgICAzNyxcbiAgICAgIDk5LFxuICAgICAgMjA4LFxuICAgICAgMTMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkI0WDMxMVAzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NTI0MzYxNjM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlZJU0lPTlwiLFxuICAgIFwibGlkXCI6IFwiMTgxNzgwNjMyMDYwMTQyOjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUhGbVlvRUVNT2U0TFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvcDNWUXhPK0hmeFhBMHBmeW9QTlBwaXR3MTcwRmhaRlZiUTlzTExlZHpZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFTMmJLVkFhVVBUWXU4TEdMMjlDL0Y1aDFFdzI3WHFwOTRaNjAzRDgyak5wR3ZOWjlYYnhQOHVXdVN4L1hldVlzcFBhQysvRHZBMnJjd1lESGpuUUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhrMW4xNXRSMkpJRE01U01TQnJwb1E4RWhUclVRTFErNlpWTEJkUWwvdHAwMU96a1BlTGJ1YVkyVnBMMThhN3p4b21ENHRGNmplK2hHdG52SGY2L2lRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc1MjQzNjE2MzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyNDE0MTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGcG1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZwbS5qc29uIjogIntcImtleURhdGFcIjpcImZRZnZKSHRnWWc1Y05RUjhrVy9pdkg3M0dwS0xYdUZCTGdvSm9RbEVPUGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA5NTEzMTg0MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMjQxNDE3OTc4XCJ9Igp9"  // PUT your SESSION_ID 


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
