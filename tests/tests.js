import {Admin} from "../src/admin.js";
import {assert, report} from "./assert.js";
function test1() {
    const el = document.createElement("div");
    // const Admin = new Admin(el);
    // poll.render("George");
    // assert(() => el.innerHTML.includes("Pepperoni")); // this one will fail
    //assert(function(){return el.innerHTML})
}

// now we run all tests sequentially
test1();

// display ugly results summary
report();