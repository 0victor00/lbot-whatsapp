module.exports =  {
        sessionId: 'session',
        headless: true,
        qrTimeout: 0,
        authTimeout: 0,
        cacheEnabled: false,
        useChrome: true,
        stickerServerEndpoint: true,
        killProcessOnBrowserClose: true,
        throwErrorOnTosBlock: false,
        chromiumArgs: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--aggressive-cache-discard',
            '--disable-cache',
            '--disable-gl-drawing-for-tests',
            '--disable-application-cache',
            '--disable-offline-load-stale-cache',
            '--disk-cache-size=0'
        ]
}

