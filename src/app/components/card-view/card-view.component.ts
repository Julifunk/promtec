import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})

export class CardViewComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    var btnElements = document.getElementsByClassName("btn");
    for (var i=0; i<btnElements.length; i++){
      btnElements[i].addEventListener("click", function(e){
      (e.target as HTMLButtonElement).parentElement.parentElement.parentElement.classList.toggle("card-large");
      switch ((e.target as HTMLButtonElement).innerText) {
      case "Small":
        (e.target as HTMLButtonElement).parentElement.childNodes.forEach(element => (element as HTMLButtonElement).classList.toggle("btn-secondary-active"));
        break;
      case "Large":
        (e.target as HTMLButtonElement).parentElement.childNodes.forEach(element => (element as HTMLButtonElement).classList.toggle("btn-secondary-active"));
        break;    
        }
      });
    }

  }

}
