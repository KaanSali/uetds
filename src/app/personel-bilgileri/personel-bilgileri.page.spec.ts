import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelBilgileriPage } from './personel-bilgileri.page';

describe('PersonelBilgileriPage', () => {
  let component: PersonelBilgileriPage;
  let fixture: ComponentFixture<PersonelBilgileriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonelBilgileriPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonelBilgileriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
