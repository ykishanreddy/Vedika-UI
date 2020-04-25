import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-functionhall',
  templateUrl: './functionhall.component.html',
  styleUrls: ['./functionhall.component.css']
})
export class FunctionhallComponent implements OnInit {
  public functionHalls: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.functionHalls = JSON.parse(this.activatedRoute.snapshot.params.functionHalls);
  }

}
// export class FunctionhallComponent implements OnInit {
//   public posts: any;
//   constructor(private activatedRoute: ActivatedRoute) { }

//   ngOnInit(): void {
//     this.posts = JSON.parse(this.activatedRoute.snapshot.params.posts);
//   }

// }