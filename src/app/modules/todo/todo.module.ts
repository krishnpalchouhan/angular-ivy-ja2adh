import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import {SharedModule} from "../../shared/shared.module";
import {MaterialModule} from "../../shared/material-module";



@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,SharedModule,MaterialModule
  ]
})
export class TodoModule { }
