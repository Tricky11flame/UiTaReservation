import Lower from "./lower/Lower"
import Upper from "./upper/Upper"

export default function Title() {
  return (
    <div className="pt-4  bg-truGray-950">
        <Upper/>
        <Lower/>
    </div>
  )
}
