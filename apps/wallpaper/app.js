document.querySelectorAll(".wallpaper").forEach(item=>{

item.addEventListener("click",()=>{

localStorage.setItem(
"wallpaper",
item.dataset.wallpaper
);

alert("Wallpaper saved!");

});

});
