import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AracKayitPage } from './arac-kayit.page';

describe('AracKayitPage', () => {
  let component: AracKayitPage;
  let fixture: ComponentFixture<AracKayitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AracKayitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AracKayitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
