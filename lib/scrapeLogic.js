const puppeteer = require("puppeteer");
const fs = require("fs");
require("dotenv").config();

const scrapeLogic = async (res) => {
  try {
    const browser = await puppeteer.launch({
      args: [
        "--disable-setuid-sandbox",
        "--no-sandbox",
        "--single-process",
        "--no-zygote",
      ],
      executablePath:
        process.env.NODE_ENV === "production"
          ? process.env.PUPPETEER_EXECUTABLE_PATH
          : puppeteer.executablePath(),
    });

    const page = await browser.newPage();
    await page.goto(
      "https://www.windy.com/multimodel/22.443/114.028?waves,22.438,114.033,15",
      {
        waitUntil: "networkidle0",
        timeout: 60000, // set timeout to 60 seconds
      }
    );

    await page.setViewport({ width: 1080, height: 1024 });

    const screenshotPath = "google_screenshot.png";
    await page.screenshot({ path: screenshotPath });

    // Read the screenshot file
    const imageBuffer = fs.readFileSync(screenshotPath);

    // Set response headers for an image
    res.setHeader("Content-Type", "image/png");
    res.send(imageBuffer);
    fs.unlinkSync(screenshotPath);
  } catch (e) {
    console.error(e);
    res.send(`Something went wrong while running Puppeteer: ${e}`);
  } finally {
    await browser.close();
  }
};

module.exports = { scrapeLogic };
