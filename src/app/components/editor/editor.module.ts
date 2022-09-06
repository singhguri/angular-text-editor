import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { EditorComponent } from './editor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    AngularEditorModule,
    FormsModule,
    HttpClientModule
  ]
})
export class EditorModule { }
