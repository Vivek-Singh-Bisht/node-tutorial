const t=require("os")

//info about used
// const tt=t.userInfo()

//how many seconds pc is running
// tt=t.uptime()
// console.log(tt)

const objj={name:t.type(), memory:t.totalmem(),freeme:t.freemem(),release:t.release()}
console.log(objj)