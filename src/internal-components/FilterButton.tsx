import React from 'react';
import { FilterType } from '../models/filterType';
import {DropdownButton, MenuItem} from 'react-bootstrap';

export interface DataRowProps {
    filterTypes: FilterType[];
    value: FilterType | null;
    onChange: (filterType: string) => void;
}

export const FilterButton: React.FunctionComponent<DataRowProps> = props => {
    return (
        <DropdownButton pullRight className="fancy-grid-filter-button-container"
            id="filterSelect"
            title={
                <div className="filter-button">
                    <i className={`${'filter-button-content'} ${props.value != null ? 'fas fa-filter' : 'far fa-filter'}`} />
                </div>
            }
            noCaret>
                {props.filterTypes.map((filterType, i) => {
                    return(
                        <MenuItem
                            eventKey={i}
                            key={i} 
                            onClick={() => props.onChange(filterType.toString())} 
                            className={`${props.value != null && props.value == filterType ? 'fancy-grid-filter-list-selected' : ''}`}>
                                {filterType}
                        </MenuItem>
                        )
                    })
                }
        </DropdownButton>
    );
}