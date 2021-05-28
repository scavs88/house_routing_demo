import { Component, OnInit } from '@angular/core';
import {House} from '../house'
import { HouseService } from '../house.service';


@Component({
  selector: 'app-houselist',
  templateUrl: './houselist.component.html',
  styleUrls: ['./houselist.component.css']
})
export class HouselistComponent implements OnInit {

  constructor(private houseService:HouseService) { }
    houses:House[] = [];
    searchTerm = "";

    getHouseResult():House[]{
      if(this.searchTerm == "")
      {
        return this.houses;
      }
      else 
      {
        return this.houseService.getAllOfType(this.searchTerm);
      }
      
    }

  ngOnInit(): void {
    this.houses= this.houseService.getAllHouses();
  }


  searchHousesByType(type:string):void{
    console.log(type);
    this.searchTerm = type;
  }
}
