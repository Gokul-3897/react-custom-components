import React from 'react';
import logo from './logo.svg';
import './App.css';
import DataTable from './components/DataTable/DataTable';
import {dataTableHeaderData, dataTableColumnData} from "./components/DefaultDataSource/DataTableData"
function App() {
  const dataTableData = {
    headerData: dataTableHeaderData,
    columnData: dataTableColumnData,
    isSortable: true,
    isFilter: true,
    isReOrderable: true
  }
  return (
    <div className="App">
      <DataTable headerData={dataTableHeaderData} columnData={dataTableColumnData} isSortable ={true} isFilter = {true} isReOrderable={true} />
    </div>
  );
}

export default App;
