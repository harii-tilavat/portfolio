import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskProjectComponent } from './ask-project.component';

describe('AskProjectComponent', () => {
  let component: AskProjectComponent;
  let fixture: ComponentFixture<AskProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AskProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
