import { handleSubmitEvent, reformatDate, handleGetAll } from "../pages/CalendarFunctions";
import "babel-polyfill"; 
import 'regenerator-runtime/runtime'

describe("Submit Testing", () => {
    test("submit",async () => {
        const events = await handleGetAll()
        const event={theTitle:"test1", eventdate:new Date()}
        const submit = await handleSubmitEvent(event)

        const eventsafterDelete = await handleGetAll()
        expect(eventsafterDelete.length).toBeGreaterThan(events.length)

    })
}
)
describe("get all events Testing", () => {
    test("get all",async () => {
        const events = await handleGetAll()
        expect(events.length).toBeGreaterThan(0)
    })
}
)