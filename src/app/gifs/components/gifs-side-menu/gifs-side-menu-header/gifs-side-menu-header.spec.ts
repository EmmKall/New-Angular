import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsSideMenuHeader } from './gifs-side-menu-header';

describe('GifsSideMenuHeader', () => {
  let component: GifsSideMenuHeader;
  let fixture: ComponentFixture<GifsSideMenuHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifsSideMenuHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifsSideMenuHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
