import { Beer } from "../objects/beer";

export const Beers: Beer[] = [
  {
    id: 1,
    name: 'Pilsner',
    temperature: 0,
    minimumTemperature: 4,
    maximumTemperature: 6,
  },
  {
    id: 2,
    name: 'IPA',
    temperature: 0,
    minimumTemperature: 5,
    maximumTemperature: 6,
  },
  {
    id: 3,
    name: 'Lager',
    temperature: 0,
    minimumTemperature: 4,
    maximumTemperature: 7,
  },
  {
    id: 4,
    name: 'Stout',
    temperature: 0,
    minimumTemperature: 6,
    maximumTemperature: 8,
  },
  {
    id: 5,
    name: 'Wheat beer',
    temperature: 0,
    minimumTemperature: 3,
    maximumTemperature: 5,
  },
  {
    id: 6,
    name: 'Pale Ale',
    temperature: 0,
    minimumTemperature: 4,
    maximumTemperature: 6,
  },
];

export enum StatusBeer 
{
  Undefined = 'Undefined',
  Low = 'Low',
  Good = 'Good',
  High = 'High'
}