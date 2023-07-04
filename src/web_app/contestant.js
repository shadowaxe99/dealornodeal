class Contestant {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }

    updateScore(value) {
        this.score += value;
    }

    resetScore() {
        this.score = 0;
    }
}

export default Contestant;