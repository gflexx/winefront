import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  WineList:any = [];

  constructor(private crud:CrudService) { }

  ngOnInit(): void {
    this.getWineList();
  }

  getWineList(){
    this.crud.getWinesAll().subscribe(
      data => {
        this.WineList = data;
      }
    )
  }

  deleteWine(id:number):void{
    console.log(id);
  }



}
