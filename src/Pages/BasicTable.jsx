import React, { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination, useColumnOrder } from "react-table"
import MOCK_DATA from "../components/MOCK_DATA.json"
import { COLUMNS1, COLUMNS2 } from '../components/Columns'
import "../components/table.css"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { GlobalFilter } from '../components/GlobalFilter'
import RefreshIcon from '@mui/icons-material/Refresh';
import Navbar from '../components/Navbar'
export const BasicTable = ( props ) => {


    const columns = useMemo(()=>{
        if(props.screen == "screen1"){
            return COLUMNS1
        }else{
            return COLUMNS2
        }
    },[COLUMNS1,COLUMNS2])

    let data = useMemo(()=>MOCK_DATA,[MOCK_DATA])


    const handleClick=()=>{
                window.location.reload(false);
    }
        
    function shuffle(arr) {
        arr = [...arr]
        const shuffled = []
        while (arr.length) {
          const rand = Math.floor(Math.random() * arr.length)
          shuffled.push(arr.splice(rand, 1)[0])
        }
        return shuffled
      }  
    



    

    const { 
        getTableProps,
        getTableBodyProps, 
        headerGroups, 
        page, 
        rows,
        prepareRow,
        state,
        setGlobalFilter,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        setColumnOrder,
        visibleColumns
    } = useTable({
        columns,
        data,
    },useColumnOrder,useFilters,useGlobalFilter,useSortBy,usePagination)

    const {globalFilter, pageIndex, pageSize} = state


    const randomizeColumns = () => {
        setColumnOrder(shuffle(visibleColumns.map(d => d.id)))
    }     

 


  return (
    <>
    <Navbar/>
    {props.screen == "screen1"?
        <div className='relative'>
           <button style={{position:"absolute", top:"-15px",right:"10px" }} onClick={()=>handleClick()}>  <RefreshIcon style={{fontSize:"2rem"}}/> Click To Refresh </button>
        </div>
        :""}
        
        {props.screen == "screen1"?
        <div className='relative'>
           <button style={{position:"absolute", top:"-15px",left:"10px" }} onClick={()=>randomizeColumns({})}>  <RefreshIcon style={{fontSize:"2rem"}}/> Click To Refresh Column </button>
        </div>
        :""}


    {props.screen != "screen1" ? <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />:null }
    
    <table {...getTableProps()} className="mt-5">
        <thead>
            {
                headerGroups.map(headerGroup=>(
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {
                        headerGroup.headers.map( column =>(
                         props.screen != "screen1" ?  <th { ...column.getHeaderProps()}>{column.render("Header")}
                         <div> { column.canFilter ? column.render("Filter") : null } </div>
                         </th> : 
                         <th  {...column.getHeaderProps(column.getSortByToggleProps())} >
                            {column.render("Header")}
                            <span >
                                {column.isSorted ?   <ArrowDropDownIcon/>:<ArrowDropUpIcon/>}
                            </span>
                            <div> { column.canFilter ? column.render("Filter") : null } </div>
                         </th>
                        ))}
                </tr>
                ))}
          
        </thead>
       { props.screen != "screen1"? <tbody {...getTableBodyProps()}>
            {
                page.map((row)=>{
                    prepareRow(row)
                    return(
                        <tr {...row.getRowProps()}>
                        {
                            row.cells.map((cell)=>{
                                return <td  {...cell.getCellProps()} className='text-center' >{cell.render("Cell")}</td> 
                            })}
                        </tr>
                    )
            })}
            
            
        </tbody>:
         <tbody {...getTableBodyProps()}>
         {rows.map((row)=>{
                 prepareRow(row)
                 return(
                     <tr {...row.getRowProps()}>
                     {row.cells.map((cell)=>{
                             return <td className='text-center' {...cell.getCellProps()}>{cell.render("Cell")}</td> 
                         })}
                     </tr>
                 )})} 
     </tbody>
        
        
        }
        
    </table>
    {props.screen != "screen1" ? 
    <>
    <div className='text-center mt-5'>
    <h1>  PAGE{' '} <strong>{pageIndex+1} OF {pageOptions.length}</strong> </h1>
    </div>
    <div className='text-center '>
        <span>GO TO {" "}
              <input type="number" defaultValue={pageIndex+1}
              onChange = {e =>{
                const pageNumber = e.target.value?Number(e.target.value) - 1 : 0
                gotoPage(pageNumber)
              }} style = {{width:"30px"}} />st PAGE
        </span>
    </div>

    <div className='flex justify-center '>
            <button onClick={()=>gotoPage(0)} disabled={!canPreviousPage}><KeyboardDoubleArrowLeftIcon/></button>
            {!canPreviousPage?
            <button className='m-5 bg-red-200 text-black rounded-l-md border-r border-gray-100 py-2 hover:text-white px-3' onClick={()=>previousPage()} disabled={!canPreviousPage} >PREV</button>:
            <button className='m-5 bg-red-500 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3' onClick={()=>previousPage()} disabled={!canPreviousPage} >PREV</button>
}
            
            <select value={pageSize} className="h-10 bg-red-500 text-white mt-5"
            onChange={(e)=>setPageSize(Number(e.target.value))}>
                {[10,25,50].map((pageSize)=>(
                    <option value={pageSize} key={pageSize} >
                        SHOW {pageSize} 
                    </option>
                ))}
            </select>
            {canNextPage?
            <button className='m-5 bg-red-500 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3' onClick={()=>nextPage()} disabled={!canNextPage} >NEXT</button>:
            <button className='m-5 bg-red-200 text-black rounded-r-md py-2 border-l border-gray-200 hover:text-white px-3' onClick={()=>nextPage()} disabled={!canNextPage} >NEXT</button>

}
            <button onClick={()=>gotoPage(pageCount-1)} disabled={!canNextPage}><KeyboardDoubleArrowRightIcon/></button>
        </div>
        </>
        :" "}

        
    </>
  )
  
}
