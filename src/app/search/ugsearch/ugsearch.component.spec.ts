import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UGSearchComponent } from './ugsearch.component';

describe('UgsearchComponent', () => {
  let component: UGSearchComponent;
  let fixture: ComponentFixture<UGSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UGSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UGSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
