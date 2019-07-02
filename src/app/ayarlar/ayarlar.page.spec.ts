import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyarlarPage } from './ayarlar.page';

describe('AyarlarPage', () => {
  let component: AyarlarPage;
  let fixture: ComponentFixture<AyarlarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyarlarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyarlarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
