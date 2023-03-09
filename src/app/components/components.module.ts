import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconAddComponent } from './icons/icon-add/icon-add.component';
import { IconDeleteComponent } from './icons/icon-delete/icon-delete.component';



@NgModule({
  declarations: [
    IconAddComponent,
    IconDeleteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconAddComponent,
    IconDeleteComponent
  ]
})
export class ComponentsModule { }
