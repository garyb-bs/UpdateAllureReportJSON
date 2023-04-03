const fs = require('fs');
const testCasePath = "./allure-report/data/test-cases";
const directory = fs.opendirSync(testCasePath)
let file

while ((file = directory.readSync()) !== null) {
  let currentFileName = testCasePath + "/" + file.name;
  console.log(currentFileName);
  fs.readFile(currentFileName, "utf-8", function (err,data) {
    if (err) {
      return console.log(err);
    }

    var steps = JSON.parse(data);

    for (let i = 0; i < steps.testStage.steps[0].steps.length; i++) {
      let currentString = steps.testStage.steps[0].steps[i].name.replace(/\u001b\[0;90m(.*?)\u001b\[0m/g, "");
      steps.testStage.steps[0].steps[i].name = currentString;
    }
  
    fs.writeFile(currentFileName, JSON.stringify(steps), {spaces:2}, function (err) {
       if (err) return console.log(err);
    });
  });
}

directory.closeSync()