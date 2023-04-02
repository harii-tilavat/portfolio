import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFactsComponent } from './about-facts.component';

describe('AboutFactsComponent', () => {
  let component: AboutFactsComponent;
  let fixture: ComponentFixture<AboutFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutFactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
