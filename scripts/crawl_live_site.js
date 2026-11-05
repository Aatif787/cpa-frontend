const https = require('https');
const fs = require('fs');

function fetchUrl(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    }).on('error', err => resolve({ error: err.message }));
  });
}

async function main() {
  console.log('Fetching https://cparora.com/ ...');
  const home = await fetchUrl('https://cparora.com/');
  console.log('Homepage status:', home.status, 'Body size:', home.body ? home.body.length : 0);

  if (!home.body) return;

  // Extract all hrefs
  const matches = [...home.body.matchAll(/href=["']([^"'#]+)["']/g)].map(m => m[1]);
  const internalUrls = matches
    .filter(u => u.startsWith('/') || u.includes('cparora.com'))
    .map(u => u.replace(/^https?:\/\/cparora\.com/, ''))
    .filter(u => !u.endsWith('.css') && !u.endsWith('.png') && !u.endsWith('.jpg') && !u.endsWith('.js') && u !== '');
  
  const uniqueUrls = [...new Set(internalUrls)].sort();
  console.log('Discovered URLs on https://cparora.com/:');
  console.log(uniqueUrls);

  // Check each URL status
  const urlStatus = [];
  for (const path of uniqueUrls) {
    const fullUrl = 'https://cparora.com' + (path.startsWith('/') ? path : '/' + path);
    const res = await fetchUrl(fullUrl);
    urlStatus.push({
      path,
      fullUrl,
      status: res.status,
      size: res.body ? res.body.length : 0
    });
    console.log(`[${res.status}] ${fullUrl} (${res.body ? res.body.length : 0} bytes)`);
  }

  fs.writeFileSync('live_site_audit.json', JSON.stringify({ urls: urlStatus, rawHome: home.body }, null, 2));
}

main();
