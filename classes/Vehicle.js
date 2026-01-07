
export class Vehicle{
    #isInside
    constructor(plateNumber, isInside = false){
        this.plateNumber = plateNumber
        this.#isInside = isInside
    }

    enter(){
        if (this.#isInside){
            throw new Error("Vehicle allready inside");
        }
        this.#isInside = true
    }

    exit(){
        if (!this.#isInside){
            throw new Error("Vehicle not inside");
        }
        this.#isInside = false
    }

    isInside(){
        return this.#isInside
    }

    calculateHourlyRate(){
        return 10
    }

    calculateCost(hours){
        if (typeof hours !== "number" || hours < 0){
            throw new Error("invalid hours number");
        }
        return hours * this.calculateHourlyRate()
    }
}