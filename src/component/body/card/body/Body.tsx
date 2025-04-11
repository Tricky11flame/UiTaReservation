import RowLeft from "./rowLeft/RowLeft"
import RowRight from "./rowRight/RowRight"

export default function Body() {
  return (
    <div className=" flex gap-4">
      <RowLeft></RowLeft>
      <RowRight></RowRight>
    </div>
  )
}
