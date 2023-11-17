import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MagasinFormPage } from './magasin-form.page';

describe('MagasinFormPage', () => {
  let component: MagasinFormPage;
  let fixture: ComponentFixture<MagasinFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MagasinFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
