import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CuadroSudokuComponent } from './cuadro-sudoku/cuadro-sudoku.component';


@NgModule({
  declarations: [
    AppComponent,
    CuadroSudokuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
