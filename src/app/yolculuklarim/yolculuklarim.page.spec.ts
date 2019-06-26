import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YolculuklarimPage } from './yolculuklarim.page';

describe('YolculuklarimPage', () => {
  let component: YolculuklarimPage;
  let fixture: ComponentFixture<YolculuklarimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YolculuklarimPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YolculuklarimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
