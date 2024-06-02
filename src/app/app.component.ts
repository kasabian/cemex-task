import { Component } from '@angular/core';
import { FilterComponent } from './shared/components/filter/filter.component';
import { TableModule } from 'primeng/table';
import { EmptyDataComponent } from './shared/components/empty-data/empty-data.component';
import { IProduct } from './shared/endpoints/products/products.interfaces';
import { BadgeModule } from 'primeng/badge';
import { IFilterData } from './shared/components/filter/filter.interfaces';
import { FilterPipe } from './shared/pipes/filter/filter.pipe';
import { DatePipe, NgClass } from '@angular/common';
import {
  getCorrectedTimeFrom,
  getCorrectedTimeTo,
} from './shared/helpers/helpers';
import { IFilterOptions } from './shared/pipes/filter/filter.interfaces';
import { IBadgeTypes } from './shared/interfaces/common.interfaces';
import { PRODUCT_MOCK_DATA } from './shared/endpoints/products/product.endpoints';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FilterComponent,
    TableModule,
    EmptyDataComponent,
    BadgeModule,
    FilterPipe,
    DatePipe,
    ButtonModule,
    NgClass,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  mobileHideMenu = false;

  statusBadges: IBadgeTypes = {
    ['In Progress']: 'info',
    ['Pending']: 'warning',
    ['Completed']: 'success',
  };

  filterChallengeData: IFilterOptions = {
    status: [{ filter: 'in', value: [] }],
    orderNumber: [{ filter: 'contains', value: '' }],
    productLine: [{ filter: 'contains', value: '' }],
    dateRequested: [
      { filter: 'after', value: '' },
      { filter: 'before', value: '' },
    ],
  };

  products: IProduct[] = PRODUCT_MOCK_DATA;

  filterData(data: IFilterData) {
    this.filterChallengeData = {
      status: [
        {
          filter: 'in',
          value: data['status'],
        },
      ],
      orderNumber: [
        {
          filter: 'contains',
          value: data['searchOrderNumber'],
        },
      ],
      productLine: [
        {
          filter: 'contains',
          value: data['productLines'].key,
        },
      ],
      dateRequested: [
        { filter: 'after', value: getCorrectedTimeFrom(data['from']) },
        { filter: 'before', value: getCorrectedTimeTo(data['to']) },
      ],
    };
  }
}
