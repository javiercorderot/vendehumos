import { Component, OnInit, Input } from '@angular/core';
import { Vendehumo } from 'src/app/interfaces/vendehumo';

@Component({
  selector: 'app-card-vendehumo',
  templateUrl: './card-vendehumo.component.html',
  styleUrls: ['./card-vendehumo.component.css']
})
export class CardVendehumoComponent implements OnInit {

  @Input()vendehumo: Vendehumo = {} as Vendehumo
  
  constructor() { }

  ngOnInit(): void {
  }

}
