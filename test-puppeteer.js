import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));
  
  await page.goto('http://localhost:5174');
  await new Promise(r => setTimeout(r, 6000));
  
  const html = await page.evaluate(() => document.body.innerHTML);
  console.log("HTML:", html.substring(0, 1000));
  
  await browser.close();
})();
