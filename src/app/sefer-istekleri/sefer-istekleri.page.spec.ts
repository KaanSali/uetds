import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeferIstekleriPage } from './sefer-istekleri.page';

describe('SeferIstekleriPage', () => {
  let component: SeferIstekleriPage;
  let fixture: ComponentFixture<SeferIstekleriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeferIstekleriPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeferIstekleriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
