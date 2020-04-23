import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  helpOptions: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toogleHelp(){
    this.helpOptions = !this.helpOptions;
  }
 

}
