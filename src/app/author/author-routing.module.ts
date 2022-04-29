import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './author.component';
import { AuthorListComponent } from './pages/author-list/author-list.component';
import { AuthorFormComponent } from './pages/author-form/author-form.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', component: AuthorComponent,
    children: [

      {
        path: '', redirectTo: 'authors-list', pathMatch: 'full'
      },
      {
        path: 'authors-list', component: AuthorListComponent

      },
      {
        path: "authors-form", component: AuthorFormComponent
      },
      {
        path: "authors-form/:id", component: AuthorFormComponent
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
export class AuthorRoutingModule { }
