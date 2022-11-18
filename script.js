// chrome://extensions/
let myLeads = []

const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  renderLeads()
}

//INPUT BUTTON
inputBtn.addEventListener("click", function() {

  myLeads.push(inputEl.value)
  inputEl.value = ""
  // Save the myLeads array to localStorage 
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  renderLeads()
  //Verifying
  console.log( localStorage.getItem("myLeads") )
}) 


//DELETE BUTTON - listening for double clicks
deleteBtn.addEventListener("dblclick", function() {
  console.log("double clicked")
  //When clicked, clear localStorage, myLeads, and the DOM
  localStorage.clear()
  myLeads = []
  renderLeads()
})

// Create a variable, listItems, to hold all the HTML for the list items
function renderLeads() {
  let listItems = ""

  for(let i = 0; i < myLeads.length; i++) {
     
    listItems += `
      <li>
        <a target='_blank' href='${myLeads[i]}'>
        ${myLeads[i]}</a>
      </li>
    `
  }
  // Rendering the listItems inside the unordered list using ulEl.innerHTML
  ulEl.innerHTML = listItems
}
