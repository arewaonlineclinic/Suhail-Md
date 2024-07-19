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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349019929488";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_34_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIzLFxuICAgICAgICA4MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA3MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDc1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTYsXG4gICAgICAgIDI4LFxuICAgICAgICA1NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOCxcbiAgICAgICAgNjksXG4gICAgICAgIDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDM3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMixcbiAgICAgICAgMTUwLFxuICAgICAgICAyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICA0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDczLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI4LFxuICAgICAgICA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDk3LFxuICAgICAgICA0MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDg1LFxuICAgICAgICA3MixcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDkzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDk3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA2NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQzLFxuICAgICAgICA3LFxuICAgICAgICAyMixcbiAgICAgICAgMjIxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MixcbiAgICAgICAgNDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNyxcbiAgICAgICAgODgsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZElCTTNCTzNFQ0RIL0ovZlFuclZ6Zi9wTVR2SldZUURDcXcvNHkzQjk3WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDE5OTI5NDg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyMEIyQzU0OUQ4QjI4Nzk4MEQwNjBCMTZGQzhFQTI0NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEzNjAwNjBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDE5OTI5NDg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDNjY4QzAzM0ExRkIxM0UwQTg0QTZEMjExNzg2MzJCRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEzNjAwNjJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRUdJbGoteGtTTnFyUHlRWFROMTFZUVwiLFxuICBcInBob25lSWRcIjogXCI2OGQ0NmY0NS00OWMwLTQ5YTMtOGNkYi1kNWJlNDllNjA0N2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc3LFxuICAgICAgMTA2LFxuICAgICAgMTU4LFxuICAgICAgOTYsXG4gICAgICAyMTYsXG4gICAgICAxNTAsXG4gICAgICAyMCxcbiAgICAgIDY4LFxuICAgICAgMTQxLFxuICAgICAgMjA0LFxuICAgICAgMTE1LFxuICAgICAgMCxcbiAgICAgIDEyNSxcbiAgICAgIDE5LFxuICAgICAgMTI1LFxuICAgICAgMTMzLFxuICAgICAgMTk3LFxuICAgICAgMjU1LFxuICAgICAgMTUsXG4gICAgICA5OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOSxcbiAgICAgIDIzNSxcbiAgICAgIDIyMSxcbiAgICAgIDQyLFxuICAgICAgMTQ0LFxuICAgICAgMTIxLFxuICAgICAgMjI1LFxuICAgICAgMTM1LFxuICAgICAgMTQyLFxuICAgICAgMTgxLFxuICAgICAgMjE4LFxuICAgICAgMjQsXG4gICAgICAxOTAsXG4gICAgICAyNCxcbiAgICAgIDI3LFxuICAgICAgMjQ5LFxuICAgICAgODIsXG4gICAgICAyMjAsXG4gICAgICAzMCxcbiAgICAgIDE2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNUVZKTk1SV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxOTkyOTQ4ODoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQXJld2FvbmxpbmVjbGluaWNcIixcbiAgICBcImxpZFwiOiBcIjg3MDI1MDMwMDIxMzI5OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzNZdlVjUXM3M250QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJuNm03ZzVEbWNBOEZvSVBxcW1HcTRrZ2hRNk0rNlp4dExiMGZ6cUszRFI0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImt3ZUhpaGc1ekFqZG5rUWJsZGtuazRiRm1pYUVpRkpxKzZxd3dKUjllMjFuUFF2ZHNaRmtzeUFGQkV0OUdSU1NONXo1Y3ZjU1FkZGhON0lHeUo2eERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImVsaTU1V2Nha2dQeldjdEhHZHd4eDBoM1dJSnpadFdwdk9GVTZkVjd1K0Q1ak83K3RGVDBVbHYxUS9HcHpLeHZVOHpJOEQ0NmQ1SWQ3bDU5RXpPamp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTk5Mjk0ODg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTM2MDA1NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
