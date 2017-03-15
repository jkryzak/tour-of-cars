import { Component, Input } from '@angular/core';

import { Vehicle } from './vehicle';

@Component({
  selector: 'my-vehicle-detail',
  template: `
    <div *ngIf="vehicle">
      <h2>Edit "{{vehicle.renter}}"</h2>
      <div>
        <label>renter:</label>
        <input [(ngModel)]="vehicle.renter" placeholder="renter"/>
      </div>
      <div>
        <label>Model Year:</label>
        <input [(ngModel)]="vehicle.my" placeholder="model year"/>
      </div>
      <div>
        <label>Make:</label>
        <input [(ngModel)]="vehicle.make" placeholder="make"/>
      </div>
      <div>
          <label>Model:</label>
          <input [(ngModel)]="vehicle.model" placeholder="model"/>
      </div>
    </div>
  `
})
export class VehicleDetailComponent {
  @Input() vehicle: Vehicle;
}
