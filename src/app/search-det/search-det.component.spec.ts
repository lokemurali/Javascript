import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDetComponent } from './search-det.component';

describe('SearchDetComponent', () => {
  let component: SearchDetComponent;
  let fixture: ComponentFixture<SearchDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
