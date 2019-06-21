import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobDetailsComponent } from './mob-details.component';

describe('MobDetailsComponent', () => {
  let component: MobDetailsComponent;
  let fixture: ComponentFixture<MobDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
