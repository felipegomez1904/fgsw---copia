import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})
export class RandomPage implements OnInit {

  random:any;
  iconname:'paw';

  constructor(private obtswaservi3:SwapiService) { }

  ngOnInit() {
    this.obtswaservi3.getswapi('breed/hound/afghan/images').subscribe(data=>{
    this.random=data;
    console.log(data);
    })
  }

}
