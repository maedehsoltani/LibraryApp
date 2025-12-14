import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoshboardPage } from './doshboard-page';

describe('DoshboardPage', () => {
  let component: DoshboardPage;
  let fixture: ComponentFixture<DoshboardPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoshboardPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoshboardPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
