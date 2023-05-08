const CLEAR_BTN = document.getElementById("clear-btn");
const INPUT_BTN = document.getElementById("input-btn");
const INPUT_EL = document.getElementById("input-el");
const UL_EL = document.getElementById("ul-el");
let myLeads = [];
const LOCAL_STORAGE_LEADS = JSON.parse(localStorage.getItem("myLeads"));
if (LOCAL_STORAGE_LEADS) {
    myLeads = LOCAL_STORAGE_LEADS;
    renderLeads();
};
INPUT_BTN.addEventListener("click", function () {
    if (INPUT_EL.value.length > 0) {
        myLeads.push(INPUT_EL.value);
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        INPUT_EL.value = ""
        renderLeads();
    } else {
        alert("Blank input detected, please enter URL")
    }
})

CLEAR_BTN.addEventListener("click", function () {
    const CONFIRM_CLR = confirm("You are about to clear all leads, Are you sure?")
    if (CONFIRM_CLR) {
        localStorage.removeItem("myLeads");
        UL_EL.innerHTML = localStorage.getItem("myLeads")
        leads = []
        alert("Cleared")
    }
})
function renderLeads() {
    let leads = "";
    for (let i = 0; i < myLeads.length; i++) {
        leads += `<li>
            <a target="_blank" href="http://${myLeads[i]}">
                ${myLeads[i]}
            </a><button id="del-btn">DEL</button>
        </li>`;
    };
    UL_EL.innerHTML = leads;
}




// NON FOR-LOOP METHOD:




// const CLEAR_BTN = document.getElementById("clear-btn");
// const INPUT_BTN = document.getElementById("input-btn");
// const INPUT_EL = document.getElementById("input-el");
// const UL_EL = document.getElementById("ul-el");
// let newLead = ""
// let leads = [];

// if (localStorage.getItem("myLeads")) {
//     leads.push(localStorage.getItem("myLeads"))
//     UL_EL.innerHTML = leads
// }

// INPUT_BTN.addEventListener("click", function () {
//     newLead = INPUT_EL.value;
//     leads.push(
//         `<li>
//             <a target="_blank" href="http://${INPUT_EL.value}">
//                 ${INPUT_EL.value}
//             </a><button id="del-btn">DEL</button>
//         </li>`);
//     renderLeads();
// })

// CLEAR_BTN.addEventListener("click", function () {
//     const CONFIRM_CLR = confirm("You are about to clear all leads, Are you sure?")
//     if (CONFIRM_CLR) {
//         localStorage.removeItem("myLeads");
//         UL_EL.innerHTML = localStorage.getItem("myLeads")
//         leads = []
//         alert("Cleared")
//     }
// })
// const DEL_BTN = document.getElementById("del-btn")
// DEL_BTN.addEventListener("click", function () {
//     const CONFIRM_DEL = confirm("Delete?");
//     if (CONFIRM_DEL) {
//         this.parentNode.remove();
//     }
// })



// function renderLeads() {
//     localStorage.setItem("myLeads", leads.join(""))
//     UL_EL.innerHTML = localStorage.getItem("myLeads")
// }

