import { StatusBeer } from "../mock/beer.mock";

export class Beer {

    id: number = 0;
    name: string = '';
    status?: StatusBeer = StatusBeer.Undefined;
    temperature: number = 0;
    minimumTemperature: number = 0;
    maximumTemperature: number = 0;
}
