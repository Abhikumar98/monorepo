const {commonFunction, CommonContract} = require("@monorepo/utils")

commonFunction()

const commonVariable = new CommonContract();
commonVariable.date = new Date();
commonVariable.id = "12k3hbvgh123b12";
commonVariable.name = "John Doe";

console.log(commonVariable);

console.log("This is the server file")