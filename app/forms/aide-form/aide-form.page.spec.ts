import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AideFormPage } from './aide-form.page';

describe('AideFormPage', () => {
  let component: AideFormPage;
  let fixture: ComponentFixture<AideFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AideFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
