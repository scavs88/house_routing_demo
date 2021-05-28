import { Injectable } from '@angular/core';
import { House } from 'src/app/house'

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  houses: House[] = [
    {
      id: 0,
      type: "House",
      floors: 2,
      beds: 3,
      baths: 2,
      sqfoot: 2000,
      img: "https://static01.nyt.com/images/2019/06/25/realestate/25domestic-zeff/a1c1a1a36c9e4ff8adcb958c4276f28d-jumbo.jpg"
    },
    {
      id: 1,
      type: "apartment",
      floors: 1,
      beds: 1,
      baths: 1,
      sqfoot: 700,
      img: "https://images1.apartmenthomeliving.com/i2/PBCwFVL-4525RlenxI7uNawwXxBCsN5_iVidNrjuccQ/113/image.jpg"

    },
    {
      id: 2,
      type: "House",
      floors: 3,
      beds: 5,
      baths: 4,
      sqfoot: 5000,
      img: "https://api.advancedhouseplans.com/uploads/plan-29922/29922-siesta-key-art-medium.jpg"

    },
    {
      id: 3,
      type: "Tiny House",
      floors: 2,
      beds: 1,
      baths: 1,
      sqfoot: 350,
      img: "https://www.pmmag.com/ext/resources/Issues/2020/June/codes-1158983394.jpg?1591198614"
    },
    {
      id: 4,
      type: "Tiny House",
      floors: 2,
      beds: 1,
      baths: 1,
      sqfoot: 400,
      img: "https://i.ytimg.com/vi/MGtFYATcupI/maxresdefault.jpg"

    },
    {
      id: 5,
      type: "Mansion",
      floors: 4,
      beds: 10,
      baths: 10,
      sqfoot: 35000,
      img: "https://i.pinimg.com/originals/8f/c6/f7/8fc6f7319a45f87aeb4fbc9be96b9ff7.jpg"
    },
  ]
  constructor() { }

  getAllHouses(): House[] {
    return this.houses;
  }

  getAllOfType(type: string): House[] {
    let result: House[] = [];
    this.houses.forEach((h: House) => {
      if (h.type.toLowerCase() == type.toLowerCase()) {
        result.push(h);
      }
    })
    return result;

  }

  getHouseFromId(id: number): House {
    let result: House = { id: 0, type: "", floors: 0, beds: 0, baths: 0, sqfoot: 0, img: "" };
    this.houses.forEach((h: House) => {
      if (h.id == id) {
        result = h;
      }
    })
    return result;
  }
}
