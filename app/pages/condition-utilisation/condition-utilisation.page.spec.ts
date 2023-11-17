import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConditionUtilisationPage } from './condition-utilisation.page';

describe('ConditionUtilisationPage', () => {
  let component: ConditionUtilisationPage;
  let fixture: ComponentFixture<ConditionUtilisationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConditionUtilisationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
