import { Vehicle } from "./Vehicle.js";

export class MemberVehicle extends Vehicle{
    #memberId
    constructor(plateNumber, isInside, memberId){
        super(plateNumber, isInside)
        this.#memberId = memberId
    }

    calculateCost(hours){
        if (typeof hours !== "number" || hours < 0){
            throw new Error("invalid hours number");
        }
        return 0
    }
}

