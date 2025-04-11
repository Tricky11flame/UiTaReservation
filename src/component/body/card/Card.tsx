import Body from "./body/Body"
import Title from "./title/Title"
import { Separator } from "@/components/ui/separator"


type Status = {
  Name: "Pending" | "Confirmed" | "Cancelled"
  Color: "red" | "orange" | "green"
  res : number
  brand : 1|2|3|4|5
}


export default function Card({ status = { Name: "Pending", Color: "orange" ,res:126876,brand:1} }: { status?: Status }) {
  return (
    <div className="bg-truGray-950 rounded-xl border-zinc-800 border-2 ">
      <Title status= {status}/>
      <div className="mx-4 bg ">
      <Separator className=" p-[1.2px] rounded-2xl bg-zinc-800">
      </Separator>
      </div>
      <Body></Body>
    </div>
  )
}
