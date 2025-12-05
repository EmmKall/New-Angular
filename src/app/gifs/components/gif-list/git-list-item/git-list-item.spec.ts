import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitListItem } from './git-list-item';

describe('GitListItem', () => {
  let component: GitListItem;
  let fixture: ComponentFixture<GitListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitListItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
