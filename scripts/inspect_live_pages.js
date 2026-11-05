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

async function inspectPages() {
  const pages = [
    '/about-us/company-profile',
    '/about-us/board-of-directors',
    '/about-us/core-team',
    '/ongoing-projects',
    '/executed-projects',
    '/major-projects',
    '/registrations',
    '/contact-us'
  ];

  const analysis = {};

  for (const p of pages) {
    const res = await fetchUrl('https://cparora.com' + p);
    if (!res.body) continue;
    
    // Extract images
    const imgs = [...res.body.matchAll(/src=["']([^"']+)["']/g)].map(m => m[1]);
    
    // Extract text snippets relating to turnover, crores, rupees, dates
    const turnoverMatches = res.body.match(/(?:turnover|revenue|crore|₹|Rs\.?)[^<.\n]{0,100}/gi) || [];
    
    analysis[p] = {
      status: res.status,
      images: [...new Set(imgs)],
      financialMentions: turnoverMatches.slice(0, 5)
    };
    console.log(`Page ${p}: ${imgs.length} images found, ${turnoverMatches.length} financial mentions`);
  }

  fs.writeFileSync('live_pages_analysis.json', JSON.stringify(analysis, null, 2));
}

inspectPages();
