import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaHijoComponent } from './tarea-hijo.component';

describe('TareaHijoComponent', () => {
  let component: TareaHijoComponent;
  let fixture: ComponentFixture<TareaHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareaHijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
