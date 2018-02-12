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
      console.log('SUDOKU INICIADO');
    });
    this.cargaSudokuExtreme();
  }

  cargaSudokuFacil() {
    this.casilla13 = 8;
    this.casilla14 = 2;
    this.casilla18 = 6;
    this.casilla19 = 4;
    this.casilla22 = 1;
    this.casilla24 = 8;
    this.casilla26 = 3;
    this.casilla27 = 9;
    this.casilla31 = 4;
    this.casilla33 = 3;
    this.casilla35 = 7;
    this.casilla36 = 6;
    this.casilla38 = 5;
    this.casilla45 = 9;
    this.casilla47 = 4;
    this.casilla48 = 2;
    this.casilla51 = 7;
    this.casilla54 = 5;
    this.casilla56 = 8;
    this.casilla59 = 3;
    this.casilla62 = 8;
    this.casilla63 = 1;
    this.casilla65 = 6;
    this.casilla72 = 3;
    this.casilla74 = 6;
    this.casilla75 = 8;
    this.casilla77 = 5;
    this.casilla79 = 9;
    this.casilla83 = 4;
    this.casilla84 = 1;
    this.casilla86 = 9;
    this.casilla88 = 3;
    this.casilla91 = 5;
    this.casilla92 = 9;
    this.casilla96 = 7;
    this.casilla97 = 1;
  }

  cargaSudokuMedio() {
    this.casilla12 = 3;
    this.casilla14 = 7;
    this.casilla15 = 6;
    this.casilla19 = 1;
    this.casilla21 = 2;
    this.casilla23 = 5;
    this.casilla24 = 9;
    this.casilla27 = 6;
    this.casilla38 = 7;
    this.casilla43 = 3;
    this.casilla45 = 2;
    this.casilla49 = 4;
    this.casilla52 = 5;
    this.casilla54 = 6;
    this.casilla56 = 4;
    this.casilla58 = 3;
    this.casilla61 = 4;
    this.casilla65 = 1;
    this.casilla67 = 7;
    this.casilla72 = 1;
    this.casilla83 = 7;
    this.casilla86 = 2;
    this.casilla87 = 1;
    this.casilla89 = 3;
    this.casilla91 = 9;
    this.casilla95 = 5;
    this.casilla96 = 3;
    this.casilla98 = 2;
  }

  cargaSudokuDificil() {
    this.casilla13 = 8;
    this.casilla14 = 4;
    this.casilla15 = 9;
    this.casilla24 = 1;
    this.casilla27 = 4;
    this.casilla28 = 6;
    this.casilla28 = 8;
    this.casilla32 = 6;
    this.casilla33 = 5;
    this.casilla35 = 3;
    this.casilla42 = 3;
    this.casilla43 = 4;
    this.casilla44 = 9;
    this.casilla52 = 5;
    this.casilla58 = 1;
    this.casilla66 = 1;
    this.casilla67 = 7;
    this.casilla68 = 4;
    this.casilla75 = 8;
    this.casilla77 = 6;
    this.casilla78 = 7;
    this.casilla81 = 5;
    this.casilla82 = 4;
    this.casilla83 = 7;
    this.casilla86 = 9;
    this.casilla95 = 4;
    this.casilla96 = 2;
    this.casilla97 = 1;
  }

  cargaSudokuExtreme() {
    this.casilla12 = 5;
    this.casilla17 = 3;
    this.casilla18 = 6;
    this.casilla23 = 7;
    this.casilla25 = 3;
    this.casilla29 = 9;
    this.casilla32 = 1;
    this.casilla33 = 3;
    this.casilla34 = 9;
    this.casilla35 = 8;
    this.casilla46 = 7;
    this.casilla51 = 7;
    this.casilla54 = 8;
    this.casilla56 = 1;
    this.casilla59 = 3;
    this.casilla64 = 2;
    this.casilla75 = 9;
    this.casilla76 = 4;
    this.casilla77 = 1;
    this.casilla78 = 7;
    this.casilla81 = 2;
    this.casilla85 = 7;
    this.casilla87 = 6;
    this.casilla92 = 7;
    this.casilla93 = 5;
    this.casilla98 = 8;
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
          casilla.indice = this.casillas.length + 1;
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
                  if (col > 3 && col <= 6 && row > 6 && row <= 9) { seccion = 8; } else
                    if (col > 6 && col <= 9 && row > 6 && row <= 9) { seccion = 9; }
    return seccion;
  }

  resolver() {
    this.cargaValoresEnArray();
    this.eliminaProbabilidadesConValor();
    this.eliminaProbabilidadesPorColumna();
    this.eliminaProbabilidadesPorFila();
    this.eliminaProbabilidadesPorSeccion();
    this.eliminaProbabilidadesPorFilaProb();
    this.eliminaProbabilidadesPorColumnaProb();
    this.eliminaProbabilidadesPorSeccionProb();
    this.seteaValoresEnCasilla().then(() => {
      this.cargaValoresEnInputs();
      if (this.faltanValores()) {
        this.resolver();
      }
    });
  }

  faltanValores() {
    const exists = this.casillas.find(x => x.valor === undefined || x.valor === null);
    return exists ? true : false;
  }

  cargaValoresEnInputs() {
    this.casilla11 = this.casillas.find(x => x.columna === 1 && x.fila === 1).valor;
    this.casilla12 = this.casillas.find(x => x.columna === 1 && x.fila === 2).valor;
    this.casilla13 = this.casillas.find(x => x.columna === 1 && x.fila === 3).valor;
    this.casilla14 = this.casillas.find(x => x.columna === 1 && x.fila === 4).valor;
    this.casilla15 = this.casillas.find(x => x.columna === 1 && x.fila === 5).valor;
    this.casilla16 = this.casillas.find(x => x.columna === 1 && x.fila === 6).valor;
    this.casilla17 = this.casillas.find(x => x.columna === 1 && x.fila === 7).valor;
    this.casilla18 = this.casillas.find(x => x.columna === 1 && x.fila === 8).valor;
    this.casilla19 = this.casillas.find(x => x.columna === 1 && x.fila === 9).valor;
    this.casilla21 = this.casillas.find(x => x.columna === 2 && x.fila === 1).valor;
    this.casilla22 = this.casillas.find(x => x.columna === 2 && x.fila === 2).valor;
    this.casilla23 = this.casillas.find(x => x.columna === 2 && x.fila === 3).valor;
    this.casilla24 = this.casillas.find(x => x.columna === 2 && x.fila === 4).valor;
    this.casilla25 = this.casillas.find(x => x.columna === 2 && x.fila === 5).valor;
    this.casilla26 = this.casillas.find(x => x.columna === 2 && x.fila === 6).valor;
    this.casilla27 = this.casillas.find(x => x.columna === 2 && x.fila === 7).valor;
    this.casilla28 = this.casillas.find(x => x.columna === 2 && x.fila === 8).valor;
    this.casilla29 = this.casillas.find(x => x.columna === 2 && x.fila === 9).valor;
    this.casilla31 = this.casillas.find(x => x.columna === 3 && x.fila === 1).valor;
    this.casilla32 = this.casillas.find(x => x.columna === 3 && x.fila === 2).valor;
    this.casilla33 = this.casillas.find(x => x.columna === 3 && x.fila === 3).valor;
    this.casilla34 = this.casillas.find(x => x.columna === 3 && x.fila === 4).valor;
    this.casilla35 = this.casillas.find(x => x.columna === 3 && x.fila === 5).valor;
    this.casilla36 = this.casillas.find(x => x.columna === 3 && x.fila === 6).valor;
    this.casilla37 = this.casillas.find(x => x.columna === 3 && x.fila === 7).valor;
    this.casilla38 = this.casillas.find(x => x.columna === 3 && x.fila === 8).valor;
    this.casilla39 = this.casillas.find(x => x.columna === 3 && x.fila === 9).valor;
    this.casilla41 = this.casillas.find(x => x.columna === 4 && x.fila === 1).valor;
    this.casilla42 = this.casillas.find(x => x.columna === 4 && x.fila === 2).valor;
    this.casilla43 = this.casillas.find(x => x.columna === 4 && x.fila === 3).valor;
    this.casilla44 = this.casillas.find(x => x.columna === 4 && x.fila === 4).valor;
    this.casilla45 = this.casillas.find(x => x.columna === 4 && x.fila === 5).valor;
    this.casilla46 = this.casillas.find(x => x.columna === 4 && x.fila === 6).valor;
    this.casilla47 = this.casillas.find(x => x.columna === 4 && x.fila === 7).valor;
    this.casilla48 = this.casillas.find(x => x.columna === 4 && x.fila === 8).valor;
    this.casilla49 = this.casillas.find(x => x.columna === 4 && x.fila === 9).valor;
    this.casilla51 = this.casillas.find(x => x.columna === 5 && x.fila === 1).valor;
    this.casilla52 = this.casillas.find(x => x.columna === 5 && x.fila === 2).valor;
    this.casilla53 = this.casillas.find(x => x.columna === 5 && x.fila === 3).valor;
    this.casilla54 = this.casillas.find(x => x.columna === 5 && x.fila === 4).valor;
    this.casilla55 = this.casillas.find(x => x.columna === 5 && x.fila === 5).valor;
    this.casilla56 = this.casillas.find(x => x.columna === 5 && x.fila === 6).valor;
    this.casilla57 = this.casillas.find(x => x.columna === 5 && x.fila === 7).valor;
    this.casilla58 = this.casillas.find(x => x.columna === 5 && x.fila === 8).valor;
    this.casilla59 = this.casillas.find(x => x.columna === 5 && x.fila === 9).valor;
    this.casilla61 = this.casillas.find(x => x.columna === 6 && x.fila === 1).valor;
    this.casilla62 = this.casillas.find(x => x.columna === 6 && x.fila === 2).valor;
    this.casilla63 = this.casillas.find(x => x.columna === 6 && x.fila === 3).valor;
    this.casilla64 = this.casillas.find(x => x.columna === 6 && x.fila === 4).valor;
    this.casilla65 = this.casillas.find(x => x.columna === 6 && x.fila === 5).valor;
    this.casilla66 = this.casillas.find(x => x.columna === 6 && x.fila === 6).valor;
    this.casilla67 = this.casillas.find(x => x.columna === 6 && x.fila === 7).valor;
    this.casilla68 = this.casillas.find(x => x.columna === 6 && x.fila === 8).valor;
    this.casilla69 = this.casillas.find(x => x.columna === 6 && x.fila === 9).valor;
    this.casilla71 = this.casillas.find(x => x.columna === 7 && x.fila === 1).valor;
    this.casilla72 = this.casillas.find(x => x.columna === 7 && x.fila === 2).valor;
    this.casilla73 = this.casillas.find(x => x.columna === 7 && x.fila === 3).valor;
    this.casilla74 = this.casillas.find(x => x.columna === 7 && x.fila === 4).valor;
    this.casilla75 = this.casillas.find(x => x.columna === 7 && x.fila === 5).valor;
    this.casilla76 = this.casillas.find(x => x.columna === 7 && x.fila === 6).valor;
    this.casilla77 = this.casillas.find(x => x.columna === 7 && x.fila === 7).valor;
    this.casilla78 = this.casillas.find(x => x.columna === 7 && x.fila === 8).valor;
    this.casilla79 = this.casillas.find(x => x.columna === 7 && x.fila === 9).valor;
    this.casilla81 = this.casillas.find(x => x.columna === 8 && x.fila === 1).valor;
    this.casilla82 = this.casillas.find(x => x.columna === 8 && x.fila === 2).valor;
    this.casilla83 = this.casillas.find(x => x.columna === 8 && x.fila === 3).valor;
    this.casilla84 = this.casillas.find(x => x.columna === 8 && x.fila === 4).valor;
    this.casilla85 = this.casillas.find(x => x.columna === 8 && x.fila === 5).valor;
    this.casilla86 = this.casillas.find(x => x.columna === 8 && x.fila === 6).valor;
    this.casilla87 = this.casillas.find(x => x.columna === 8 && x.fila === 7).valor;
    this.casilla88 = this.casillas.find(x => x.columna === 8 && x.fila === 8).valor;
    this.casilla89 = this.casillas.find(x => x.columna === 8 && x.fila === 9).valor;
    this.casilla91 = this.casillas.find(x => x.columna === 9 && x.fila === 1).valor;
    this.casilla92 = this.casillas.find(x => x.columna === 9 && x.fila === 2).valor;
    this.casilla93 = this.casillas.find(x => x.columna === 9 && x.fila === 3).valor;
    this.casilla94 = this.casillas.find(x => x.columna === 9 && x.fila === 4).valor;
    this.casilla95 = this.casillas.find(x => x.columna === 9 && x.fila === 5).valor;
    this.casilla96 = this.casillas.find(x => x.columna === 9 && x.fila === 6).valor;
    this.casilla97 = this.casillas.find(x => x.columna === 9 && x.fila === 7).valor;
    this.casilla98 = this.casillas.find(x => x.columna === 9 && x.fila === 8).valor;
    this.casilla99 = this.casillas.find(x => x.columna === 9 && x.fila === 9).valor;
  }

  cargaValoresEnArray() {
    this.casillas.find(x => x.columna === 1 && x.fila === 1).valor = this.casilla11;
    this.casillas.find(x => x.columna === 1 && x.fila === 2).valor = this.casilla12;
    this.casillas.find(x => x.columna === 1 && x.fila === 3).valor = this.casilla13;
    this.casillas.find(x => x.columna === 1 && x.fila === 4).valor = this.casilla14;
    this.casillas.find(x => x.columna === 1 && x.fila === 5).valor = this.casilla15;
    this.casillas.find(x => x.columna === 1 && x.fila === 6).valor = this.casilla16;
    this.casillas.find(x => x.columna === 1 && x.fila === 7).valor = this.casilla17;
    this.casillas.find(x => x.columna === 1 && x.fila === 8).valor = this.casilla18;
    this.casillas.find(x => x.columna === 1 && x.fila === 9).valor = this.casilla19;
    this.casillas.find(x => x.columna === 2 && x.fila === 1).valor = this.casilla21;
    this.casillas.find(x => x.columna === 2 && x.fila === 2).valor = this.casilla22;
    this.casillas.find(x => x.columna === 2 && x.fila === 3).valor = this.casilla23;
    this.casillas.find(x => x.columna === 2 && x.fila === 4).valor = this.casilla24;
    this.casillas.find(x => x.columna === 2 && x.fila === 5).valor = this.casilla25;
    this.casillas.find(x => x.columna === 2 && x.fila === 6).valor = this.casilla26;
    this.casillas.find(x => x.columna === 2 && x.fila === 7).valor = this.casilla27;
    this.casillas.find(x => x.columna === 2 && x.fila === 8).valor = this.casilla28;
    this.casillas.find(x => x.columna === 2 && x.fila === 9).valor = this.casilla29;
    this.casillas.find(x => x.columna === 3 && x.fila === 1).valor = this.casilla31;
    this.casillas.find(x => x.columna === 3 && x.fila === 2).valor = this.casilla32;
    this.casillas.find(x => x.columna === 3 && x.fila === 3).valor = this.casilla33;
    this.casillas.find(x => x.columna === 3 && x.fila === 4).valor = this.casilla34;
    this.casillas.find(x => x.columna === 3 && x.fila === 5).valor = this.casilla35;
    this.casillas.find(x => x.columna === 3 && x.fila === 6).valor = this.casilla36;
    this.casillas.find(x => x.columna === 3 && x.fila === 7).valor = this.casilla37;
    this.casillas.find(x => x.columna === 3 && x.fila === 8).valor = this.casilla38;
    this.casillas.find(x => x.columna === 3 && x.fila === 9).valor = this.casilla39;
    this.casillas.find(x => x.columna === 4 && x.fila === 1).valor = this.casilla41;
    this.casillas.find(x => x.columna === 4 && x.fila === 2).valor = this.casilla42;
    this.casillas.find(x => x.columna === 4 && x.fila === 3).valor = this.casilla43;
    this.casillas.find(x => x.columna === 4 && x.fila === 4).valor = this.casilla44;
    this.casillas.find(x => x.columna === 4 && x.fila === 5).valor = this.casilla45;
    this.casillas.find(x => x.columna === 4 && x.fila === 6).valor = this.casilla46;
    this.casillas.find(x => x.columna === 4 && x.fila === 7).valor = this.casilla47;
    this.casillas.find(x => x.columna === 4 && x.fila === 8).valor = this.casilla48;
    this.casillas.find(x => x.columna === 4 && x.fila === 9).valor = this.casilla49;
    this.casillas.find(x => x.columna === 5 && x.fila === 1).valor = this.casilla51;
    this.casillas.find(x => x.columna === 5 && x.fila === 2).valor = this.casilla52;
    this.casillas.find(x => x.columna === 5 && x.fila === 3).valor = this.casilla53;
    this.casillas.find(x => x.columna === 5 && x.fila === 4).valor = this.casilla54;
    this.casillas.find(x => x.columna === 5 && x.fila === 5).valor = this.casilla55;
    this.casillas.find(x => x.columna === 5 && x.fila === 6).valor = this.casilla56;
    this.casillas.find(x => x.columna === 5 && x.fila === 7).valor = this.casilla57;
    this.casillas.find(x => x.columna === 5 && x.fila === 8).valor = this.casilla58;
    this.casillas.find(x => x.columna === 5 && x.fila === 9).valor = this.casilla59;
    this.casillas.find(x => x.columna === 6 && x.fila === 1).valor = this.casilla61;
    this.casillas.find(x => x.columna === 6 && x.fila === 2).valor = this.casilla62;
    this.casillas.find(x => x.columna === 6 && x.fila === 3).valor = this.casilla63;
    this.casillas.find(x => x.columna === 6 && x.fila === 4).valor = this.casilla64;
    this.casillas.find(x => x.columna === 6 && x.fila === 5).valor = this.casilla65;
    this.casillas.find(x => x.columna === 6 && x.fila === 6).valor = this.casilla66;
    this.casillas.find(x => x.columna === 6 && x.fila === 7).valor = this.casilla67;
    this.casillas.find(x => x.columna === 6 && x.fila === 8).valor = this.casilla68;
    this.casillas.find(x => x.columna === 6 && x.fila === 9).valor = this.casilla69;
    this.casillas.find(x => x.columna === 7 && x.fila === 1).valor = this.casilla71;
    this.casillas.find(x => x.columna === 7 && x.fila === 2).valor = this.casilla72;
    this.casillas.find(x => x.columna === 7 && x.fila === 3).valor = this.casilla73;
    this.casillas.find(x => x.columna === 7 && x.fila === 4).valor = this.casilla74;
    this.casillas.find(x => x.columna === 7 && x.fila === 5).valor = this.casilla75;
    this.casillas.find(x => x.columna === 7 && x.fila === 6).valor = this.casilla76;
    this.casillas.find(x => x.columna === 7 && x.fila === 7).valor = this.casilla77;
    this.casillas.find(x => x.columna === 7 && x.fila === 8).valor = this.casilla78;
    this.casillas.find(x => x.columna === 7 && x.fila === 9).valor = this.casilla79;
    this.casillas.find(x => x.columna === 8 && x.fila === 1).valor = this.casilla81;
    this.casillas.find(x => x.columna === 8 && x.fila === 2).valor = this.casilla82;
    this.casillas.find(x => x.columna === 8 && x.fila === 3).valor = this.casilla83;
    this.casillas.find(x => x.columna === 8 && x.fila === 4).valor = this.casilla84;
    this.casillas.find(x => x.columna === 8 && x.fila === 5).valor = this.casilla85;
    this.casillas.find(x => x.columna === 8 && x.fila === 6).valor = this.casilla86;
    this.casillas.find(x => x.columna === 8 && x.fila === 7).valor = this.casilla87;
    this.casillas.find(x => x.columna === 8 && x.fila === 8).valor = this.casilla88;
    this.casillas.find(x => x.columna === 8 && x.fila === 9).valor = this.casilla89;
    this.casillas.find(x => x.columna === 9 && x.fila === 1).valor = this.casilla91;
    this.casillas.find(x => x.columna === 9 && x.fila === 2).valor = this.casilla92;
    this.casillas.find(x => x.columna === 9 && x.fila === 3).valor = this.casilla93;
    this.casillas.find(x => x.columna === 9 && x.fila === 4).valor = this.casilla94;
    this.casillas.find(x => x.columna === 9 && x.fila === 5).valor = this.casilla95;
    this.casillas.find(x => x.columna === 9 && x.fila === 6).valor = this.casilla96;
    this.casillas.find(x => x.columna === 9 && x.fila === 7).valor = this.casilla97;
    this.casillas.find(x => x.columna === 9 && x.fila === 8).valor = this.casilla98;
    this.casillas.find(x => x.columna === 9 && x.fila === 9).valor = this.casilla99;
  }

  eliminaProbabilidadesPorColumna() {
    for (let col = 1; col < 10; col++) {
      const casillasCol = this.casillas.filter(x => x.columna === col);
      for (let i = 0; i < casillasCol.length; i++) {
        if (casillasCol[i].valor) {
          const valorEliminar = casillasCol[i].valor;
          for (let row = 0; row < 9; row++) {
            if (casillasCol[i].indice !== casillasCol[row].indice) {
              const index = this.casillas.filter(x => x.columna === col)[row].probabilidades.indexOf(valorEliminar);
              if (index !== -1) { this.casillas.filter(x => x.columna === col)[row].probabilidades.splice(index, 1); }
            }
          }
        }
      }
    }
  }

  eliminaProbabilidadesPorFila() {
    for (let row = 1; row < 10; row++) {
      const casillasRow = this.casillas.filter(x => x.fila === row);
      for (let i = 0; i < casillasRow.length; i++) {
        if (casillasRow[i].valor) {
          const valorEliminar = casillasRow[i].valor;
          for (let col = 0; col < 9; col++) {
            if (casillasRow[i].indice !== casillasRow[col].indice) {
              const index = this.casillas.filter(x => x.fila === row)[col].probabilidades.indexOf(valorEliminar);
              if (index !== -1) { this.casillas.filter(x => x.fila === row)[col].probabilidades.splice(index, 1); }
            }
          }
        }
      }
    }
  }

  eliminaProbabilidadesPorSeccion() {
    for (let box = 1; box < 10; box++) {
      const casillasBox = this.casillas.filter(x => x.seccion === box);
      for (let i = 0; i < casillasBox.length; i++) {
        if (casillasBox[i].valor) {
          const valorEliminar = casillasBox[i].valor;
          for (let j = 0; j < 9; j++) {
            if (casillasBox[i].indice !== casillasBox[j].indice) {
              const index = this.casillas.filter(x => x.seccion === box)[j].probabilidades.indexOf(valorEliminar);
              if (index !== -1) { this.casillas.filter(x => x.seccion === box)[j].probabilidades.splice(index, 1); }
            }
          }
        }
      }
    }
  }

  seteaValoresEnCasilla() {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < 81; i++) {
        if (this.casillas[i].probabilidades.length === 1) {
          this.casillas[i].valor = this.casillas[i].probabilidades[0];
        }
      }
      resolve();
    });
  }

  eliminaProbabilidadesConValor() {
    if (this.casilla11) { this.casillas.find(x => x.columna === 1 && x.fila === 1).probabilidades = [this.casilla11]; }
    if (this.casilla12) { this.casillas.find(x => x.columna === 1 && x.fila === 2).probabilidades = [this.casilla12]; }
    if (this.casilla13) { this.casillas.find(x => x.columna === 1 && x.fila === 3).probabilidades = [this.casilla13]; }
    if (this.casilla14) { this.casillas.find(x => x.columna === 1 && x.fila === 4).probabilidades = [this.casilla14]; }
    if (this.casilla15) { this.casillas.find(x => x.columna === 1 && x.fila === 5).probabilidades = [this.casilla15]; }
    if (this.casilla16) { this.casillas.find(x => x.columna === 1 && x.fila === 6).probabilidades = [this.casilla16]; }
    if (this.casilla17) { this.casillas.find(x => x.columna === 1 && x.fila === 7).probabilidades = [this.casilla17]; }
    if (this.casilla18) { this.casillas.find(x => x.columna === 1 && x.fila === 8).probabilidades = [this.casilla18]; }
    if (this.casilla19) { this.casillas.find(x => x.columna === 1 && x.fila === 9).probabilidades = [this.casilla19]; }
    if (this.casilla21) { this.casillas.find(x => x.columna === 2 && x.fila === 1).probabilidades = [this.casilla21]; }
    if (this.casilla22) { this.casillas.find(x => x.columna === 2 && x.fila === 2).probabilidades = [this.casilla22]; }
    if (this.casilla23) { this.casillas.find(x => x.columna === 2 && x.fila === 3).probabilidades = [this.casilla23]; }
    if (this.casilla24) { this.casillas.find(x => x.columna === 2 && x.fila === 4).probabilidades = [this.casilla24]; }
    if (this.casilla25) { this.casillas.find(x => x.columna === 2 && x.fila === 5).probabilidades = [this.casilla25]; }
    if (this.casilla26) { this.casillas.find(x => x.columna === 2 && x.fila === 6).probabilidades = [this.casilla26]; }
    if (this.casilla27) { this.casillas.find(x => x.columna === 2 && x.fila === 7).probabilidades = [this.casilla27]; }
    if (this.casilla28) { this.casillas.find(x => x.columna === 2 && x.fila === 8).probabilidades = [this.casilla28]; }
    if (this.casilla29) { this.casillas.find(x => x.columna === 2 && x.fila === 9).probabilidades = [this.casilla29]; }
    if (this.casilla31) { this.casillas.find(x => x.columna === 3 && x.fila === 1).probabilidades = [this.casilla31]; }
    if (this.casilla32) { this.casillas.find(x => x.columna === 3 && x.fila === 2).probabilidades = [this.casilla32]; }
    if (this.casilla33) { this.casillas.find(x => x.columna === 3 && x.fila === 3).probabilidades = [this.casilla33]; }
    if (this.casilla34) { this.casillas.find(x => x.columna === 3 && x.fila === 4).probabilidades = [this.casilla34]; }
    if (this.casilla35) { this.casillas.find(x => x.columna === 3 && x.fila === 5).probabilidades = [this.casilla35]; }
    if (this.casilla36) { this.casillas.find(x => x.columna === 3 && x.fila === 6).probabilidades = [this.casilla36]; }
    if (this.casilla37) { this.casillas.find(x => x.columna === 3 && x.fila === 7).probabilidades = [this.casilla37]; }
    if (this.casilla38) { this.casillas.find(x => x.columna === 3 && x.fila === 8).probabilidades = [this.casilla38]; }
    if (this.casilla39) { this.casillas.find(x => x.columna === 3 && x.fila === 9).probabilidades = [this.casilla39]; }
    if (this.casilla41) { this.casillas.find(x => x.columna === 4 && x.fila === 1).probabilidades = [this.casilla41]; }
    if (this.casilla42) { this.casillas.find(x => x.columna === 4 && x.fila === 2).probabilidades = [this.casilla42]; }
    if (this.casilla43) { this.casillas.find(x => x.columna === 4 && x.fila === 3).probabilidades = [this.casilla43]; }
    if (this.casilla44) { this.casillas.find(x => x.columna === 4 && x.fila === 4).probabilidades = [this.casilla44]; }
    if (this.casilla45) { this.casillas.find(x => x.columna === 4 && x.fila === 5).probabilidades = [this.casilla45]; }
    if (this.casilla46) { this.casillas.find(x => x.columna === 4 && x.fila === 6).probabilidades = [this.casilla46]; }
    if (this.casilla47) { this.casillas.find(x => x.columna === 4 && x.fila === 7).probabilidades = [this.casilla47]; }
    if (this.casilla48) { this.casillas.find(x => x.columna === 4 && x.fila === 8).probabilidades = [this.casilla48]; }
    if (this.casilla49) { this.casillas.find(x => x.columna === 4 && x.fila === 9).probabilidades = [this.casilla49]; }
    if (this.casilla51) { this.casillas.find(x => x.columna === 5 && x.fila === 1).probabilidades = [this.casilla51]; }
    if (this.casilla52) { this.casillas.find(x => x.columna === 5 && x.fila === 2).probabilidades = [this.casilla52]; }
    if (this.casilla53) { this.casillas.find(x => x.columna === 5 && x.fila === 3).probabilidades = [this.casilla53]; }
    if (this.casilla54) { this.casillas.find(x => x.columna === 5 && x.fila === 4).probabilidades = [this.casilla54]; }
    if (this.casilla55) { this.casillas.find(x => x.columna === 5 && x.fila === 5).probabilidades = [this.casilla55]; }
    if (this.casilla56) { this.casillas.find(x => x.columna === 5 && x.fila === 6).probabilidades = [this.casilla56]; }
    if (this.casilla57) { this.casillas.find(x => x.columna === 5 && x.fila === 7).probabilidades = [this.casilla57]; }
    if (this.casilla58) { this.casillas.find(x => x.columna === 5 && x.fila === 8).probabilidades = [this.casilla58]; }
    if (this.casilla59) { this.casillas.find(x => x.columna === 5 && x.fila === 9).probabilidades = [this.casilla59]; }
    if (this.casilla61) { this.casillas.find(x => x.columna === 6 && x.fila === 1).probabilidades = [this.casilla61]; }
    if (this.casilla62) { this.casillas.find(x => x.columna === 6 && x.fila === 2).probabilidades = [this.casilla62]; }
    if (this.casilla63) { this.casillas.find(x => x.columna === 6 && x.fila === 3).probabilidades = [this.casilla63]; }
    if (this.casilla64) { this.casillas.find(x => x.columna === 6 && x.fila === 4).probabilidades = [this.casilla64]; }
    if (this.casilla65) { this.casillas.find(x => x.columna === 6 && x.fila === 5).probabilidades = [this.casilla65]; }
    if (this.casilla66) { this.casillas.find(x => x.columna === 6 && x.fila === 6).probabilidades = [this.casilla66]; }
    if (this.casilla67) { this.casillas.find(x => x.columna === 6 && x.fila === 7).probabilidades = [this.casilla67]; }
    if (this.casilla68) { this.casillas.find(x => x.columna === 6 && x.fila === 8).probabilidades = [this.casilla68]; }
    if (this.casilla69) { this.casillas.find(x => x.columna === 6 && x.fila === 9).probabilidades = [this.casilla69]; }
    if (this.casilla71) { this.casillas.find(x => x.columna === 7 && x.fila === 1).probabilidades = [this.casilla71]; }
    if (this.casilla72) { this.casillas.find(x => x.columna === 7 && x.fila === 2).probabilidades = [this.casilla72]; }
    if (this.casilla73) { this.casillas.find(x => x.columna === 7 && x.fila === 3).probabilidades = [this.casilla73]; }
    if (this.casilla74) { this.casillas.find(x => x.columna === 7 && x.fila === 4).probabilidades = [this.casilla74]; }
    if (this.casilla75) { this.casillas.find(x => x.columna === 7 && x.fila === 5).probabilidades = [this.casilla75]; }
    if (this.casilla76) { this.casillas.find(x => x.columna === 7 && x.fila === 6).probabilidades = [this.casilla76]; }
    if (this.casilla77) { this.casillas.find(x => x.columna === 7 && x.fila === 7).probabilidades = [this.casilla77]; }
    if (this.casilla78) { this.casillas.find(x => x.columna === 7 && x.fila === 8).probabilidades = [this.casilla78]; }
    if (this.casilla79) { this.casillas.find(x => x.columna === 7 && x.fila === 9).probabilidades = [this.casilla79]; }
    if (this.casilla81) { this.casillas.find(x => x.columna === 8 && x.fila === 1).probabilidades = [this.casilla81]; }
    if (this.casilla82) { this.casillas.find(x => x.columna === 8 && x.fila === 2).probabilidades = [this.casilla82]; }
    if (this.casilla83) { this.casillas.find(x => x.columna === 8 && x.fila === 3).probabilidades = [this.casilla83]; }
    if (this.casilla84) { this.casillas.find(x => x.columna === 8 && x.fila === 4).probabilidades = [this.casilla84]; }
    if (this.casilla85) { this.casillas.find(x => x.columna === 8 && x.fila === 5).probabilidades = [this.casilla85]; }
    if (this.casilla86) { this.casillas.find(x => x.columna === 8 && x.fila === 6).probabilidades = [this.casilla86]; }
    if (this.casilla87) { this.casillas.find(x => x.columna === 8 && x.fila === 7).probabilidades = [this.casilla87]; }
    if (this.casilla88) { this.casillas.find(x => x.columna === 8 && x.fila === 8).probabilidades = [this.casilla88]; }
    if (this.casilla89) { this.casillas.find(x => x.columna === 8 && x.fila === 9).probabilidades = [this.casilla89]; }
    if (this.casilla91) { this.casillas.find(x => x.columna === 9 && x.fila === 1).probabilidades = [this.casilla91]; }
    if (this.casilla92) { this.casillas.find(x => x.columna === 9 && x.fila === 2).probabilidades = [this.casilla92]; }
    if (this.casilla93) { this.casillas.find(x => x.columna === 9 && x.fila === 3).probabilidades = [this.casilla93]; }
    if (this.casilla94) { this.casillas.find(x => x.columna === 9 && x.fila === 4).probabilidades = [this.casilla94]; }
    if (this.casilla95) { this.casillas.find(x => x.columna === 9 && x.fila === 5).probabilidades = [this.casilla95]; }
    if (this.casilla96) { this.casillas.find(x => x.columna === 9 && x.fila === 6).probabilidades = [this.casilla96]; }
    if (this.casilla97) { this.casillas.find(x => x.columna === 9 && x.fila === 7).probabilidades = [this.casilla97]; }
    if (this.casilla98) { this.casillas.find(x => x.columna === 9 && x.fila === 8).probabilidades = [this.casilla98]; }
    if (this.casilla99) { this.casillas.find(x => x.columna === 9 && x.fila === 9).probabilidades = [this.casilla99]; }
  }

  eliminaProbabilidadesPorFilaProb() {
    for (let row = 1; row < 10; row++) {
      const casillasRow = this.casillas.filter(x => x.fila === row);
      // recorro las casillas de la fila
      for (let i = 0; i < casillasRow.length; i++) {
        // recorro las probabilidades de la casilla i
        for (let j = 0; j < casillasRow[i].probabilidades.length; j++) {
          // guardo el valor a buscar
          const valorBuscar = casillasRow[i].probabilidades[j];
          let flag = false;
          // recorro nuevamente las casillas de la fila
          for (let k = 0; k < casillasRow.length; k++) {
            // valido si no es la misma casilla
            if (casillasRow[i].indice !== casillasRow[k].indice) {
              // recorro las probabilidades de la casilla a comparar
              const exists = casillasRow[k].probabilidades.indexOf(valorBuscar);
              if (exists !== -1) { flag = true; break; }
            }
          }
          if (!flag) {
            this.casillas.find(x => x.indice === casillasRow[i].indice).valor = valorBuscar;
          }
        }

        if (casillasRow[i].valor) {
          const valorEliminar = casillasRow[i].valor;
          for (let col = 0; col < 9; col++) {
            if (casillasRow[i].indice !== casillasRow[col].indice) {
              const index = this.casillas.filter(x => x.fila === row)[col].probabilidades.indexOf(valorEliminar);
              if (index !== -1) { this.casillas.filter(x => x.fila === row)[col].probabilidades.splice(index, 1); }
            }
          }
        }
      }
    }
  }

  eliminaProbabilidadesPorColumnaProb() {
    for (let col = 1; col < 10; col++) {
      const casillasCol = this.casillas.filter(x => x.columna === col);
      // recorro las casillas de la fila
      for (let i = 0; i < casillasCol.length; i++) {
        // recorro las probabilidades de la casilla i
        for (let j = 0; j < casillasCol[i].probabilidades.length; j++) {
          // guardo el valor a buscar
          const valorBuscar = casillasCol[i].probabilidades[j];
          let flag = false;
          // recorro nuevamente las casillas de la fila
          for (let k = 0; k < casillasCol.length; k++) {
            // valido si no es la misma casilla
            if (casillasCol[i].indice !== casillasCol[k].indice) {
              // recorro las probabilidades de la casilla a comparar
              const exists = casillasCol[k].probabilidades.indexOf(valorBuscar);
              if (exists !== -1) { flag = true; break; }
            }
          }
          if (!flag) {
            this.casillas.find(x => x.indice === casillasCol[i].indice).valor = valorBuscar;
          }
        }

        if (casillasCol[i].valor) {
          const valorEliminar = casillasCol[i].valor;
          for (let row = 0; row < 9; row++) {
            if (casillasCol[i].indice !== casillasCol[row].indice) {
              const index = this.casillas.filter(x => x.columna === col)[row].probabilidades.indexOf(valorEliminar);
              if (index !== -1) { this.casillas.filter(x => x.columna === col)[row].probabilidades.splice(index, 1); }
            }
          }
        }
      }
    }
  }

  eliminaProbabilidadesPorSeccionProb() {
    for (let box = 1; box < 10; box++) {
      const casillasBox = this.casillas.filter(x => x.seccion === box);
      // recorro las casillas de la fila
      for (let i = 0; i < casillasBox.length; i++) {
        // recorro las probabilidades de la casilla i
        for (let j = 0; j < casillasBox[i].probabilidades.length; j++) {
          // guardo el valor a buscar
          const valorBuscar = casillasBox[i].probabilidades[j];
          let flag = false;
          // recorro nuevamente las casillas de la fila
          for (let k = 0; k < casillasBox.length; k++) {
            // valido si no es la misma casilla
            if (casillasBox[i].indice !== casillasBox[k].indice) {
              // recorro las probabilidades de la casilla a comparar
              const exists = casillasBox[k].probabilidades.indexOf(valorBuscar);
              if (exists !== -1) { flag = true; break; }
            }
          }
          if (!flag) {
            this.casillas.find(x => x.indice === casillasBox[i].indice).valor = valorBuscar;
          }
        }

        if (casillasBox[i].valor) {
          const valorEliminar = casillasBox[i].valor;
          for (let j = 0; j < 9; j++) {
            if (casillasBox[i].indice !== casillasBox[j].indice) {
              const index = this.casillas.filter(x => x.seccion === box)[j].probabilidades.indexOf(valorEliminar);
              if (index !== -1) { this.casillas.filter(x => x.seccion === box)[j].probabilidades.splice(index, 1); }
            }
          }
        }
      }
    }
  }

}
