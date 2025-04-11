import clsx from "clsx"
import { Copy } from "lucide-react"
// import Dot from "./Dot"
type Status = {
  Name: "Pending" | "Confirmed" | "Cancelled"
  Color: "red" | "orange" | "green"
}

type StatusTagProps = {
  status?: Status
  res?: number
}

export default function StatusTag({
  status = { Name: "Pending", Color: "orange" },
  res = 123456,
}: StatusTagProps) {
  const bgColor = {
    red: "bg-red-800",
    orange: "bg-orange-800",
    green: "bg-green-800",
  }[status.Color]

  return (
    <div>
      <div className="flex items-center gap-2">
        
        <div className="text-gray-300 text-2xl font-semibold ">Name Abc</div>
        
        <div className={clsx(bgColor, "text-white/60 px-2 py-0 rounded-xl text-sm")}>
          {status.Name}
        </div>
        {/* <Dot/> */}


      </div>
      <div className="flex gap-1">
      <span className=" text-sm " >
          {`Res. No. #${res}`} {/* You can replace this with name or ID */}
      </span>
      <Copy className=" h-4"/>

      </div>

    </div>
  )
}
