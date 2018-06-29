import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleLibAComponent } from './example-lib-a.component';

describe('ExampleLibAComponent', () => {
  let component: ExampleLibAComponent;
  let fixture: ComponentFixture<ExampleLibAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleLibAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleLibAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
