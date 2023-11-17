import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TerrainFormPage } from './terrain-form.page';

describe('TerrainFormPage', () => {
  let component: TerrainFormPage;
  let fixture: ComponentFixture<TerrainFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TerrainFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
