import { CarFullData } from '../utils/types';

function createCarBodyTemplate(color: string): string {
  const template = `
    <div class="car">
      <svg width="90px" height="90px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M1001 695.3H121c-50.8 0-92-41.2-92-92v-156c0-41.1 36.5-72.5 77.1-66.4l43.6 6.5 127.4-99.1c23.1-18 51.5-27.7 80.7-27.7h168c30.1 0 59.2 10.3 82.6 29.2l120.8 97.6s227.9 15.1 271.7 126.8v181.1z" fill="${color}" /><path d="M1001 704.3H121c-55.7 0-101-45.3-101-101v-156c0-22.2 9.6-43.2 26.5-57.7s39-20.9 61-17.6l39.8 6 124.3-96.7c24.5-19.1 55.2-29.6 86.2-29.6h168c32 0 63.4 11.1 88.3 31.2l118.6 95.8c12.5 1 63 5.9 118.4 21.6 37.1 10.5 68.6 23.8 93.6 39.4 32.1 20 53.8 44 64.5 71.3 0.4 1 0.6 2.2 0.6 3.3v181.1c0.2 4.9-3.8 8.9-8.8 8.9zM96.1 389.1c-13.8 0-27.3 4.9-37.9 14.1C45.4 414.3 38 430.3 38 447.3v156c0 45.8 37.3 83 83 83h871V516c-42.8-103.8-261.1-119.4-263.3-119.5-1.9-0.1-3.6-0.8-5.1-2l-120.8-97.6c-21.7-17.5-49-27.2-77-27.2h-168c-27.1 0-53.8 9.2-75.2 25.8l-127.4 99.1a8.89 8.89 0 0 1-6.9 1.8l-43.6-6.5c-2.8-0.6-5.7-0.8-8.6-0.8z" fill="#3E4152" /><path d="M255.4 665.1m-108.7 0a108.7 108.7 0 1 0 217.4 0 108.7 108.7 0 1 0-217.4 0Z" fill="#8599A4" /><path d="M255.4 782.8c-64.9 0-117.7-52.8-117.7-117.7s52.8-117.7 117.7-117.7 117.7 52.8 117.7 117.7-52.8 117.7-117.7 117.7z m0-217.3c-55 0-99.7 44.7-99.7 99.7s44.7 99.7 99.7 99.7 99.7-44.7 99.7-99.7-44.7-99.7-99.7-99.7z" fill="#3E4152" /><path d="M753.5 665.1m-108.7 0a108.7 108.7 0 1 0 217.4 0 108.7 108.7 0 1 0-217.4 0Z" fill="#8599A4" /><path d="M753.5 782.8c-64.9 0-117.7-52.8-117.7-117.7s52.8-117.7 117.7-117.7 117.7 52.8 117.7 117.7-52.8 117.7-117.7 117.7z m0-217.3c-55 0-99.7 44.7-99.7 99.7s44.7 99.7 99.7 99.7 99.7-44.7 99.7-99.7c-0.1-55-44.8-99.7-99.7-99.7z" fill="#3E4152" /><path d="M596.5 478H300.7V375.3H515z" fill="#9B5C77" /><path d="M596.5 487H300.7c-5 0-9-4-9-9V375.3c0-5 4-9 9-9H515c2.7 0 5.3 1.3 7 3.4l81.5 102.6c2.1 2.7 2.6 6.4 1.1 9.5-1.5 3.2-4.6 5.2-8.1 5.2z m-286.8-18h268.2l-67.2-84.6h-201V469z" fill="#3E4152" /></svg>
    </div>
  `;

  return template;
}

function createCarTemplate(car: CarFullData) {
  const carBody = createCarBodyTemplate(car.color);
  const template = `
    <li class="cars__item" data-car-id="${car.id}">
      <div class="cars__controls">
        <button class="button cars__select">Select</button>
        <button class="button cars__remove">Remove</button>
        <h4 class="cars__car-name">${car.name}</h4>
      </div>
      <div class="cars__track">
        <div class="cars__car-container">
          <div class="cars__state">
            <button class="button cars__start">Run</button>
            <button class="button cars__stop" disabled>Stop</button>
          </div>
          ${carBody}
        </div>
      </div>
    </li>
  `;

  return template;
}

export default createCarTemplate;
