import { Component, OnInit  } from '@angular/core';

import { Vehicle } from './vehicle';
import { VehicleService } from './vehicle.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <ul>
      <li *ngFor="let vehicle of vehicles" (click)="onSelect(vehicle)" [class.selected]="vehicle === selectedVehicle">
        <h2>{{vehicle.renter}}</h2>
        <h3>{{vehicle.my}} {{vehicle.make}} {{vehicle.model}}</h3>
        <input [(ngModel)]="vehicle.renter" placeholder="Renter"><br/>
        <input [(ngModel)]="vehicle.my" placeholder="Model Year"><input [(ngModel)]="vehicle.make" placeholder="Make"><input [(ngModel)]="vehicle.model" placeholder="Model">
      </li>
    </ul>
    <hr/>
    <my-vehicle-detail [vehicle]="selectedVehicle"></my-vehicle-detail>
  `,
  styles: [`
    h2 { font-family: sans-serif; margin: 0; padding: 0;}
    h3 { color: red; margin: 0; padding: 0;}
    ul { list-style-type: none; padding: 0; }
    li { border: 1px dotted #ccc; margin-bottom: 10px; padding: 10px; }
    .selected { background: #ededed; }
  `],
  providers: [VehicleService]
})
export class AppComponent implements OnInit { 
  title = 'Angular 2 - Car List App';
  vehicles: Vehicle[];
  selectedVehicle: Vehicle;

  constructor(private vehicleService: VehicleService) { }

  getVehicles(): void {
    this.vehicles = this.vehicleService.getVehicles();
    // this.vehicleService.getVehicles().then(vehicles => this.vehicles = vehicles);
  }

  ngOnInit(): void {
    this.getVehicles();
  }

  onSelect(vehicle: Vehicle): void {
    this.selectedVehicle = vehicle;
  }
}
