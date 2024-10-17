// loki.config.js
module.exports = {
    diffingEngine: 'pixelmatch',
    configurations: {
        'chrome.laptop': {
            target: 'chrome.docker',
            width: 1920,
            height: 1080,
            deviceScaleFactor: 1,
            mobile: false,
        },
        'chrome.tablet': {
            target: 'chrome.docker',
            width: 768,
            height: 1024,
            deviceScaleFactor: 2,
            mobile: true,
        },
        'chrome.mobile': {
            target: 'chrome.docker',
            width: 375,
            height: 667,
            deviceScaleFactor: 2,
            mobile: true,
        },
    },
    fileNameFormatter: ({configurationName, kind, story}) => {
        const locale = process.env.LOCALE || 'en';
        return `${locale}__${configurationName}__${kind}__${story}.png`;
    },
}
