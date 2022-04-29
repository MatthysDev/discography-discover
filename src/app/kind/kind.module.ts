import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KindComponent } from './kind.component';
import { KindListComponent } from './pages/kind-list/kind-list.component';
import { KindFormComponent } from './pages/kind-form/kind-form.component';
import { KindRoutingModule } from './kind-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [KindComponent, KindListComponent, KindFormComponent],
  imports: [
    CommonModule,
    KindRoutingModule,
    SharedModule,
  ]
})
export class KindModule { }
