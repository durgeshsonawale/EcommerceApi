import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductListComponent } from './user-product-list.component';

describe('UserProductListComponent', () => {
  let component: UserProductListComponent;
  let fixture: ComponentFixture<UserProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProductListComponent]
    });
    fixture = TestBed.createComponent(UserProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
