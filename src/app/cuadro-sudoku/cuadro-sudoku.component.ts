import { Component, OnInit } from '@angular/core';
import { CasillaModel } from '../model/casilla.model';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-cuadro-sudoku',
  templateUrl: './cuadro-sudoku.component.html',
  styleUrls: ['./cuadro-sudoku.component.css']
})
export class CuadroSudokuComponent implements OnInit {

  casillas: CasillaModel[];
  //#region
  casilla11: number; casilla12: number; casilla13: number; casilla14: number; casilla15: number;
  casilla16: number; casilla17: number; casilla18: number; casilla19: number;
  casilla21: number; casilla22: number; casilla23: number; casilla24: number; casilla25: number;
  casilla26: number; casilla27: number; casilla28: number; casilla29: number;
  casilla31: number; casilla32: number; casilla33: number; casilla34: number; casilla35: number;
  casilla36: number; casilla37: number; casilla38: number; casilla39: number;
  casilla41: number; casilla42: number; casilla43: number; casilla44: number; casilla45: number;
  casilla46: number; casilla47: number; casilla48: number; casilla49: number;
  casilla51: number; casilla52: number; casilla53: number; casilla54: number; casilla55: number;
  casilla56: number; casilla57: number; casilla58: number; casilla59: number;
  casilla61: number; casilla62: number; casilla63: number; casilla64: number; casilla65: number;
  casilla66: number; casilla67: number; casilla68: number; casilla69: number;
  casilla71: number; casilla72: number; casilla73: number; casilla74: number; casilla75: number;
  casilla76: number; casilla77: number; casilla78: number; casilla79: number;
  casilla81: number; casilla82: number; casilla83: number; casilla84: number; casilla85: number;
  casilla86: number; casilla87: number; casilla88: number; casilla89: number;
  casilla91: number; casilla92: number; casilla93: number; casilla94: number; casilla95: number;
  casilla96: number; casilla97: number; casilla98: number; casilla99: number;
  //#endregion

  constructor() { }

  ngOnInit() {
    this.casillas = [];
    this.iniciaSudoku().then(() => {
      console.log(this.casillas.filter(x => x.seccion === 4));
    });
    this.casilla41 = 4.1;
  }

  iniciaSudoku() {
    return new Promise((resolve, reject) => {
      // columna
      for (let col = 1; col < 10; col++) {
        // fila
        for (let row = 1; row < 10; row++) {
          const casilla = new CasillaModel;
          const seccion = this.asignaSeccion(col, row);
          casilla.valor = null;
          casilla.columna = col;
          casilla.fila = row;
          casilla.seccion = seccion;
          casilla.probabilidades = [1, 2, 3, 4, 5, 6, 7, 8, 9];
          this.casillas.push(casilla);
        }
      }
      resolve();
    });
  }

  asignaSeccion(col: number, row: number) {
    let seccion: number = null;
    if (col <= 3 && row <= 3) { seccion = 1; } else
      if (col > 3 && col <= 6 && row <= 3) { seccion = 2; } else
        if (col > 6 && col <= 9 && row <= 3) { seccion = 3; } else
          if (col <= 3 && row > 3 && row <= 6) { seccion = 4; } else
            if (col > 3 && col <= 6 && row > 3 && row <= 6) { seccion = 5; } else
              if (col > 6 && col <= 9 && row > 3 && row <= 6) { seccion = 6; } else
                if (col <= 3 && row > 6 && row <= 9) { seccion = 7; } else
                  if (col > 3 && col <= 6 && row > 6 && row <= 9) { seccion = 7; } else
                    if (col > 6 && col <= 9 && row > 6 && row <= 9) { seccion = 7; }
    return seccion;
  }

  resolver() {
    console.log(this.casilla11);
  }

  cargaValoresEnArray() {

  }

}
