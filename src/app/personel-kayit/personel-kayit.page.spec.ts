import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelKayitPage } from './personel-kayit.page';

describe('PersonelKayitPage', () => {
  let component: PersonelKayitPage;
  let fixture: ComponentFixture<PersonelKayitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonelKayitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonelKayitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
