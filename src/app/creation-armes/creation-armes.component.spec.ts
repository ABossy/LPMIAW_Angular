import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationArmesComponent } from './creation-armes.component';

describe('CreationArmesComponent', () => {
  let component: CreationArmesComponent;
  let fixture: ComponentFixture<CreationArmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationArmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationArmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
