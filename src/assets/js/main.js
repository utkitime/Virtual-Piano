let whiteKeys = ["a", "s", "d", "f", "g", "h", "j"];
let blackKeys = ["e", "t", "u", "w", "y"];

document.addEventListener("keydown", (e) => {
    if (whiteKeys.includes(e.key)) {
        new Audio(`assets/audio/white_keys/${e.key}.mp3`).play();
    } else if (blackKeys.includes(e.key)) {
        new Audio(`assets/audio/black_keys/${e.key}.mp3`).play()
    } else {
        console.warn(`The \'${e.key}\' key is pressed`);
    }

    // keys.includes(e.key)
    //     ? new Audio(`assets/audio/white_keys/${e.key}.mp3`).play()
    //     : console.warn(`The \'${e.key}\' key is pressed`);
});

