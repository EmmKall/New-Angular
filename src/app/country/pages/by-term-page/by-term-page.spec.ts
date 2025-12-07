import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByTermPage } from './by-term-page';

describe('ByTermPage', () => {
  let component: ByTermPage;
  let fixture: ComponentFixture<ByTermPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByTermPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByTermPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
