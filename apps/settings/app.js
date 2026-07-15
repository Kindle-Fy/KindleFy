const darkMode=document.getElementById("darkMode");

const showClock=document.getElementById("showClock");

const largeText=document.getElementById("largeText");

darkMode.checked=localStorage.getItem("darkMode")==="true";

showClock.checked=localStorage.getItem("showClock")!=="false";

largeText.checked=localStorage.getItem("largeText")==="true";

darkMode.addEventListener("change",()=>{

    localStorage.setItem("darkMode",darkMode.checked);

});

showClock.addEventListener("change",()=>{

    localStorage.setItem("showClock",showClock.checked);

});

largeText.addEventListener("change",()=>{

    localStorage.setItem("largeText",largeText.checked);

});
