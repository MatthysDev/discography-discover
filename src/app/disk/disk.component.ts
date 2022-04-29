import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DiskService } from '../core/services/http/disk.service';
import { Disk } from '../core/models/disk';

@Component({
  selector: 'app-student',
  templateUrl: './disk.component.html',
  styleUrls: ['./disk.component.css'],
})
export class DiskComponent implements OnInit {
  disks$: Observable<Disk[]>;

  constructor(private _diskService: DiskService) {}

  ngOnInit(): void {
    this.disks$ = this._diskService.get();
  }
}
