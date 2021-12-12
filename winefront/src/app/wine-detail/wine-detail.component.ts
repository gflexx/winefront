import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../crud.service';
import { Wine } from '../wine.model';
import { product } from './wine-detail';

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.css']
})
export class WineDetailComponent implements OnInit {

  // contain product
  currentWine: Wine ={
    id: 0,
    name: '',
    quantity: 0,
    image: '',
    details: '',
  };

  message = '';

  constructor(private crud:CrudService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getWine(this.route.snapshot.params.id);
  }

  getWine(id: number): void{
    this.crud.getWine(id)
    .subscribe(
      data => {
        this.currentWine = data;
      },
      error => {
        console.log(error);
        this.message = error;
      }
    );
  }

}
