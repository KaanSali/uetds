import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SirketListesiPage } from './sirket-listesi.page';

describe('SirketListesiPage', () => {
  let component: SirketListesiPage;
  let fixture: ComponentFixture<SirketListesiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SirketListesiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SirketListesiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
