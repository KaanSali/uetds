import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SirketBilgileriPage } from './sirket-bilgileri.page';

describe('SirketBilgileriPage', () => {
  let component: SirketBilgileriPage;
  let fixture: ComponentFixture<SirketBilgileriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SirketBilgileriPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SirketBilgileriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
