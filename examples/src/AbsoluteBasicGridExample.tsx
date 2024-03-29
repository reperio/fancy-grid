import React from 'react';
import * as FancyGrid from '../../dist';

export const code = `function AbsoluteBasicGridExample() {
    const dataRows = [
        {a: 1, b: 2, c: 3, d: 11},
        {a: 4, b: 5, c: 6},
        {a: 7, b: 8, c: 9, d: 10}
    ]
    return (
        <FancyGrid.Grid>
            <FancyGrid.LocalDataSource data={dataRows} />
        </FancyGrid.Grid>
    )
}`

export function AbsoluteBasicGridExample() {
    const dataRows = [
        {a: 1, b: 2, c: 3, d: 11},
        {a: 4, b: 5, c: 6},
        {a: 7, b: 8, c: 9, d: 10}
    ]
    return (
        <FancyGrid.Grid>
            <FancyGrid.LocalDataSource data={dataRows} />
        </FancyGrid.Grid>
    )
}