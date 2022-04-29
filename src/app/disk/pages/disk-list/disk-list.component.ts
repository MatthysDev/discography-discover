import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Disk } from 'src/app/core/models/disk';
import { DiskFormData } from 'src/app/core/models/disk-form-data';
import { DiskService } from 'src/app/core/services/http/disk.service';

@Component({
  selector: 'app-disk-list',
  templateUrl: './disk-list.component.html',
  styleUrls: ['./disk-list.component.css'],
})
export class DiskListComponent implements OnInit {
  disks$: Observable<Disk[]>;
  displayedColumns: string[] = [
    'id',
    'title',
    'summary',
    'kind',
    'author',
    'edit',
    'delete',
  ];
  disks = [];
  constructor(
    private _diskService: DiskService,
    private _router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.disks$ = this._diskService.get();
  }

  deleteOne(id) {
    this._diskService.deleteOne(id).subscribe((next) => {
      window.location.reload();
    });
  }

  goToForm() {
    this._router.navigateByUrl('disks/disks-form');
  }

  //new
  update(id) {
    this._router.navigateByUrl('disks/disks-form/' + id);
  }
}
