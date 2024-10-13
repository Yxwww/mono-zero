const fs = require("fs");
const path = require("path");

const packageJsonPath = path.join(__dirname, "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

packageJson.dependencies["@repo/core"] = "*";

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log("Recover internal dependencies");
