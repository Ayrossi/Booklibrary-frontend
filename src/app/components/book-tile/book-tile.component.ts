import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../model/book";

@Component({
  selector: 'app-book-tile',
  templateUrl: './book-tile.component.html',
  styleUrls: ['./book-tile.component.scss']
})
export class BookTileComponent implements OnInit {


  @Input()
  book!: Book;

  constructor() { }

  ngOnInit(): void {
    this.book = new Book('Le nectar cacheté', 'Safiur Rahman Mubarakpuri', 'Ayoub', 'FR');
  }

}
