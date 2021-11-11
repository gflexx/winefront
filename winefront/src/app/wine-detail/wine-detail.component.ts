import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.css']
})
export class WineDetailComponent implements OnInit {

  // contain product
  product: any =[]

  // to contain id
  prd_id:any = null

  constructor(private crud:CrudService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.prd_id = this.route.snapshot.paramMap.get('id');
    this.product = this.getWineDetails()
  }

  // get product by passing id to service
  getWineDetails(){
    this.crud.getWine
  }

}
