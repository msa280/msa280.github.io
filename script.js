// ----------------------- Opening tab links in About Me section --------------------------> 
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  var tablinksArray = [...tablinks];                 // Convert to Array (remember)
  var tabcontentsArray = [...tabcontents];

  tablinksArray.forEach(tablink => {
    tablink.classList.remove("active-link");
  });
  
  tabcontentsArray.forEach(tabcontent => {
    tabcontent.classList.remove("active-tab");
  });
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add('active-tab');
}


//-------------------------------- Form to Google Sheet --------------------------------->
// ----- Code Credit: https://github.com/jamiewilson/form-to-google-sheets ----->
const scriptURL = 'https://script.google.com/macros/s/AKfycbw2Wr_CGt-ZWxl1XAkN61lqlLYzY3eHoFb29xqDPPRiVQ6F6VaJaf9WHRkJT68qfLJZqg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message has been successfully sent to Haider :)"
      setTimeout(function(){
        msg.innerHTML = ""
      }, 10000)
      form.reset()
  })
  .catch(error => console.error('Error!', error.message))
})


// ----------------- Opening and Closing the side menu for phone view ------------------>
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.right = "0";
}
function closemenu(){
  sidemenu.style.right = "-170px";
}