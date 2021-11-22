import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.page.html',
  styleUrls: ['./breeds.page.scss'],
})
export class BreedsPage implements OnInit {

  breeds:any;
  iconname:'planets';

  constructor(private obtswaservi:SwapiService) { }

  ngOnInit() {
    this.obtswaservi.getswapi('breeds/list').subscribe(data=>{
    this.breeds=data;
    console.log(data);
    })
  }

}
