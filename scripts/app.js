// KindleFy v1.1

console.log("KindleFy Loaded");

window.addEventListener("load", () => {

    if (!localStorage.getItem("kindlefy-first-launch")) {

        alert("Welcome to KindleFy!");

        localStorage.setItem("kindlefy-first-launch", "true");

    }

    updateClock();
    setInterval(updateClock, 1000);

    updateNetwork();
    window.addEventListener("online", updateNetwork);
    window.addEventListener("offline", updateNetwork);

    updateBattery();

});

// ===== Clock =====

function updateClock() {

    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    const time = document.getElementById("time");

    if (time) {
        time.textContent = `${hours}:${minutes}`;
    }

}

// ===== Network =====

function updateNetwork() {

    const network = document.getElementById("network");

    if (!network) return;

    network.textContent = navigator.onLine ? "Online" : "Offline";

}

// ===== Battery =====

async function updateBattery() {

    const batteryElement = document.getElementById("battery");

    if (!batteryElement) return;

    if (!navigator.getBattery) {

        batteryElement.textContent = "--%";
        return;

    }

    const battery = await navigator.getBattery();

    function refreshBattery() {

        batteryElement.textContent =
            Math.round(battery.level * 100) + "%";

    }

    refreshBattery();

    battery.addEventListener("levelchange", refreshBattery);

}

// ===== Settings =====

function saveSetting(key, value) {

    localStorage.setItem(key, value);

}

function getSetting(key) {

    return localStorage.getItem(key);

}

// ===== Apps =====

function openApp(appName) {

    console.log("Opening:", appName);

}

// ===== Search =====

const search = document.getElementById("search");

if (search) {

    search.addEventListener("input", () => {

        const value = search.value.toLowerCase();

        document.querySelectorAll(".app").forEach(app => {

            const name = app.innerText.toLowerCase();

            app.style.display = name.includes(value)
                ? ""
                : "none";

        });

    });

}

// ===== Apply Settings =====

function applySettings() {

    if (localStorage.getItem("darkMode") === "true") {

        document.body.classList.add("dark");

    } else {

        document.body.classList.remove("dark");

    }

    if (localStorage.getItem("largeText") === "true") {

        document.body.classList.add("large-text");

    } else {

        document.body.classList.remove("large-text");

    }

    const statusBar = document.getElementById("status-bar");

    if (statusBar) {

        if (localStorage.getItem("showClock") === "false") {

            statusBar.style.display = "none";

        } else {

            statusBar.style.display = "flex";

        }

    }

}

window.addEventListener("load", applySettings);

// ===== Wallpaper =====

const wallpaper = localStorage.getItem("wallpaper");

switch (wallpaper) {

    case "paper":

        document.body.style.background =

            "url('assets/wallpapers/paper.jpg') center/cover";

        break;

    case "dark":

        document.body.style.background = "#111";

        break;

    default:

        document.body.style.background = "#f5f5f5";
}
