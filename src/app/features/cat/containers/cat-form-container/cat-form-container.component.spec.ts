import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFormContainerComponent } from './cat-form-container.component';

describe('CatFormContainerComponent', () => {
  let component: CatFormContainerComponent;
  let fixture: ComponentFixture<CatFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatFormContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
