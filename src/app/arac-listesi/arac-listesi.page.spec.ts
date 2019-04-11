import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AracListesiPage } from './arac-listesi.page';

describe('AracListesiPage', () => {
  let component: AracListesiPage;
  let fixture: ComponentFixture<AracListesiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AracListesiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AracListesiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
