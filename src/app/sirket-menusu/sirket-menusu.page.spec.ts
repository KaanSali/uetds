import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SirketMenusuPage } from './sirket-menusu.page';

describe('SirketMenusuPage', () => {
  let component: SirketMenusuPage;
  let fixture: ComponentFixture<SirketMenusuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SirketMenusuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SirketMenusuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
