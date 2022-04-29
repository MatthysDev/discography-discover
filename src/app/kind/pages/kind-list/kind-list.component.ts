import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Kind } from 'src/app/core/models/kind';
import { KindService } from 'src/app/core/services/http/kind.service';
import { MatDialog } from '@angular/material/dialog';
import { KindFormComponent } from '../kind-form/kind-form.component';
import { KindRoutingModule } from '../../kind-routing.module';

@Component({
  selector: 'app-kind-list',
  templateUrl: './kind-list.component.html',
  styleUrls: ['./kind-list.component.css']
})
export class KindListComponent implements OnInit {

  kinds$: Observable<Kind[]>;
  displayedColumns: string[] = ["id", "name", "update", "delete"];

  constructor(private _kindService: KindService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.kinds$ = this._kindService.get();
  }

  delete(kind: Kind) {
    this._kindService.deleteOne(kind.id).subscribe(next => {
      this.loadData();
    })
  }

  openDialogKind(toUpdate: boolean, kind: Kind) {

    const kindFormData: KindRoutingModule = {
      toUpdate: toUpdate,
      kind: kind
    };

    const dialogRef = this.dialog.open(KindFormComponent, {
      data: kindFormData
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadData();
    });
  }

}
