import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YolcuKaydetPage } from './yolcu-kaydet.page';

describe('YolcuKaydetPage', () => {
  let component: YolcuKaydetPage;
  let fixture: ComponentFixture<YolcuKaydetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YolcuKaydetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YolcuKaydetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
