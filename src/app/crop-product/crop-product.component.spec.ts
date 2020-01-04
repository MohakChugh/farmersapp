import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropProductComponent } from './crop-product.component';

describe('CropProductComponent', () => {
  let component: CropProductComponent;
  let fixture: ComponentFixture<CropProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
