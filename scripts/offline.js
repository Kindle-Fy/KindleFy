// KindleFy Offline Manager v1.0

function updateConnectionStatus() {

    if (navigator.onLine) {

        console.log("🌐 Online");

        document.body.classList.remove("offline");

    } else {

        console.log("📴 Offline");

        document.body.classList.add("offline");

        alert("KindleFy is running offline.");
    }

}

window.addEventListener("online", updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);
window.addEventListener("load", updateConnectionStatus);

// Регистриране на Service Worker

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("/service-worker.js")
            .then(() => {

                console.log("✅ Service Worker Registered");

            })
            .catch(error => {

                console.log("❌ Service Worker Error", error);

            });

    });

}
