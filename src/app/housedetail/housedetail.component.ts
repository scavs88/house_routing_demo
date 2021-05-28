import { Component, OnInit } from '@angular/core';
import {House} from '../house';
import {HouseService} from '../house.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-housedetail',
  templateUrl: './housedetail.component.html',
  styleUrls: ['./housedetail.component.css']
})
export class HousedetailComponent implements OnInit {
  house:House = {
    type:"",
    floors:0,
    baths:0,
    beds:0,
    id:-1,
    img:"",
    sqfoot:0
  }
  constructor(private houseService: HouseService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let id: number = Number(routeParams.get("id"));

    this.house = this.houseService.getHouseFromId(id);
  }



}
