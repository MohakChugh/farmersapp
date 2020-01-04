import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropfeedComponent } from './cropfeed.component';

describe('CropfeedComponent', () => {
  let component: CropfeedComponent;
  let fixture: ComponentFixture<CropfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
