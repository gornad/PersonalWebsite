
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BlueprintNavComponent } from './blueprint-nav.component';

describe('BlueprintNavComponent', () => {
  let component: BlueprintNavComponent;
  let fixture: ComponentFixture<BlueprintNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [BlueprintNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueprintNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
