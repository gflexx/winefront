import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { Wine } from '../wine.model';

@Component({
  selector: 'app-wine-edit',
  templateUrl: './wine-edit.component.html',
  styleUrls: ['./wine-edit.component.css']
})
export class WineEditComponent implements OnInit {

  currentWine: Wine ={
    id: 0,
    name: '',
    quantity: 0,
    image: '',
    details: '',
  };

  constructor(private crud: CrudService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getWine(this.route.snapshot.params.id);
  }

  getWine(id:number){
    this.crud.getWine(id)
    .subscribe(
      data => {
        this.currentWine = data;
      }
    );
  }

  updateWine():void{
    this.crud.updateWine(this.route.snapshot.params.id, this.currentWine).subscribe(
      response => {
        this.router.navigate(['/profile']);
      },
      error => {
        console.log(error);
      }
    )
  }

  deleteWine():void{
    this.crud.deleteWine(this.route.snapshot.params.id).subscribe(
      response => {
        this.router.navigate(['/profile']);
      },
      error => {
        console.log(error);
      }
    )
  }

}
