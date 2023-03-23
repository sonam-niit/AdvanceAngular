import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table'
import {MatButtonModule} from '@angular/material/button'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,

  ],
  exports:[
    MatTableModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
