import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Kind } from 'src/app/core/models/kind';
import { KindFormData } from 'src/app/core/models/kind-form-data';
import { KindService } from 'src/app/core/services/http/kind.service';

@Component({
  selector: 'app-kind-form',
  templateUrl: './kind-form.component.html',
  styleUrls: ['./kind-form.component.css']
})
export class KindFormComponent implements OnInit {

  kindForm: FormGroup;
  formAction: string;

  constructor(
    private fb: FormBuilder,
    private _kindService: KindService,
    private _dialogRef: MatDialogRef<KindFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: KindFormData
  ) {
    this.formAction = data.toUpdate ? "Modifier" : "Ajouter";

    if (data.toUpdate) {
      this.kindForm = this.fb.group({
        name: [data.kind.name, [Validators.required, this.noWhitespaceValidator]]
      })
    }
    else {
      this.kindForm = this.fb.group({
        name: ['', [Validators.required, this.noWhitespaceValidator]]
      })
    }
  }

  ngOnInit(): void {
  }

  onSubmitKind(kind: Kind) {
    if (this.kindForm.valid) {

      if (this.data.toUpdate) {
        kind.id = this.data.kind.id;
        this._kindService.put(kind.id, kind).subscribe((next) => {
          this.kindForm.reset();
          this._dialogRef.close();
        })
      } else {
        this._kindService.post(kind).subscribe((next) => {
          this.kindForm.reset();
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
