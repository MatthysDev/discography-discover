import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'disks',
    loadChildren: () => import('./disk/disk.module').then((m) => m.DiskModule),
  },
  {
    path: 'authors',
    loadChildren: () =>
      import('./author/author.module').then((m) => m.AuthorModule),
  },
  {
    path: 'kinds',
    loadChildren: () => import('./kind/kind.module').then((m) => m.KindModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
