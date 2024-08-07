import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpsearchComponent } from './spsearch.component';

describe('SpsearchComponent', () => {
  let component: SpsearchComponent;
  let fixture: ComponentFixture<SpsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpsearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
