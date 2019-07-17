import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeferEklePage } from './sefer-ekle.page';

describe('SeferEklePage', () => {
  let component: SeferEklePage;
  let fixture: ComponentFixture<SeferEklePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeferEklePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeferEklePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
