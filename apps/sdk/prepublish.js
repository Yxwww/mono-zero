const fs = require("fs");
const path = require("path");

// Read package.json
const packageJsonPath = path.join(__dirname, "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

// Filter out dependencies starting with "@repo"
if (packageJson.dependencies) {
  packageJson.dependencies = Object.fromEntries(
    Object.entries(packageJson.dependencies).filter(
      ([key]) => !key.startsWith("@repo"),
    ),
  );
}

// Filter out devDependencies starting with "@repo"
if (packageJson.devDependencies) {
  packageJson.devDependencies = Object.fromEntries(
    Object.entries(packageJson.devDependencies).filter(
      ([key]) => !key.startsWith("@repo"),
    ),
  );
}

// Write the modified package.json back to the file
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log("Removed @repo packages from package.json");
