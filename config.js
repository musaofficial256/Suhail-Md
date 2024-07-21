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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_46_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgODgsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzLFxuICAgICAgICA3MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI4LFxuICAgICAgICAxODYsXG4gICAgICAgIDYsXG4gICAgICAgIDIyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEyLFxuICAgICAgICA4MSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAzOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE4LFxuICAgICAgICA4MSxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNzksXG4gICAgICAgIDg3LFxuICAgICAgICA1NixcbiAgICAgICAgMjUwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA4OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI2LFxuICAgICAgICA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUxLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDM2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODUsXG4gICAgICAgIDk0LFxuICAgICAgICAwLFxuICAgICAgICA3OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NyxcbiAgICAgICAgODksXG4gICAgICAgIDEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDEsXG4gICAgICAgIDU5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA2LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjA5LFxuICAgICAgICA0OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzksXG4gICAgICAgIDU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ1LFxuICAgICAgICA2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDc5LFxuICAgICAgICA2NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDcwLFxuICAgICAgICA4MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjksXG4gICAgICAgIDI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQwLFxuICAgICAgICA0NSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkZWcHhOa0kvSHhFQmdMY1VDMU5mOEhZOGl5bkhqT0IrNXA1cnRtcmhvRVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjU0N1I0SlkxUllDME9SakpKUnUwLVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmQ0ZWVhNmYtZDRiMS00YWU2LWI3YTgtMTg2NzA5ZDQ5ZTA5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNyxcbiAgICAgIDI1MixcbiAgICAgIDIwNyxcbiAgICAgIDI1MyxcbiAgICAgIDEwMSxcbiAgICAgIDE3MyxcbiAgICAgIDE0LFxuICAgICAgMjI3LFxuICAgICAgMjA3LFxuICAgICAgNDAsXG4gICAgICAyMzksXG4gICAgICAxNDQsXG4gICAgICA4MixcbiAgICAgIDEyMixcbiAgICAgIDE5NCxcbiAgICAgIDEyLFxuICAgICAgNTgsXG4gICAgICAxLFxuICAgICAgMTY4LFxuICAgICAgMTI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYsXG4gICAgICAyMzUsXG4gICAgICA3NyxcbiAgICAgIDE5OCxcbiAgICAgIDM5LFxuICAgICAgMTY1LFxuICAgICAgMCxcbiAgICAgIDQsXG4gICAgICAxNzYsXG4gICAgICAxMTksXG4gICAgICAyMyxcbiAgICAgIDI0NCxcbiAgICAgIDg4LFxuICAgICAgNDQsXG4gICAgICAxNDIsXG4gICAgICAyMSxcbiAgICAgIDE4MixcbiAgICAgIDE3NSxcbiAgICAgIDE0LFxuICAgICAgNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiREZGOUU5Q1RcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1Njc1MjQzNjE2MzoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlZJU0lPTlwiLFxuICAgIFwibGlkXCI6IFwiMTgxNzgwNjMyMDYwMTQyOjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01YRm1Zb0VFUHl1OWJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL3AzVlF4TytIZnhYQTBwZnlvUE5QcGl0dzE3MEZoWkZWYlE5c0xMZWR6WT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiREJxemI0UjNoWUdoRzcwSTFKdkRuZ3BCV2NqcjFGSVltYnQ1bVFmSkVUMVdPQUtHdXZHUUUxVERIZDZzUnhiNHgwbHk0cTl3ME5vWURRbUVHSnhBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJkeXFBRVZsRm1LSmEreVkxcXM2SlhKOHFKSm1yRjBuMUlYRGY1NklZUElOSEM1WkhRNXRsZEVWUUtiMUhrYXoxZkpzT1JPT1VFZXMyZ2hxQy9RWGJEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3NTI0MzYxNjM6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTU4NzU4NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlubVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSW5tLmpzb24iOiAie1wia2V5RGF0YVwiOlwiREVEZDhpc1FIZ0NzMkFCWFNiWk90S0JZNFdLUXEzejRGaXZBcTRTanRkND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDk1MTMxODQ1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE1ODc1Nzc1MTdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
