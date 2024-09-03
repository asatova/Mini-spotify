import { v4 as uuidv4 } from "uuid";

function chillHop() {
    return [
        {
            name: "Oregon Coast",
            cover: "https://cms.chillhop.com/media/77786/squarelac33a4581e461546ffbcd7bdb98233dac4441cea.jpg",
            artist: "Moods",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9248",
            color: ["#205950", "#2ab3bf"], // Assuming a gradient color array
            id: uuidv4(),
            active: false,
        },
        {
            name: "Oregon two",
            cover: "https://cms.chillhop.com/media/77074/squarelc1284a87fb0e47c518ccaec1df4f732a2f50230f.jpg",
            artist: "Benom",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8279",
            color: ["#205950", "#2ab3bf"], // Assuming a gradient color array
            id: uuidv4(),
            active: false,
        },
    ];
}

export default chillHop;
