import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPeliculasComponent } from './top-peliculas.component';

describe('TopPeliculasComponent', () => {
  let component: TopPeliculasComponent;
  let fixture: ComponentFixture<TopPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopPeliculasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
