import { Component, OnInit } from '@angular/core';
import { BeerService } from './core/services/beer/beer.service';
import { environment } from 'src/environments/environment.prod';
import { Beers as MockBeers, StatusBeer } from './core/mock/beer.mock';
import { Beer } from './core/objects/beer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  readonly title = environment.title;
  dataBeers: Beer[] = MockBeers;
  interval: any = undefined;

  constructor(private beerService: BeerService) {}

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.initializeTemperatures();
    }, 5000);
  }

  public initializeTemperatures(): void {
    try {
      this.dataBeers.map((beer: Beer) => {
        this.getTemperature(beer);
      });
    } catch (error: any) {
      console.log(error);
    }
  }

  async getTemperature(beer: Beer) {
    await this.beerService.get(beer.id).subscribe(
      (data: any) => {
        if (data != undefined && data.id == beer.id) {
          beer.temperature = data.temperature;
        } else {
          beer.temperature = 0;
        }
      },
      (error: any) => {
        console.log(
          `Exception [ ${error.message} ] getting product information of ${beer.name}`
        );
      }
    );
  }

  public checkMeasures(index: number, item: Beer) {
    if (item.temperature < item.minimumTemperature) {
      item.status = StatusBeer.Low;
    }

    if (item.temperature > item.maximumTemperature) {
      item.status = StatusBeer.High;
    }

    if (
      item.temperature >= item.minimumTemperature &&
      item.temperature <= item.maximumTemperature
    ) {
      item.status = StatusBeer.Good;
    }

    return item.status;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}
