import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { KindComponent } from './kind.component';
import { KindListComponent } from './pages/kind-list/kind-list.component';
import { KindFormComponent } from './pages/kind-form/kind-form.component';

const routes: Routes = [
  {
    path: '', component: KindComponent,
    children: [

      {
        path: '', redirectTo: 'kinds-list', pathMatch: 'full'
      },
      {
        path: 'kinds-list', component: KindListComponent

      },
      {
        path: "kinds-form", component: KindFormComponent
      },
      {
        path: "kinds-form/:id", component: KindFormComponent
      },
      {
        path: '**', component: NotFoundComponent
      }
    ]
  },
  {
    path: '**', component: NotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KindRoutingModule { }
