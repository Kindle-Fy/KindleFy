// KindleFy v1.0

console.log("KindleFy Loaded");

window.addEventListener("load", () => {

    if (!localStorage.getItem("kindlefy-first-launch")) {

        alert("📚 Welcome to KindleFy!");

        localStorage.setItem("kindlefy-first-launch", "true");
    }

});

function openApp(appName) {

    console.log("Opening: " + appName);

}

function saveSetting(key, value) {

    localStorage.setItem(key, value);

}

function getSetting(key) {

    return localStorage.getItem(key);

}
