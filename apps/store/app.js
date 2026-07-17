const apps = [
{
    id:"snake",
    name:"Snake",
    type:"Game"
},
{
    id:"chess",
    name:"Chess",
    type:"Game"
},
{
    id:"sudoku",
    name:"Sudoku",
    type:"Game"
}
];

const store=document.getElementById("store");

function loadStore(){

    store.innerHTML="";

    apps.forEach(app=>{

        const installed=localStorage.getItem("app_"+app.id)=="true";

        const card=document.createElement("div");

        card.className="card";

        card.innerHTML=`
            <h2>${app.name}</h2>
            <p>${app.type}</p>
            <button>${installed ? "Uninstall" : "Install"}</button>
        `;

        const button=card.querySelector("button");

        button.onclick=()=>{

            if(installed){

                localStorage.removeItem("app_"+app.id);

            }else{

                localStorage.setItem("app_"+app.id,"true");

            }

            window.location.href="../../index.html";

        };

        store.appendChild(card);

    });

}

loadStore();