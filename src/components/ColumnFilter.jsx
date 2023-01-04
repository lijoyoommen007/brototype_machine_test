
export const ColumnFilter = ({column})=>{
    const {filterValue, setFilter} = column
    return(
      <span>
          Search:{" "} <br />
          <input style={{backgroundColor:"transparent", border:"2px solid black"}} value={filterValue || ""}
          onChange={e => setFilter(e.target.value)}
           />
      </span>
    )
  }