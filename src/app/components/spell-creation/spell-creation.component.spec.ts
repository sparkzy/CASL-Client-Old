import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellCreationComponent } from './spell-creation.component';

describe('SpellCreationComponent', () => {
  let component: SpellCreationComponent;
  let fixture: ComponentFixture<SpellCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
