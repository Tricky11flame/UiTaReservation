import Dot from "./Dot";
import Status from "./Status";
import { Grid3X3Icon } from "lucide-react";
type Status = {
  Name: "Pending" | "Confirmed" | "Cancelled"
  Color: "red" | "orange" | "green"
  brand : 1|2|3|4|5
}


export default function Title({ status = { Name: "Pending", Color: "orange",brand:1 } }: { status?: Status }) {
  return (
    <div className="p-4 flex align-middle content-center gap-4 ">
    
      <div className=" my-auto">
        <Grid3X3Icon></Grid3X3Icon>
      </div>
      
      <div className=" text-3xl content-center  align-middle ">
        <img src={`./brand_samples/brand${status.brand}.png`} alt="" className=" size-10 rounded-lg" />
      </div>
      
      <Status status={status}/>
      <Dot/>
    
    </div>
  )
}
