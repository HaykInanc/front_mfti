import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.sass']
})
export class ModalWindowComponent implements OnInit {
  @Input() text_;
  show: boolean;

  constructor() { }


  ngOnInit(): void {
    this.show = true;
  }

  open(){
    this.show=true;
  }

  close(){
    this.show=false;
  }

  modalHandler(event){
    event.stopPropagation()
  }

}
