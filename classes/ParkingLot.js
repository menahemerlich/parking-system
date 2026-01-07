import { Vehicle } from "./Vehicle.js"

export class ParkingLot {
    #capacity
    #vehiclesInside
    constructor(capacity) {
        this.#capacity = capacity
        this.#vehiclesInside = []
    }

    park(vehicle) {
        if (!Vehicle.prototype.isPrototypeOf(vehicle)) {
            throw new Error("invalid vehicle type");
        }
        if (this.#vehiclesInside.length === this.#capacity) {
            throw new Error("Parking lot full");
        }
        if (vehicle.isInside()) {
            throw new Error("vehicle already inside");
        }
        vehicle.enter()
        const newObj = {}
        newObj.plateNumber = vehicle
        this.#vehiclesInside.push(newObj)
    }

    unpark(plateNumber, hours){
        const vehicles = this.#vehiclesInside.filter((veh) => {
            if (veh.plateNumber === plateNumber){
                return true
            }
        })
        if (vehicles.length === 0){
            throw new Error("vehicle not exist");
        }
        const vehicle = vehicles[0].plateNumber
        const cost = vehicle.calculateCost(hours)
        vehicle.exit()
        this.#vehiclesInside = this.#vehiclesInside.filter((veh)=>{
            if (!(veh.plateNumber === plateNumber)){
                return true
            }
        })
        return cost
    }

    getVehiclesCount(){
        return this.#vehiclesInside.length
    }
}

