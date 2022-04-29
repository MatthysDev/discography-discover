import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './author.component';
import { SharedModule } from '../shared/shared.module';
import { AuthorRoutingModule } from '../author/author-routing.module';
import { AuthorFormComponent } from './pages/author-form/author-form.component';
import { AuthorListComponent } from './pages/author-list/author-list.component';

@NgModule({
  declarations: [AuthorComponent, AuthorFormComponent, AuthorListComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthorRoutingModule
  ]
})
export class AuthorModule { }
