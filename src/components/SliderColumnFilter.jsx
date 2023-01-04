
import React from 'react'


    function SliderColumnFilter({
        column: { filterValue, setFilter, preFilteredRows, id },
      }) {
        // Calculate the min and max
        // using the preFilteredRows
      
        const [min, max] = React.useMemo(() => {
          let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
          let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
          preFilteredRows.forEach(row => {
            min = Math.min(row.values[id], min)
            max = Math.max(row.values[id], max)
          })
          return [min, max]
        }, [id, preFilteredRows])
      
        return (
          <>
            <input
              type="range"
              min={min}
              max={max}
              value={filterValue || min}
              onChange={e => {
                setFilter(parseInt(e.target.value, 10))
              }}
            /> <br />
            <button className='bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2  shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded-full' onClick={() => setFilter(undefined)}>Off</button>
          </>
        )
      }
  


export default SliderColumnFilter