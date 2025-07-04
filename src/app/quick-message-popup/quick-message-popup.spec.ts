import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickMessagePopup } from './quick-message-popup';

describe('QuickMessagePopup', () => {
  let component: QuickMessagePopup;
  let fixture: ComponentFixture<QuickMessagePopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickMessagePopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickMessagePopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
