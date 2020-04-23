import { Component,OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  // public selectedId: any;
  public query: any;
  public data: any = [];
  public filteredData: any = [];

  constructor(
    private searchSvc: SearchService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.searchSvc
    .search()
    .subscribe(
      (data => {
        console.log(data);
        this.data = data;
      }),
      (error) => { console.log(error);}
    );
  }

  onSelect(item: any){
    this.router.navigate(['/functionhall', JSON.stringify(item)]);
  }

  onSearch(){
    if(this.query.length < 3) {
      this.filteredData = [];
      return;
    }

    this.data.forEach(element => {
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




