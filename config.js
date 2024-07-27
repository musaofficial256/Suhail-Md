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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_31_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjU0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDcyLFxuICAgICAgICA3OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODQsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDc4LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDksXG4gICAgICAgIDk0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA3OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY0LFxuICAgICAgICA0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTg1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDM2LFxuICAgICAgICA4NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjcsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDM5LFxuICAgICAgICA5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDUzLFxuICAgICAgICA1MixcbiAgICAgICAgOTksXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4MyxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY5LFxuICAgICAgICA0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODcsXG4gICAgICAgIDM1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAwLFxuICAgICAgICA3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXcXR2STJ5M0NHY055NDlhd0hnZDFIcGk0NlJ3cW5WTDMvVTFyek52MzJBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NjcyNjk3MDY0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0NDNzEwQjFBNjA3MjM4ODFBMzNBRDA2MzhFQjU0MTdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMDcyNjczXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZ0dnVOOTZmUXg2X0sxVXpyQzZWOVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTMxYzE0ZWUtNzE5OS00ZmIzLThhMzAtZTdmOTI5M2FiNzYyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM4LFxuICAgICAgMTksXG4gICAgICAxMDIsXG4gICAgICA5NixcbiAgICAgIDIzMSxcbiAgICAgIDEzMyxcbiAgICAgIDYzLFxuICAgICAgMjM4LFxuICAgICAgMjAwLFxuICAgICAgMjMsXG4gICAgICAyMyxcbiAgICAgIDE4NSxcbiAgICAgIDE4MixcbiAgICAgIDE2OSxcbiAgICAgIDI1MyxcbiAgICAgIDE2NSxcbiAgICAgIDEyOCxcbiAgICAgIDUyLFxuICAgICAgMjQ1LFxuICAgICAgMTY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM1LFxuICAgICAgNDksXG4gICAgICAyMTgsXG4gICAgICA0MixcbiAgICAgIDMxLFxuICAgICAgMTA4LFxuICAgICAgMTAyLFxuICAgICAgMTAzLFxuICAgICAgMTA0LFxuICAgICAgMjMzLFxuICAgICAgMjM0LFxuICAgICAgMTM3LFxuICAgICAgNTYsXG4gICAgICAxMyxcbiAgICAgIDkxLFxuICAgICAgMTY0LFxuICAgICAgMTA0LFxuICAgICAgMjM4LFxuICAgICAgMTE1LFxuICAgICAgMTU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpOTkZROFc4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3MjY5NzA2NDY6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTg4Mjk2MTE0MjYyMTUzOjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiS2ltXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkNuZ1p3R0VOcjhrclVHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvWFpISjNNSzdwOWUwM1A3R0hTNnhKSXEydGw0WHEvaW40ZlhpWG55c1NVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjJKNGpSR0oxdVc3OEE3THpiZDJLc1dCQWtVVDFtZmpqOFNYb055Z09WQmh3S0x0dG00SExyNUVTOTViSEVVa1VsbnJRUXVBZExDMHhCMVk1a2ZoQUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlI4ZWtYUmhxbC9zektpVDlWN3JvUHo1dUs5UWVteVRnTEk0bkRJelIrUjVzQi9WV21nVFFrRjk5OWsyV3RldTBEZTVmSlJjWmpvTElaNWJnVGJDNUFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NjcyNjk3MDY0NjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjA3MjY3MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpxRVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSnFFLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ0MxNGxxbGRMWUNSc2NtYUhialg2S0FVbFdZNmd1YXdneCtKZU1kY1UrTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjY5MzU0NDQ4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE1NDk2OTQ1OTBcIn0iCn0="  // PUT your SESSION_ID 


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
