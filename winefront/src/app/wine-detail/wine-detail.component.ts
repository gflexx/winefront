import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../crud.service';
import { product } from './wine-detail';

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.css']
})
export class WineDetailComponent implements OnInit {

  // contain product
  product!: product[];

  data:any

  // to contain id
  prd_id:any = null

  constructor(private crud:CrudService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.prd_id = this.route.snapshot.paramMap.get('id')

    this.data = this.crud.getWine(this.prd_id).subscribe(
      data => {
        this.product = data
      }
    )
  }

}
