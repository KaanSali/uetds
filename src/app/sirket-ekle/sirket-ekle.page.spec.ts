import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SirketEklePage } from './sirket-ekle.page';

describe('SirketEklePage', () => {
  let component: SirketEklePage;
  let fixture: ComponentFixture<SirketEklePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SirketEklePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SirketEklePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
