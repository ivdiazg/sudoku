import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroSudokuComponent } from './cuadro-sudoku.component';

describe('CuadroSudokuComponent', () => {
  let component: CuadroSudokuComponent;
  let fixture: ComponentFixture<CuadroSudokuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadroSudokuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadroSudokuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
