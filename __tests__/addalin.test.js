// const {getTime} = require('../components/DarkLightMode/DarkLightSettings');
// import getTime from '../src/components/DarkLightMode/DarkLightSettings'
import getTime from '../src/components/DarkLightMode/DarkLightSettings'

describe("Dark Mode Testing", () => {
    test("expect type of hour", () => {
        getTime()
        expect(time).toBeInstanceOf(Number)
    })
})