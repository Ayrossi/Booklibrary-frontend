import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private URL: string = 'http://localhost:8080/api/v1/books/';

  constructor(private http: HttpClient) { }

  getAllBooks() : Observable<Book[]> {
    return this.http.get<Book[]>(this.URL);
  }

  createBook(book: Book): Observable<Book>{
    return this.http.post<Book>(this.URL,book);
  }
  modifyBook(book: Book): Observable<Book>{
    return this.http.put<Book>(this.URL + book.id,book);
  }
  deleteBook(id:number): Observable<number>{
    return this.http.delete<number>(this.URL + id);
  }

}
