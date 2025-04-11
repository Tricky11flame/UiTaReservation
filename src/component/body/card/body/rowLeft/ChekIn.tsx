import { CalendarDays } from "lucide-react"

export default function CheckIn({dateRange="01/11/2022 - 03/12/2022"}) {
  // const [dateRange, setDateRange] = useState("01/11/2022 - 03/12/2022")
  // setDateRange("01/11/2022 - 03/12/2022");
  return (
    <div className="">
      <div className="flex gap-1.5 items-center text-zinc-800 ">
        <CalendarDays className=" text-trueGray-600 h-6" />
        <span className=" text-sm mt-auto">Check-in / Check-out</span>
      </div>
      <div className="font-medium ml1 text-white/60">{dateRange}</div>
    </div>
  )
}
