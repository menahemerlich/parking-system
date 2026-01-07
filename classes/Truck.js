import { Vehicle } from "./Vehicle.js";

export class Truck extends Vehicle{
    #maxWeightTons
    constructor(plateNumber, isInside, maxWeightTons){
        super(plateNumber, isInside)
        if (maxWeightTons < 0){
            throw new Error("invalid maxWeightTons number");
        }
        this.#maxWeightTons = maxWeightTons
    }

    calculateHourlyRate(){
        if (this.#maxWeightTons > 5){
            return 25
        }
        return 20
    }
}