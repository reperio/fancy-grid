import React from 'react';
import FancyGrid from '../..';

export function Example() {
    const dataRows = [
        {a: 1, b: 2, c: 3},
        {a: 4, b: 5, c: 6},
        {a: 7, b: 8, c: 9}
    ]
    return (
        <FancyGrid.Grid
            dataRows={dataRows}
        />
    )
}