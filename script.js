const inputBtn = document.getElementById("input-btn")
let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
  // Push the value from the inputEl into the myLeads array 
  myLeads.push(inputEl.value)
  renderLeads()
  inputEl.value = ""
}) 

// 1. Create a variable, listItems, to hold all the HTML for the list items
function renderLeads() {
  let listItems = ""

  for(let i = 0; i < myLeads.length; i++) {
      // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    listItems += `
      <li>
        <a target='_blank' href='${myLeads[i]}'>
        ${myLeads[i]}</a>
      </li>
    `
  }
  // 3. Render the listItems inside the unordered list using ulEl.innerHTML
  ulEl.innerHTML = listItems
}
