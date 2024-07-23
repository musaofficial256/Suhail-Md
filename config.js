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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_14_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTczLFxuICAgICAgICA5NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDc0LFxuICAgICAgICA1MixcbiAgICAgICAgOTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4LFxuICAgICAgICAyNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODAsXG4gICAgICAgIDczLFxuICAgICAgICA5MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4LFxuICAgICAgICA5MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMCxcbiAgICAgICAgOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA1NixcbiAgICAgICAgMjE3LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTksXG4gICAgICAgIDM3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMSxcbiAgICAgICAgODUsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU0LFxuICAgICAgICA1MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg3LFxuICAgICAgICA5NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4LFxuICAgICAgICA4NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDksXG4gICAgICAgIDQzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzksXG4gICAgICAgIDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTdGIwYmRCSkNMeVZOZnFKVllYL1ZnSkdzN0RzajhlYVVHWkRmVjFDMHVRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEVDVPVUdEUVRnNnIyaEgyVmlHRUV3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjBkMDliMTE1LWE3ZTEtNDE1OS04ZDExLWI4YTQ4MjgzMTBjM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NyxcbiAgICAgIDE4OCxcbiAgICAgIDEwMyxcbiAgICAgIDE5MCxcbiAgICAgIDE0NyxcbiAgICAgIDExNCxcbiAgICAgIDEyOSxcbiAgICAgIDM0LFxuICAgICAgNTksXG4gICAgICAxMzksXG4gICAgICA4NyxcbiAgICAgIDEzNixcbiAgICAgIDIyNCxcbiAgICAgIDE4MSxcbiAgICAgIDE0OCxcbiAgICAgIDIyLFxuICAgICAgODgsXG4gICAgICAyMjQsXG4gICAgICA5MyxcbiAgICAgIDE2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMSxcbiAgICAgIDE1NSxcbiAgICAgIDE3NCxcbiAgICAgIDQzLFxuICAgICAgOTgsXG4gICAgICAxODgsXG4gICAgICA1LFxuICAgICAgMTQwLFxuICAgICAgMjUzLFxuICAgICAgNzgsXG4gICAgICA5LFxuICAgICAgMjEsXG4gICAgICAyMjIsXG4gICAgICAxMDMsXG4gICAgICAxODYsXG4gICAgICAxNDEsXG4gICAgICA4MCxcbiAgICAgIDk4LFxuICAgICAgMTUzLFxuICAgICAgMTQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhLQVozTFExXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NTI0MzYxNjM6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJWSVNJT05cIixcbiAgICBcImxpZFwiOiBcIjE4MTc4MDYzMjA2MDE0MjoxOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNckZtWW9FRUxHdy9iUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9wM1ZReE8rSGZ4WEEwcGZ5b1BOUHBpdHcxNzBGaFpGVmJROXNMTGVkelk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicStuZ3pnVkUzbXovVC9CNldnWDM5ekRhNHRiR0JoaUFhWmk3dERFeUd3akZZQ1NIVTdCSlVHWm5FYTBmYi9xY3Z1cjBkOGlJOXVPNWhyS0MrMUdzQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMmhtZ0ZSanBhcHlPcWc2aGVObGsyVG54Yk9ucGRzNXI2UjF2Uk9EUU95YjUvS2J5V0E1UVVKa1ByRVlzMkMxSWc5bWlNanFlY080bmI3UHlXMkJzQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzUyNDM2MTYzOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3MTg4MzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOTUhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5NSC5qc29uIjogIntcImtleURhdGFcIjpcIkZNWnAvM1h6OUpLWHB6K2tMWlI0SHFtVVgyTUdZL212Tm9hRnpLMk8wNms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA5NTEzMTg0OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
