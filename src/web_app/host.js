class Host {
    constructor() {
        this.name = "Howie Mandel";
        this.currentDialogue = "";
    }

    speak(dialogue) {
        this.currentDialogue = dialogue;
        document.getElementById("dialogue").innerText = this.currentDialogue;
    }
}

let howie = new Host();

function updateDialogue(dialogue) {
    howie.speak(dialogue);
}