import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion1',
  templateUrl: './descripcion1.page.html',
  styleUrls: ['./descripcion1.page.scss'],
})
export class Descripcion1Page implements OnInit {
 

  constructor(private miacrou:ActivatedRoute, private miswapiserv:SwapiService) { }
 ngOnInit() {
    this.miacrou.paramMap.subscribe((params)=>{
      let id = params.get('id');
      console.log(id);
        });
    }

    
  }