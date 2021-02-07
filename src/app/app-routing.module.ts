import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksOverviewComponent} from "./components/books-overview/books-overview.component";
import {BookTileComponent} from "./components/book-tile/book-tile.component";

const routes: Routes = [
  {path: 'overview', component: BooksOverviewComponent},
  {path: 'tile', component: BookTileComponent},
  {path: '**', redirectTo: 'tile'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
