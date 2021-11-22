import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.page.html',
  styleUrls: ['./breed.page.scss'],
})
export class BreedPage implements OnInit {
  breed:any;
  iconame:'paw';
  

  constructor(private obtswaservi2:SwapiService) { }

  ngOnInit() {
    this.obtswaservi2.getswapi('breed/hound/list').subscribe(data=>{
    this.breed=data;
    console.log(data);
    })
  }

}