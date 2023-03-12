import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ArrayDragComponent } from './components/array-drag/array-drag.component';
import { UseCaseComponent } from './components/use-case/use-case.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayDragComponent,
    UseCaseComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
