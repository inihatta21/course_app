import { web } from "./app/web.js";


web.listen(3000, () => {
    testDb()
    console.log("run in port 3000")
})