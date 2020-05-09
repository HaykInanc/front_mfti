import { Component, OnInit, ViewChild } from '@angular/core';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {
  data: Array<Object>;
  @ViewChild('film_elem') film_elem;
  slideNum:number;
  constructor(private imageData:ImagesService){ }

  ngOnInit(): void {
    this.imageData.getImages().subscribe(elem=>{
      let data = elem['data'];
      this.data=data;
    });
    this.slideNum = 0;
  }

  goLeft(){
    this.slideNum++;
    this.film_elem.nativeElement.style.left = this.slideNum*300+'px'

  }

  goRight(){
    this.slideNum--;
    this.film_elem.nativeElement.style.left = this.slideNum*300+'px'
  }

}
