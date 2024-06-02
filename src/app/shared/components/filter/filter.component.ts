import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { IFilterData, IProductLine } from './filter.interfaces';
import { debounceTime, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    CheckboxModule,
    DropdownModule,
    FormsModule,
    CalendarModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    PanelModule,
    CardModule,
    ReactiveFormsModule,
  ],
  templateUrl: './filter.component.html',
})
export class FilterComponent implements OnInit, OnDestroy {
  @Output() filterData: EventEmitter<IFilterData> = new EventEmitter();

  private destroy$: Subject<void> = new Subject<void>();

  productLinesOptions: IProductLine[] = [
    { name: 'Cement', key: 'Cement' },
    { name: 'Ready-Mix', key: 'Ready-Mix' },
    { name: 'Aggregates', key: 'Aggregates' },
    { name: 'All Product Lines', key: '' },
  ];

  form: FormGroup = this.fb.group({
    status: [[]],
    productLines: [
      this.productLinesOptions[this.productLinesOptions.length - 1],
    ],
    from: [this.getNextWeek()],
    to: [new Date()],
    searchOrderNumber: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form.valueChanges
      .pipe(debounceTime(300), takeUntil(this.destroy$))
      .subscribe((data: IFilterData): void => {
        this.filterData.emit(data);
      });

    this.filterData.emit(this.form.value);
  }

  private getNextWeek(): Date {
    const date: Date = new Date();

    date.setDate(date.getDate() - 7);

    return date;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
