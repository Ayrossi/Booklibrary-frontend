import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BookService } from 'src/app/services/book.service';
import {Book} from '../../model/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  //public newBook: Book= new Book("", "", "", "");
  private _editMode: boolean = false;


  get editMode(): boolean {
    return this._editMode;
  }

  constructor(public dialogRef: MatDialogRef<AddBookComponent>,
     @Inject(MAT_DIALOG_DATA) public data: Book,
     private bookService: BookService) { }

  ngOnInit(): void {
    if(this.data.id !== null)
        this._editMode = true;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(form: NgForm): void {
    if(this._editMode){
      form.value.id = this.data.id;
      this.bookService.modifyBook(form.value).subscribe();
    }else{
      this.bookService.createBook(form.value).subscribe(()=>{},()=>{
        alert("The server did not respond")
      });
    }
    console.log(form.value)
    console.log(this._editMode)
  }
}
