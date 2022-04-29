import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { DiskListComponent } from './pages/disk-list/disk-list.component';
import { DiskComponent } from './disk.component';
import { DiskFormComponent } from './pages/disk-form/disk-form.component';

const routes: Routes = [
  {
    path: '',
    component: DiskComponent,
    children: [
      {
        path: '',
        redirectTo: 'disks-list',
        pathMatch: 'full',
      },
      {
        path: 'disks-list',
        component: DiskListComponent,
      },
      {
        path: 'disks-form',
        component: DiskFormComponent,
      },
      {
        path: 'disks-form/:id',
        component: DiskFormComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiskRoutingModule {}
