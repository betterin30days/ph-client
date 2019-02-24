import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MockDataService } from './mockData.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  constructor(private dataService: MockDataService) {}

  public fetch(): Observable<Property[]> {
    return this.dataService.properties$;
  }
}
