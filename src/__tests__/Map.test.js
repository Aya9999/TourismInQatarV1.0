import 'regenerator-runtime/runtime'
import "babel-polyfill";
const puppeteer = require('puppeteer')
const address = "http://localhost:3000/"
const headless = require('../../browser.config')
let browser, page = null

jest.setTimeout(30000)

beforeAll(async () => {
    if (!browser && !page) {
        browser = await puppeteer.launch(headless)
        page = await browser.newPage()
        await page.setViewport({ width: 1366, height: 768 })
    }
})

afterAll(async () => {
    if (browser, page) {
        await browser.close()
        browser, page = null
    }
})

describe("Map Testing", () => {
    test("Hide map", async () => {
        await page.goto(address + "dashboard/one")
        await page.waitForTimeout(1000)
        const button = await page.$('#viewMap')
        button.click()
        console.log('this is button', button)
        const result = await page.evaluate(() => Array.from(document.getElementById("qmap")))
        console.log(result)
        expect(result.includes("qmap")).toBe(true)
    })
})