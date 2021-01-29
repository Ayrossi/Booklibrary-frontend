import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private URL: string = 'http://localhost:8080/api/v1/books';

  constructor(private http: HttpClient) { }

  getAllBooks() : Observable<Book[]> {
    return this.http.get<Book[]>(this.URL);
  }
}
