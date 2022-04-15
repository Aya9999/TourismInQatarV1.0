import {changeCardColor, createPlaces, handleSearch, shuffle} from '../pages/homePageFunctions'
import React from 'react';

describe("Card Color Testing", () => {
    test("color", () => {
        const changeCardColor1 = changeCardColor("#EBD168")
        expect(changeCardColor1[0]).toBe("#A81818")
    })
}
)
describe("Shuffle Cards Testing", () => {
    test("shuffle", () => {
        const shuffleCards = shuffle()
        expect(shuffleCards[0].id).toBeGreaterThan(0)
    })
})
describe("Search Testing", () => {
    test("search", () => {
        const search = handleSearch("Mus")
        expect(search.length).toEqual(1)
    })
}
)
describe("Create places search", () => {
    test("create places", () => {
        const places = createPlaces()
        expect(places.length).toEqual(6)
    })
}
)