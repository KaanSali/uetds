import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AracBilgileriPage } from './arac-bilgileri.page';

describe('AracBilgileriPage', () => {
  let component: AracBilgileriPage;
  let fixture: ComponentFixture<AracBilgileriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AracBilgileriPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AracBilgileriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
