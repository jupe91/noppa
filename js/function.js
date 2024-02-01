document.addEventListener("DOMContentLoaded", function() {
    var diceImage = document.querySelector("#dice img");

    diceImage.addEventListener("click", function() {
        // Arvotaan satunnaisluku väliltä 1-6
        var randomNumber = Math.floor(Math.random() * 6) + 1;

        // Muodostetaan kuvatiedoston nimi uutta satunnaislukua hyödyntäen
        var newImageSource = "./img/inverted-dice-" + randomNumber + ".jpg";

        // Vaihdetaan kuvan lähde uuteen
        diceImage.src = newImageSource;
    });
});
