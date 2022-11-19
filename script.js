// chrome://extensions/
let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

//fetches string array from local storage and parse it to a JS array
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

//saves current active window tab to myLeads array
tabBtn.addEventListener("click", function() {
  chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
    myLeads.push(tabs[0].url)
    //Used localStorage to work across page refresh; converts JS value to JSON string
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
  })

})

//Hold all url leads into list items in a ul
function render(leads) {
  let listItems = ""

  for(let i = 0; i < leads.length; i++) {
     
    listItems += `
      <li>
        <a target='_blank' href='${leads[i]}'>
        ${leads[i]}</a>
      </li>
    `
  }
  // Rendering the listItems inside the unordered list using ulEl.innerHTML
  ulEl.innerHTML = listItems
}


//INPUT BUTTON
inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  // Save the myLeads array to localStorage 
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  render(myLeads)
  //Verifying
  console.log( localStorage.getItem("myLeads") )
}) 


//DELETE BUTTON - listening for double clicks
deleteBtn.addEventListener("dblclick", function() {
  //When clicked, clear localStorage, myLeads, and the DOM
  localStorage.clear()
  myLeads = []
  render(myLeads)
})

