import fs from 'fs';

export default async function globalSetup() {
  const allureResultsPath = 'allure-results';

  if (fs.existsSync(allureResultsPath)) {
    fs.rmSync(allureResultsPath, { recursive: true, force: true });
    console.log('🗑️ Cleared previous Allure results.');
  }
}