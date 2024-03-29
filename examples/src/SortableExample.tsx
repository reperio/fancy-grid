import React, { useState } from 'react';
import * as FancyGrid from '../../dist';

import usStates from './states.json';

export const code = `function applySort(dataRows: any[], sorts: FancyGrid.SortCollection) {
    return dataRows.sort((a, b) => {
        for (const sort of sorts) {
            const {fieldName, dir} = sort;
            const aVal = a[fieldName];
            const bVal = b[fieldName];

            if (aVal > bVal) {
                return dir === 'desc' ? -1 : 1;
            } else if (aVal < bVal) {
                return dir === 'desc' ? 1 : -1;
            }
        }

        return 0;
    })
}

function SortableExample() {
    const [sortState, setSortState] = useState([] as FancyGrid.SortCollection);
    const dataRows = applySort(usStates, sortState);
    
    return (
        <FancyGrid.Grid>
            <FancyGrid.ColumnList>
                <FancyGrid.Column
                    name="name"
                    title="Name"
                />
                <FancyGrid.Column
                    name="abbreviation"
                    title="Abbreviation"
                />
            </FancyGrid.ColumnList>
            <FancyGrid.Sortable
                sort={sortState}
                onSortChange={setSortState}
            />
            <FancyGrid.LocalDataSource data={dataRows} />
        </FancyGrid.Grid>
    )
}`

function applySort(dataRows: any[], sorts: FancyGrid.SortCollection) {
    return dataRows.sort((a, b) => {
        for (const sort of sorts) {
            const {fieldName, dir} = sort;
            const aVal = a[fieldName];
            const bVal = b[fieldName];

            if (aVal > bVal) {
                return dir === 'desc' ? -1 : 1;
            } else if (aVal < bVal) {
                return dir === 'desc' ? 1 : -1;
            }
        }

        return 0;
    })
}

export function SortableExample() {
    const [sortState, setSortState] = useState([] as FancyGrid.SortCollection);
    const dataRows = applySort(usStates.data, sortState);
    
    return (
        <FancyGrid.Grid>
            <FancyGrid.ColumnList>
                <FancyGrid.Column
                    name="name"
                    title="Name"
                />
                <FancyGrid.Column
                    name="abbreviation"
                    title="Abbreviation"
                />
            </FancyGrid.ColumnList>
            <FancyGrid.Sortable
                sort={sortState}
                onSortChange={setSortState}
            />
            <FancyGrid.LocalDataSource data={dataRows} />
        </FancyGrid.Grid>
    )
}