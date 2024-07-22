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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_07_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDg5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMCxcbiAgICAgICAgNyxcbiAgICAgICAgOTksXG4gICAgICAgIDgwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODksXG4gICAgICAgIDE3MCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNixcbiAgICAgICAgODYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNixcbiAgICAgICAgMjQxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDU3LFxuICAgICAgICAxOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMixcbiAgICAgICAgODUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTksXG4gICAgICAgIDEwNixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODgsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDYwLFxuICAgICAgICA3NyxcbiAgICAgICAgNzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMwLFxuICAgICAgICA0NixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4LFxuICAgICAgICA5MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk5LFxuICAgICAgICA0NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNyxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjU1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDYyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNCxcbiAgICAgICAgNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzksXG4gICAgICAgIDc4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI3LFxuICAgICAgICAxODIsXG4gICAgICAgIDYzLFxuICAgICAgICA1NixcbiAgICAgICAgOTAsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaaG9YSWlaUERTeWVQVVBEY3pFMmI1L2xMaHZhRDdjbmgwZFVVVmlZbVdVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItRl9pYW00QlJnV2U5ejd4Z3pZdHZnXCIsXG4gIFwicGhvbmVJZFwiOiBcImUxZmUzODRiLTZkYWYtNDU5OC05MjVhLTU0MGM1ZWVmYTg3Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDIsXG4gICAgICAyMTUsXG4gICAgICAyNDYsXG4gICAgICAyNTEsXG4gICAgICAxNTYsXG4gICAgICAyMzksXG4gICAgICA5MCxcbiAgICAgIDE5NSxcbiAgICAgIDExMixcbiAgICAgIDE3OSxcbiAgICAgIDkzLFxuICAgICAgODYsXG4gICAgICAxNjAsXG4gICAgICAyNTUsXG4gICAgICAyMzIsXG4gICAgICAzOCxcbiAgICAgIDEwNCxcbiAgICAgIDg2LFxuICAgICAgMzMsXG4gICAgICAyNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgNTMsXG4gICAgICAxMDQsXG4gICAgICAyNDgsXG4gICAgICAyMzcsXG4gICAgICAxNDQsXG4gICAgICA0NyxcbiAgICAgIDE1OCxcbiAgICAgIDIwMCxcbiAgICAgIDI4LFxuICAgICAgMjEwLFxuICAgICAgMTQyLFxuICAgICAgMzIsXG4gICAgICAyMTEsXG4gICAgICAyNDAsXG4gICAgICAxNDQsXG4gICAgICAyNTEsXG4gICAgICAxMDEsXG4gICAgICAyNCxcbiAgICAgIDIxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTODlQODJaNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzUyNDM2MTYzOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVklTSU9OXCIsXG4gICAgXCJsaWRcIjogXCIxODE3ODA2MzIwNjAxNDI6MTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTW5GbVlvRUVPajMrclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvcDNWUXhPK0hmeFhBMHBmeW9QTlBwaXR3MTcwRmhaRlZiUTlzTExlZHpZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtDY3M1S1FBdDZGb0VWRi9pY0pkcnIrbDNhRlJONlExZHk5L1BudE5kN2hOS2JpNkUxQTJ2REpITmhXWElhQ1VaVWNnR3p2d2lDdDZjbmVRWDFFY0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdBL0U0cTJZNVFWR2p3c0xURkZuTXR4SDN2YkdrOXN0Y21UdWdUNUpxdGJ6ZUsxUUprL2QyK0tYeGg3Q1Vqdjlqb0diSTlQdDJkenFOTlVnRmZaMkRBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc1MjQzNjE2MzoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNjc4ODI4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTk1IXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOTUguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJGTVpwLzNYejlKS1hweitrTFpSNEhxbVVYMk1HWS9tdk5vYUZ6SzJPMDZrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwOTUxMzE4NDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTY3ODgyOTU4N1wifSIKfQ=="  // PUT your SESSION_ID 


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
