// KindleFy Games Engine v1.0

const games = [
    {
        id: "snake",
        name: "Snake",
        status: "Installed"
    },
    {
        id: "chess",
        name: "Chess",
        status: "Installed"
    },
    {
        id: "sudoku",
        name: "Sudoku",
        status: "Installed"
    }
];

function listGames() {
    console.table(games);
}

function getGame(id) {
    return games.find(game => game.id === id);
}

function launchGame(id) {

    const game = getGame(id);

    if (!game) {
        alert("Game not found.");
        return;
    }

    window.location.href = "apps/" + id + "/index.html";

}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Games Engine Ready");
});
