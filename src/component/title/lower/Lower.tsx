import Filter from "./Filter"
import Search from "./Search"
import Date from "./Date"

export default function Lower() {

  return (
    <div className=" lower flex gap-4 mt-1 ml-4">
      <Search/>
      <Filter att="Communication"/>
      <Filter att="Source"/>
      <Filter att="Status"/>
      <Filter att="Payment"/>
      <Date/>
    </div>
  )
}