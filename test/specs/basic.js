describe('The Sky Sports homepage', () => {
    it('should have the correct title', () => {
        browser.url('https://www.skysports.com/')
        const title = browser.getTitle()
        expect(browser).toHaveTitle('Sky Sports - Sports News, Transfers, Scores | Watch Live Sport');
    })

    it('should allow users to click "accept" on the cookie notice', () => {
        const cookies = $('#Accept')
        cookies.click()
        expect(cookies).not.toExist()
        browser.pause(1000)
    })
})