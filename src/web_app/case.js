class Case {
    constructor(caseNumber, caseValue) {
        this.caseNumber = caseNumber;
        this.caseValue = caseValue;
        this.isOpen = false;
    }

    openCase() {
        this.isOpen = true;
    }

    getCaseValue() {
        return this.caseValue;
    }

    isCaseOpen() {
        return this.isOpen;
    }
}

export default Case;