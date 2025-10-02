// Lab Test 1 (Comp3123) - Tyson Ward-Dicks
// 101501186
// Question 3

const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "Logs");

if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log("Logs directory created");
}

process.chdir(logsDir);

for(let i = 0; i < 10; i ++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file number ${i}\n`, "utf8");
    console.log(fileName);
}