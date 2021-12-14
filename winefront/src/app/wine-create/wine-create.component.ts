import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { Wine } from '../wine.model';

class ImageFile{
  constructor(public src:string, public file:File){}
}

@Component({
  selector: 'app-wine-create',
  templateUrl: './wine-create.component.html',
  styleUrls: ['./wine-create.component.css']
})
export class WineCreateComponent implements OnInit {
  currentWine: any={
    name: '',
    quantity: 0,
    details: '',
    image: [],
  }
  message = '';
  imageInput:any;


  constructor(private crud:CrudService, private router:Router) { }

  ngOnInit(): void {
  }

  // process file to get path and name
  processFile(imgInput:any){
    const file: File = imgInput.files[0];
    const reader =new FileReader();

    // using the file reader listen for events
    reader.addEventListener('load', (event: any) => {
      let selectedImg: ImageFile = new ImageFile(event.target.result, file);
      this.currentWine.image = selectedImg.file;
      console.log(this.currentWine.image)
    });
  }

  saveWine(): void{
    if(!this.currentWine.name){
      this.message = 'Fill kindly everything'
    }
    this.crud.createWine(this.currentWine).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/profile']);
      },
      error => {
        console.log(error);
      }
    )
  }

}
