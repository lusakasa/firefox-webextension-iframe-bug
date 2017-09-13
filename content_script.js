const iframe = document.createElement('iframe');
iframe.src = browser.runtime.getURL('iframe.html');
document.documentElement.appendChild(iframe);