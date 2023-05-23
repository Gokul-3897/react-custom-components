import React, { useEffect, useState } from 'react';
import './DataTable.css';

export interface DataTableProbs {
    headerData: [],
    columnData: [],
    searchField: string,
    isSortable: boolean,
    isFilter: boolean

}
const DataTable: any = (props: DataTableProbs) => {

    const [headerData, setHeaderData] = useState(props?.headerData);
    const [columnData, setColumnData] = useState(props?.columnData);
    const [isSortable, setIsSortable] = useState(props?.isSortable);
    const [isFilter, setIsFilter] = useState(props?.isFilter);
    const [searchField, setSearchField] = useState(props?.searchField);
    const [filterText, setFilterText] = useState('');

    useEffect(() => {
        console.log(headerData);
        debugger;
        console.log(columnData);
    });

    const updateFilter = (e: any) => {
        const val = e?.target?.value;
        debugger;
        console.log(val);
    }

    return (<>
        {
            (headerData?.length > 0 && columnData?.length > 0) &&
            <div className='rct-custom-datatable-component-mainwrapper'>
                <div className='rct-custom-datatable-header-main-wrapper'>
                    <div className='rct-custom-datatable-header-cnt'>{'Header'}</div>
                    <div className='rct-custom-datatable-header-search-wrap'><input className='rct-datatable-search' onChange={updateFilter}></input></div>

                </div>
                <div className='rct-custom-datatable-content-main-wrapper'>
                    <div className="table-container">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    {headerData.map((eachColumHeader: any, eachColumHeaderIndex: any) => (
                                        <th>
                                            <button id={eachColumHeader.field}>{eachColumHeader.field}</button>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody id="table-content">
                                {columnData.map((ealColData: any, ealColDataIndex: any) => (
                                    <tr>
                                        {headerData.map((colHeaderDt: any, colHeaderDtIndex: any) => (
                                            <td>{ealColData[colHeaderDt.field]}</td>
                                        ))}

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='rct-custom-datatable-footer-main-wrapper'>

                </div>
            </div>
        }
    </>)

}

export default DataTable;