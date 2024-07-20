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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_49_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDczLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MixcbiAgICAgICAgNzYsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDgwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDYsXG4gICAgICAgIDc4LFxuICAgICAgICA3MixcbiAgICAgICAgMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwLFxuICAgICAgICA1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIsXG4gICAgICAgIDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgODYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNixcbiAgICAgICAgODksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDYzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUwLFxuICAgICAgICA2MSxcbiAgICAgICAgNzksXG4gICAgICAgIDM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIsXG4gICAgICAgIDcwLFxuICAgICAgICAxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDksXG4gICAgICAgIDQ3LFxuICAgICAgICA1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDkwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA5OCxcbiAgICAgICAgNjksXG4gICAgICAgIDYxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDM4LFxuICAgICAgICAxMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDksXG4gICAgICAgIDQwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgODIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxODksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJoeVdGSnEyZXlVRy9peUU1MGV4RGdRTk9tbS9NMjlQU3J2WTN0aDZJcjNvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1Njc1MjQzNjE2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDkxODVFM0M4RTYzNEQ1Qzg3OTYyQzVFNkU0M0ZDMDlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDY1Mzc0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU2NzUyNDM2MTYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1QUEyMkMzMTM5QThFRDg4N0JCRjVENTY1MjlCQjhDNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE0NjUzNzVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYU9qV1Faa3dTR2VoMmliUUlOcEw3UVwiLFxuICBcInBob25lSWRcIjogXCJhNGZlODkyMS00YjBjLTRjMTYtYjc5OS05M2NjMTEyZDdhMjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ0LFxuICAgICAgMjAxLFxuICAgICAgNjksXG4gICAgICA1MyxcbiAgICAgIDEzNixcbiAgICAgIDEwNixcbiAgICAgIDU1LFxuICAgICAgMTYxLFxuICAgICAgNyxcbiAgICAgIDE4NSxcbiAgICAgIDU5LFxuICAgICAgMTM0LFxuICAgICAgNzYsXG4gICAgICAyMixcbiAgICAgIDE2MSxcbiAgICAgIDIsXG4gICAgICAxNTgsXG4gICAgICAxNjcsXG4gICAgICAyMzcsXG4gICAgICA2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDcsXG4gICAgICAyNDEsXG4gICAgICAyMjUsXG4gICAgICA4MixcbiAgICAgIDIwNCxcbiAgICAgIDM1LFxuICAgICAgMTIsXG4gICAgICAyNDMsXG4gICAgICAyNSxcbiAgICAgIDI0LFxuICAgICAgMjQsXG4gICAgICAxODMsXG4gICAgICAxNzgsXG4gICAgICAxMDcsXG4gICAgICAxNDksXG4gICAgICA0MCxcbiAgICAgIDE4NSxcbiAgICAgIDE4LFxuICAgICAgNzIsXG4gICAgICA3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3MTRSWEI4VFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzUyNDM2MTYzOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJWSVNJT05cIixcbiAgICBcImxpZFwiOiBcIjE4MTc4MDYzMjA2MDE0Mjo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01QRm1Zb0VFSlgwN2JRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL3AzVlF4TytIZnhYQTBwZnlvUE5QcGl0dzE3MEZoWkZWYlE5c0xMZWR6WT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2WUdjVkNFZXRHeVdydVRRZ2E1SXJjdFNwVUhkUUViM1pJZ2NNdDZ2K2JjWnlVRnY2KzBKUmRIOVVld1ZBTFloNjN2Tnd1YURrWGFnN040R3Q5ODVCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJveEtITjljVWl4QkpkTHZFcUs5RW5BT0VxOGVlVHhKMFRhYXh4ek1lMEMvZjJRNVg0ajhyQ0NxME1aRXpqM3JpMnRUYWFyTXM1VlVZYUZteFpmMWxDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3NTI0MzYxNjM6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDY1MzY5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTW1MXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNbUwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2MTMwUHoxdWE0ai9iVmtmS0RURkN2YlF4WmRyMGVwTVBJWWtSQ0NXL3pJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwOTUxMzE4NDIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
