import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiskComponent } from './disk.component';
import { SharedModule } from '../shared/shared.module';
import { DiskListComponent } from './pages/disk-list/disk-list.component';
import { DiskRoutingModule } from './disk-routing.module';
import { DiskFormComponent } from './pages/disk-form/disk-form.component';

@NgModule({
  declarations: [DiskListComponent, DiskComponent, DiskFormComponent],
  imports: [CommonModule, SharedModule, DiskRoutingModule],
})
export class DiskModule {}
