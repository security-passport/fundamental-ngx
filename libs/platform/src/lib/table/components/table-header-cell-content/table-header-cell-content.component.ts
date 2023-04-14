import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Nullable } from '@fundamental-ngx/cdk/utils';
import { SortDirection } from '../../enums';
import { CollectionSort } from '../../interfaces/collection-sort.interface';
import { TableColumn } from '../table-column/table-column';

@Component({
    selector: 'fdp-table-header-cell-content',
    templateUrl: './table-header-cell-content.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            fdp-table-header-cell-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        `
    ]
})
export class TableHeaderCellContentComponent {
    /** Column reference. */
    @Input()
    column: TableColumn;

    /** Whether column has applied sorting. */
    @Input()
    hasSorting = false;

    /** Whether column has applied filtering. */
    @Input()
    hasFilter = false;

    /** Applied sorting. */
    @Input()
    sorting: Nullable<CollectionSort>;

    /** @hidden */
    readonly SORT_DIRECTION = SortDirection;
}
