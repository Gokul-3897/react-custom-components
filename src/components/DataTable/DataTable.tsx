import React, { useEffect, useState } from 'react';
import './DataTable.css';

export interface DataTableProbs {
    headerData: [],
    columnData: [],
    searchField: string,
    isSortable: boolean,
    isFilter: boolean,
    isReOrderable: boolean

}
const DataTable: any = (props: DataTableProbs) => {

    const [initialWholeHeaderData, setInitialWholeHeaderData] = useState(props?.headerData);
    const [initialWholeColumnData, setInitialWholeColumnData] = useState(props?.columnData);
    const [headerData, setHeaderData] = useState(props?.headerData);
    const [columnData, setColumnData] = useState(props?.columnData);
    const [isSortable, setIsSortable] = useState(props?.isSortable);
    const [isFilter, setIsFilter] = useState(props?.isFilter);
    const [isReOrderable, setIsReOrderable] = useState(props?.isReOrderable)
    const [searchField, setSearchField] = useState('name');
    const [filterText, setFilterText] = useState('');

    const [rowData, setRowData] = useState('');

    useEffect(()=>{
        let updatedColumnData : any = [];
        initialWholeColumnData.map((eachColumnDt: any) =>{
            if(eachColumnDt?.[searchField]?.includes?.(filterText)) {
                updatedColumnData.push(eachColumnDt);
            }
        });
        setColumnData(updatedColumnData);
    },[filterText]);

    const updateFilter = (e: any) => {
        const val = e?.target?.value;
        setFilterText(val);
    }

    //Triggered When re-ordering the row started...
    const dragStart = (event: any) => {
        setRowData(event.target);
    }

    //Triggered When re-ordering the row completed...
    const dragOver =(event: any) => {
        var e = event;
        e.preventDefault(); 

        let children= Array.from(e.target.parentNode.parentNode.children);
        if(children.indexOf(e.target.parentNode)>children.indexOf(rowData))
          e.target.parentNode.after(rowData);
        else
          e.target.parentNode.before(rowData);
    }

    return (<>
        {
            (headerData?.length > 0) &&
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
                                    <tr className ={`${isReOrderable?'rct-row-re-orderable':''}`} draggable={isReOrderable} onDragStart={dragStart} onDragOver={dragOver}>
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