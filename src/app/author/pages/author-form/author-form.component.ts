import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Author } from 'src/app/core/models/author';
import { AuthorFormData } from 'src/app/core/models/author-form-data';
import { AuthorService } from 'src/app/core/services/http/author.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {

  authorForm: FormGroup;
  formAction: string;

  constructor(
    private fb: FormBuilder,
    private _authorService: AuthorService,
    private _dialogRef: MatDialogRef<AuthorFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AuthorFormData
  ) {
    this.formAction = data.toUpdate ? "Modifier" : "Ajouter";

    if (data.toUpdate) {
      const birthDayForm = new DatePipe('en-US').transform(data.author.birthDay, 'yyyy-MM-dd');
      //console.log(birthDayForm);
      this.authorForm = this.fb.group({
        firstName: [data.author.firstName, [Validators.required, this.noWhitespaceValidator]],
        lastName: [data.author.lastName, [Validators.required, this.noWhitespaceValidator]],
        birthDay: [birthDayForm, [Validators.required, this.noWhitespaceValidator]]
      })
    }
    else {
      this.authorForm = this.fb.group({
        firstName: ['', [Validators.required, this.noWhitespaceValidator]],
        lastName: ['', [Validators.required, this.noWhitespaceValidator]],
        birthDay: ['', [Validators.required, this.noWhitespaceValidator]]
      })
    }
  }

  ngOnInit(): void {
  }

  onSubmitAuthor(author: Author) {
    if (this.authorForm.valid) {

      if (this.data.toUpdate) {
        author.id = this.data.author.id;
        this._authorService.put(author.id, author).subscribe((next) => {
          this.authorForm.reset();
          this._dialogRef.close();
        })
      } else {
        this._authorService.post(author).subscribe((next) => {
          this.authorForm.reset();
          this._dialogRef.close();
        })
      }
    }
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;

    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

}
