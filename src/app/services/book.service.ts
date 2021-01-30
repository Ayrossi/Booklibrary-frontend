import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private URL: string = environment.bookLibraryUrl + 'books/';

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
