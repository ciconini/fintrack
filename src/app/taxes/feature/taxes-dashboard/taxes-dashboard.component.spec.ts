import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxesDashboardComponent } from './taxes-dashboard.component';

describe('TaxesDashboardComponent', () => {
  let component: TaxesDashboardComponent;
  let fixture: ComponentFixture<TaxesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxesDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
