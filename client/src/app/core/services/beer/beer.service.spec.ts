import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { BeerService } from './beer.service';

describe('BeerService', () => {
  let service: BeerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BeerService],
    });
    service = TestBed.get(BeerService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should get data from temperature', () => {
    const data = [];
    const id = 1;

    service.get(1).subscribe(
      (data) => {
        expect(data).toBeDefined();
        expect(data.id).toEqual("1");
      },
      (error) => {
        expect(error).toThrowError(error);
      }
    );
  });

  afterEach(() => {
    httpMock.verify();
  });
});
