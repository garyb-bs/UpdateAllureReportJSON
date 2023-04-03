<p float="left">
  <img src="https://avatars.githubusercontent.com/u/5879127?s=200&v=4" width="200" height="150" title="Allure">
  <img src="https://uploads-ssl.webflow.com/5ffda50aeec1a07681e97af7/6273fa9599f7f66b2c0cde5d_5f493b167e5dc864a0265b30_json-logo.png" width="200" height="100" title="JSON">
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="100" height="100" title="JS">
</p>

# Updating Allure Report data via JSON data editing

These utilities are designed to perform specific edits to the test case JSON data that is generated by the Allure Report. This was created due to the limitations in the documentation for Nightwatch Allure.

## Current Utilities

### Remove Color Codes from Test Case steps

In certain scenarios, the steps have a millisecond timestamp appended to the end of the step name. This leads to weird ANSI characters on the steps:

![Allure Timestamp Issue](https://i.imgur.com/Dn3PVOM.png)

To remedy this, the utility [removeColorCodes](utils/removeColorCodes.js) can be run. This will remove the timestamp and unwanted escape characters using a RegEx. It reads and parses the JSON files in the [test cases](allure-report/data/test-cases) directory and updates the step title to remove this.

#### How To Run

To run this, simply run the following command in your terminal:

```sh
npm run remove-color-codes
```

This will run the script as is, but it is recommended that you take this function and make it a part of a Utility class in your project so it can be called easily and does not need to be stored as a seperate file.

### Update Specific Test Case Data

If we want to update certain data in our test cases, but there is no easily identifiable way to do this in your chosen framework (for example; NighwatchJS) then this can help to add the data you need. Using a similar method to the one used to remove the escape characters above.

Right now, there is one example here, and that is to update the Severity of your test case. It will loop through all of the JSON files (one for each test case) and update it to a value you specify. This can easily be copied and modified for other properties that you may want to update.

#### How To Run

To run this, simply run the following command in your terminal:

```sh
npm run update-test-cases
```

Same as the first script, this will be better as a function in a Utility class but feel free to use as-is for testing purposes.

## Notes

* The updates are made to the files in the allure-report directory which is the generated report folder. If yours is different then you will need to update the path.
* The <b><i>updateSeverity</i></b> function can be easily duplicated for other properties in the JSON that you might need to update.