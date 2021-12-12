import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.css']
})
export class WinesComponent implements OnInit {

  wineList:any=[]
  cart:any=[]
  cartItems:any=[]


  constructor(private crud: CrudService) { }

  ngOnInit(): void {
    this.wineList=this.getWineList();
  }

  getWineList(){
    this.crud.getWinesAll().subscribe(
      data => {
        console.log(data)
        this.wineList = data;
      }
    );
  }

  getCart(){

  }

  getCartItems(){

  }

}
