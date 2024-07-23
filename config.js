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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_46_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyLFxuICAgICAgICAxNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDk0LFxuICAgICAgICAzLFxuICAgICAgICA5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNixcbiAgICAgICAgMTU1LFxuICAgICAgICA2NyxcbiAgICAgICAgODksXG4gICAgICAgIDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjEwLFxuICAgICAgICA2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjksXG4gICAgICAgIDExMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3NixcbiAgICAgICAgNDAsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1LFxuICAgICAgICA5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU0LFxuICAgICAgICA1LFxuICAgICAgICAzMixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDMxLFxuICAgICAgICAxODUsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQsXG4gICAgICAgIDQyLFxuICAgICAgICA4MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjksXG4gICAgICAgIDY5LFxuICAgICAgICAxODMsXG4gICAgICAgIDY2LFxuICAgICAgICA3OCxcbiAgICAgICAgNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMyxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA0NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAwLFxuICAgICAgICA2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDExLFxuICAgICAgICA2NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjExLFxuICAgICAgICAyMTMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU1LFxuICAgICAgICA3MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLWTF4a3dBN1BZd09yVE1TM2dTWXVrRXJMUTkvSUFpcXAvWXpNcUhONVBVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1Njc1MjQzNjE2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDM1RDQxNTIwQTJERDUzMUI5QjA1QjY4MTI1MTk4N0NcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNzUzMjExXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMyxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMyxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIll1cjlTR1hYVEhDNkZsRlROQml4MmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjk4NGQ2OTYtMDY1Ni00MGNlLWE1OGMtZTNlMmJiNWJiNDlmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMCxcbiAgICAgIDI0LFxuICAgICAgMTA5LFxuICAgICAgMjEzLFxuICAgICAgMjAzLFxuICAgICAgMTcwLFxuICAgICAgMTE2LFxuICAgICAgMTg5LFxuICAgICAgNjEsXG4gICAgICAyMzYsXG4gICAgICAxNTMsXG4gICAgICAxNjAsXG4gICAgICAyMjcsXG4gICAgICAxMzIsXG4gICAgICAxNTIsXG4gICAgICAzMyxcbiAgICAgIDAsXG4gICAgICA0NyxcbiAgICAgIDIwNyxcbiAgICAgIDEzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NCxcbiAgICAgIDg3LFxuICAgICAgMjMxLFxuICAgICAgOTUsXG4gICAgICAxNjgsXG4gICAgICAyMDQsXG4gICAgICA2NCxcbiAgICAgIDY0LFxuICAgICAgMjA0LFxuICAgICAgNDUsXG4gICAgICA3NyxcbiAgICAgIDE0NixcbiAgICAgIDE1OSxcbiAgICAgIDExMixcbiAgICAgIDE2MixcbiAgICAgIDE5OCxcbiAgICAgIDI0NCxcbiAgICAgIDM3LFxuICAgICAgMTE2LFxuICAgICAgNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVjFDU1gyUTdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1Njc1MjQzNjE2MzoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlZJU0lPTlwiLFxuICAgIFwibGlkXCI6IFwiMTgxNzgwNjMyMDYwMTQyOjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ012Rm1Zb0VFUEM4LzdRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL3AzVlF4TytIZnhYQTBwZnlvUE5QcGl0dzE3MEZoWkZWYlE5c0xMZWR6WT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxWUtkSVlpLzkxM0RiQ1lNcjJNaVpNenR6TTlPeXM3YVRtcU8yYXJ4QTlOditiL25HYnNhaUFMYnhCc0NRWFRXOGZRY2sxMXFKNzBmWHFReW5lREhBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmZnVnMWEza2pyZkhncE02bFJKdkxjRkN3RE44M0Rsb3FaKytCSzNqYVlVR3lqT0Z6MkVXTmJqcmlIc1RmcXdNZ1ZWeHRLbVJWb0JyVnA0bnZvdW1EQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3NTI0MzYxNjM6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTc1MzIwNFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
