// describe("Addition", () => {
//     test("expect 2+2 = 4", () => {
//         expect(2+2).toEqual(4);
//     })
// })  

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import HomePage from '../pages/HomePage'

Enzyme.configure({ adapter: new Adapter() });

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    HomePage: () => ({}),
}));

describe("Map UI Testing", () => {
    let wrapper = shallow(<HomePage/>);
    console.log(wrapper)

    test("Hide map", () => {
        // const map = jest.spyOn(HomePage, 'testViewMap')
    })
})