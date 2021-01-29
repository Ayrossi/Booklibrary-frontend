import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Book} from '../../model/book';
import {BookService} from '../../services/book.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {AddBookComponent} from '../add-book/add-book.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-books-overview',
  templateUrl: './books-overview.component.html',
  styleUrls: ['./books-overview.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class BooksOverviewComponent implements OnInit {

  dataSource = new MatTableDataSource<Book>();
  columnsToDisplay = ['Book name', 'Author', 'Language', 'Owner', 'Edit', 'Delete'];

  public expandedElement: Book | null = null;

  constructor(private bookService: BookService,
              private dialog: MatDialog) { }

  ngOnInit(): void {

    this.bookService
      .getAllBooks()
      .subscribe(
        res => this.dataSource.data = res
      );

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddBookComponent, {
      width: '500pw'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
