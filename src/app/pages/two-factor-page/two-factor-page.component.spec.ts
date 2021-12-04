import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoFactorPageComponent } from './two-factor-page.component';

describe('TwoFactorPageComponent', () => {
  let component: TwoFactorPageComponent;
  let fixture: ComponentFixture<TwoFactorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoFactorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoFactorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
