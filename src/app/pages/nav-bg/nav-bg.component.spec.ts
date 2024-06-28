import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBgComponent } from './nav-bg.component';

describe('NavBgComponent', () => {
  let component: NavBgComponent;
  let fixture: ComponentFixture<NavBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
