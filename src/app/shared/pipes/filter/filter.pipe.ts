import { Pipe, PipeTransform } from '@angular/core';
import {
  IProduct,
  TProductKeys,
} from '../../endpoints/products/products.interfaces';
import { FilterService } from 'primeng/api';
import { IFilterOptions, IFilterOption } from './filter.interfaces';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  constructor(private filterService: FilterService) {}

  transform(items: IProduct[], filterOptions: IFilterOptions): any {
    return items.filter((item: IProduct): boolean => {
      let isMatched = true;

      const itemsKeys: TProductKeys[] = Object.keys(item) as TProductKeys[];

      itemsKeys.forEach((key: TProductKeys): void => {
        if (!filterOptions[key] || !isMatched) {
          return;
        }

        filterOptions[key].forEach((filterOption: IFilterOption) => {
          if (!isMatched) {
            return;
          }

          isMatched = this.filterService.filters[filterOption.filter](
            item[key],
            filterOption.value
          );
        });
      });

      return isMatched;
    });
  }
}
