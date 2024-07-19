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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_13_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQwLFxuICAgICAgICA2NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyLFxuICAgICAgICAwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY4LFxuICAgICAgICA4LFxuICAgICAgICA1NyxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxODMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDkzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MixcbiAgICAgICAgMjIwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjA3LFxuICAgICAgICA3NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA1OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA2MixcbiAgICAgICAgNDYsXG4gICAgICAgIDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDY1LFxuICAgICAgICA5MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDksXG4gICAgICAgIDM1LFxuICAgICAgICA1NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0LFxuICAgICAgICA1NSxcbiAgICAgICAgODgsXG4gICAgICAgIDMwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtb3N0c04wc0E1YnBHQlpVUGpRSGxMYTJucG1zcG83UkpjY3pJd2J6T1JrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOLVBTNF9kNVQ4NlVWakNDbHBIbWVBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ5MWU3NzA1LTVmNzMtNGViOC04OGVjLWVmZDhhZDlkMmQyYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzEsXG4gICAgICA5NyxcbiAgICAgIDEyNCxcbiAgICAgIDIxNSxcbiAgICAgIDMwLFxuICAgICAgMjQwLFxuICAgICAgMTg5LFxuICAgICAgMTM5LFxuICAgICAgNjgsXG4gICAgICA4NCxcbiAgICAgIDE4LFxuICAgICAgMTMzLFxuICAgICAgMTIsXG4gICAgICAxNTUsXG4gICAgICAyMDYsXG4gICAgICAzNixcbiAgICAgIDg5LFxuICAgICAgMjI1LFxuICAgICAgNTMsXG4gICAgICAxMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYxLFxuICAgICAgMjMxLFxuICAgICAgMjE1LFxuICAgICAgMjU0LFxuICAgICAgMjE0LFxuICAgICAgNzgsXG4gICAgICAyMzcsXG4gICAgICAyMzUsXG4gICAgICAyNDgsXG4gICAgICAxMTYsXG4gICAgICAyMixcbiAgICAgIDIyMSxcbiAgICAgIDksXG4gICAgICAxNzYsXG4gICAgICAyMTUsXG4gICAgICAyMzgsXG4gICAgICAxNTQsXG4gICAgICA2MSxcbiAgICAgIDIwNyxcbiAgICAgIDI1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKTVFROUFURlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzUyNDM2MTYzOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJWSVNJT05cIixcbiAgICBcImxpZFwiOiBcIjE4MTc4MDYzMjA2MDE0Mjo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01QRm1Zb0VFTW4xNnJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL3AzVlF4TytIZnhYQTBwZnlvUE5QcGl0dzE3MEZoWkZWYlE5c0xMZWR6WT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWNmcrYVFrOVF5eVV4VlcvK1pQOUlVdmJOZjREQVJQcnJGWlZtaGhzVDBQL2ZpcFdNckN6RzNIaTdkNUoxNDhIU0RjTHpzaGNZMW95dndPME96ZERDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHSm1LRHBYVWp2Q1ZGMTNadk5tQ09kTUU1NjRIdjhDeG80NXU3V3JpRVBlTEl0OUpTOUdkZXVnSEFzK1owSGlRQUV5a1Z4K1dBWXk3YlhTd2JQUnZqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3NTI0MzYxNjM6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDE2Mzk3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTW1MXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNbUwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2MTMwUHoxdWE0ai9iVmtmS0RURkN2YlF4WmRyMGVwTVBJWWtSQ0NXL3pJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwOTUxMzE4NDIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
