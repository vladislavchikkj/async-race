import { CarData, CarFullData, QueryParams } from '../utils/types';
import { HttpMethods, Paths, ContentTypes } from '../utils/enum';
import { ORIGIN } from '../utils/const';
import { generateQueryString } from '../utils/utils';

async function getCars(params: QueryParams = {}): Promise<CarFullData[]> {
    const queryString = generateQueryString(params);
    const res = await fetch(`${ORIGIN}${Paths.GARAGE}${queryString}`);
    const cars: CarFullData[] | [] = await res.json();

  return cars;
}

async function getCar(id: number): Promise<CarFullData> {
  const res = await fetch(`${ORIGIN}${Paths.GARAGE}/${id}`);
  const car: CarFullData = await res.json();

  return car;
}

async function createCar(body: CarData): Promise<CarFullData> {
  const res = await fetch(`${ORIGIN}${Paths.GARAGE}`, {
    method: HttpMethods.POST,
    headers: {
      'Content-Type': ContentTypes.JSON,
    },
    body: JSON.stringify(body),
  });
  const car: CarFullData = await res.json();
  return car;
}

async function deleteCar(id: number) {
  const res = await fetch(`${ORIGIN}${Paths.GARAGE}/${id}`, {
    method: HttpMethods.DELETE,
  });
  
  return res;
}

async function updateCar(id: number, body: CarData): Promise<CarFullData> {
  const res = await fetch(`${ORIGIN}${Paths.GARAGE}/${id}`, {
    method: HttpMethods.PUT,
    headers: {
      'Content-Type': ContentTypes.JSON,
    },
    body: JSON.stringify(body),
  });
  const car: CarFullData = await res.json();

  return car;
}

export {
  getCars,
  getCar,
  createCar,
  deleteCar,
  updateCar,
};