import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasPadreComponent } from './tareas-padre.component';

describe('TareasPadreComponent', () => {
  let component: TareasPadreComponent;
  let fixture: ComponentFixture<TareasPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasPadreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
