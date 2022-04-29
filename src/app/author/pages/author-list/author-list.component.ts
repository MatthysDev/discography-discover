import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Author } from 'src/app/core/models/author';
import { AuthorService } from 'src/app/core/services/http/author.service';
import { AuthorRoutingModule } from '../../author-routing.module';
import { AuthorFormComponent } from '../author-form/author-form.component';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors$: Observable<Author[]>;
  displayedColumns: string[] = ["id", "firstName", "lastName", "birthDay", "update", "delete"];

  constructor(private _authorService: AuthorService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.authors$ = this._authorService.get();
  }

  delete(author: Author) {
    this._authorService.deleteOne(author.id).subscribe(next => {
      this.loadData();
    })
  }

  openDialogAuthor(toUpdate: boolean, author: Author) {

    const authorFormData: AuthorRoutingModule = {
      toUpdate: toUpdate,
      author: author
    };

    const dialogRef = this.dialog.open(AuthorFormComponent, {
      data: authorFormData
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadData();
    });
  }

}
