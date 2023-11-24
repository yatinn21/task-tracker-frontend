import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { NospaceUppercaseDirective } from './nospace-uppercase.directive';
import { CompleteTaskDialogComponentComponent } from './complete-task-dialog-component/complete-task-dialog-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EntryDialogComponent } from './entry-dialog/entry-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskDetailsComponent,
    NospaceUppercaseDirective,
    CompleteTaskDialogComponentComponent,
    EntryDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    HttpClientModule,
    EditorModule
    
  ],
  providers: [
    {provide: TINYMCE_SCRIPT_SRC, useValue:'tinymce/tinymce.min.js'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
