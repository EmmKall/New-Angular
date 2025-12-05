import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsSideMenuOptions } from './gifs-side-menu-options';

describe('GifsSideMenuOptions', () => {
  let component: GifsSideMenuOptions;
  let fixture: ComponentFixture<GifsSideMenuOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifsSideMenuOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifsSideMenuOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
