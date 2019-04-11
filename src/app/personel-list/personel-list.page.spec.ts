import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelListPage } from './personel-list.page';

describe('PersonelListPage', () => {
  let component: PersonelListPage;
  let fixture: ComponentFixture<PersonelListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonelListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonelListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
