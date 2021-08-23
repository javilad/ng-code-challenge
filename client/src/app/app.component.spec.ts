import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BeerService } from './core/services/beer/beer.service';
import { delay } from 'rxjs/operators';
import * as rx from 'rxjs';
import { Beer } from './core/objects/beer';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let service: BeerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent],
      providers: [BeerService],
    }).compileComponents();

    service = TestBed.get(BeerService);
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    const component = fixture.debugElement.componentInstance;
    component.ngOnInit();
    let instancegetTemperature = spyOn(
      component,
      'initializeTemperatures'
    ).and.returnValue([]);
    tick(5000);
    expect(component.dataBeers).toEqual([]);
  });

  it('Should calculate beer status', () => {
    tick(5000);
    const column = debugElement.query(By.css('[data-column="status"]'));
    expect(column.nativeElement.textContent).toBeDefined();
  });

  it('Should interval method', () => {
    const component = fixture.debugElement.componentInstance;
    const objInterval = component.interval;
    component.ngOnInit();
    tick(5000);
    expect(objInterval).toBeDefined();
  });

  it('Should call temperature service and get a object', fakeAsync(() => {
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(BeerService);

    let spyGet = spyOn(service, 'get').and.callFake(() => {
      return rx.of([{ id: 1 }]).pipe(delay(2000));
    });
    let beer = new Beer();
    beer.id = 1;

    component.getTemperature(beer);
    tick(2000);
    expect(beer.temperature).toBeCloseTo(5);
    expect(beer.id).toEqual(1);
  }));
});
