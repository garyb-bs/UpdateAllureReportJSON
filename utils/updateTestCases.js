const fs = require('fs');
const testCasePath = "./allure-report/data/test-cases";
const directory = fs.opendirSync(testCasePath)

async function updateSeverity (severity) {
  let file

  while ((file = directory.readSync()) !== null) {
    let currentFileName = testCasePath + "/" + file.name;
    console.log(currentFileName);
    fs.readFile(currentFileName, "utf-8", function (err,data) {
      if (err) {
        return console.log(err);
      }

      var results = JSON.parse(data);

      results.extra.severity = severity;
    
      fs.writeFile(currentFileName, JSON.stringify(results), function (err) {
        if (err) return console.log(err);
      });
    });
  }

  directory.closeSync();
}

updateSeverity("severity value");