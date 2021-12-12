import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  WineList:any = [];

  constructor(private crud:CrudService, private router:Router) { }

  ngOnInit(): void {
    this.getWineList();
  }

  getWineList(){
    this.crud.getWinesAll().subscribe(
      data => {
        this.WineList = data;
      },
      error => {
        console.log(error);
      }
    )
  }

}
