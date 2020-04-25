import { Component,OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SearchService } from '../search.service';
import { halls } from '../functionhall/models/halls';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  // public selectedId: any;
  public query: string;
  public test:string  ;
  public functionHalls: any = [];
  public filteredData: any = [];
   //Functionhalls : halls[]
  constructor(
    private searchSvc: SearchService,
    private router: Router
    ) { }
  
  ngOnInit(): void {
    debugger
    this.searchSvc.getAllFunctionHalls()
    .subscribe( Response => {
      console.log("Functionhalls")
      this.functionHalls = Response["functionHalls"]  
  },(error) => { console.log(error);})
  }

  onSelect(item: any){
    this.router.navigate(['/functionhall', JSON.stringify(item)]);
  }

  onSearch(){
    debugger
    if(this.query.length < 3) {
      this.filteredData = [];
      return;
    }

    this.functionHalls.forEach(element => {
      let keys = Object.keys(element);
      keys.forEach(k => {
        let item;
        if(element[k].toString().toLowerCase().includes(this.query.toLowerCase())){
          console.log(element);
          item = element;
        }
        if(item != null) this.filteredData.push(item);
      });
    });
  }

}




