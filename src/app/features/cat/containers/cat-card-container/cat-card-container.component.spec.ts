import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatCardContainerComponent } from './cat-card-container.component';

describe('CatCardContainerComponent', () => {
  let component: CatCardContainerComponent;
  let fixture: ComponentFixture<CatCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatCardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
