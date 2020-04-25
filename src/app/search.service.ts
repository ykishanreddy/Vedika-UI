import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }
  getAllFunctionHalls() {
    return this.http.get('http://localhost:8057/api/functionhalls', httpOptions);
    // return this.http.get('https://jsonplaceholder.typicode.com/posts', httpOptions);
  }
}
