import { Component, OnInit, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Author } from 'src/app/core/models/author';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Disk } from 'src/app/core/models/disk';
import { Kind } from 'src/app/core/models/kind';
import { KindFormData } from 'src/app/core/models/kind-form-data';
import { AuthorService } from 'src/app/core/services/http/author.service';
import { DiskService } from 'src/app/core/services/http/disk.service';
import { KindService } from 'src/app/core/services/http/kind.service';
import { DiskFormData } from 'src/app/core/models/disk-form-data';

@Component({
  selector: 'app-disk-form',
  templateUrl: './disk-form.component.html',
  styleUrls: ['./disk-form.component.css'],
})
export class DiskFormComponent implements OnInit {
  diskForm: FormGroup;
  disk: Disk;
  putRequest: boolean = false;
  idKind: number;
  idAuthor: number;
  kinds: Observable<Kind[]>;
  authors: Observable<Author[]>;
  kindForm: FormGroup;
  formAction: string;
  isUpdate: boolean;
  id: number = null;

  constructor(
    private fb: FormBuilder,
    private _diskService: DiskService,
    private _route: Router,
    private route: ActivatedRoute,
    private _kindService: KindService,
    private _authorService: AuthorService
  ) {
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.route.snapshot.paramMap.get('id') === null) {
      this.isUpdate = false;
      this.diskForm = this.fb.group({
        title: ['', [Validators.required, this.noWhitespaceValidator]],
        summary: ['', [Validators.required, this.noWhitespaceValidator]],
        author: [this.idAuthor],
        kind: [this.idKind],
      });
    } else {
      this.isUpdate = true;
      this._diskService.getById(this.id).subscribe(
        (loaddisk) => (
          (this.disk = loaddisk),
          (this.diskForm = this.fb.group({
            title: [
              loaddisk.title,
              [Validators.required, this.noWhitespaceValidator],
            ],
            summary: [
              loaddisk.summary,
              [Validators.required, this.noWhitespaceValidator],
            ],
            author: [loaddisk.author],
            kind: [loaddisk.kind],
          }))
        )
      );
    }
    this.formAction = this.isUpdate ? 'Modifier' : 'Ajouter';
  }

  ngOnInit(): void {
    this.kinds = this._kindService.get();
    this.authors = this._authorService.get();
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;

    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  onSubmit(disk: Disk) {
    if (this.diskForm.valid) {
      if (this.isUpdate) {
        this._diskService.put(this.id, disk).subscribe((next) => {
          this.diskForm.reset();
          this._route.navigateByUrl('disks');
        });
      } else {
        //post
        this._diskService.post(disk).subscribe((next) => {
          console.log('Disk:', next);
          this.diskForm.reset();
          this._route.navigateByUrl('disks');
        });
      }
    }
  }
}
