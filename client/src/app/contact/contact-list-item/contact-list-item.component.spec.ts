import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatcListItemComponent } from './contact-list-item.component';

describe('ContatcListItemComponent', () => {
  let component: ContatcListItemComponent;
  let fixture: ComponentFixture<ContatcListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatcListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatcListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
