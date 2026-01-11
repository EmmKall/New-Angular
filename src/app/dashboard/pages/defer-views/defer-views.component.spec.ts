/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeferViewsComponent } from './defer-views.component';

describe('DeferViewsComponent', () => {
  let component: DeferViewsComponent;
  let fixture: ComponentFixture<DeferViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeferViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeferViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
