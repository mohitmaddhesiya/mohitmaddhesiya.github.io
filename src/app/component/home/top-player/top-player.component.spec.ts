import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPlayerComponent } from './top-player.component';

describe('TopPlayerComponent', () => {
  let component: TopPlayerComponent;
  let fixture: ComponentFixture<TopPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
