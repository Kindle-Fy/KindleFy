const apps = [

{
id:"calculator",
name:"Calculator",
icon:"assets/icons/calculator.svg",
url:"apps/calculator/index.html",
always:true
},

{
id:"notes",
name:"Notes",
icon:"assets/icons/notes.svg",
url:"apps/notes/index.html",
always:true
},

{
id:"settings",
name:"Settings",
icon:"assets/icons/settings.svg",
url:"apps/settings/index.html",
always:true
},

{
id:"library",
name:"Library",
icon:"assets/icons/library.svg",
url:"apps/library/index.html",
always:true
},

{
id:"wallpaper",
name:"Wallpaper",
icon:"assets/icons/wallpaper.svg",
url:"apps/wallpaper/index.html",
always:true
},

{
id:"store",
name:"Store",
icon:"assets/icons/store.svg",
url:"apps/store/index.html",
always:true
},

{
id:"about",
name:"About",
icon:"assets/icons/about.svg",
url:"apps/about/index.html",
always:true
},

{
id:"snake",
name:"Snake",
icon:"assets/icons/snake.svg",
url:"apps/snake/index.html"
},

{
id:"chess",
name:"Chess",
icon:"assets/icons/chess.svg",
url:"apps/chess/index.html"
},

{
id:"sudoku",
name:"Sudoku",
icon:"assets/icons/sudoku.svg",
url:"apps/sudoku/index.html"
}

];

const container=document.getElementById("apps");

apps.forEach(app=>{

if(app.always || localStorage.getItem("app_"+app.id)=="true"){

container.innerHTML+=`

<a class="app" href="${app.url}">

<img src="${app.icon}">

<span>${app.name}</span>

</a>

`;

}

});