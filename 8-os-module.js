const os = require('os');
// info about current user
const user=os.userInfo()
console.log(user)

// method returns the system up time in seconds
console.log(os.freemem())
console.log(os.totalmem())
// the os module interacts with the operating system of a devie