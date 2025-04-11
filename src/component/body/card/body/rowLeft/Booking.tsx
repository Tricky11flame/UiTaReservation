import { Timer } from "lucide-react"
export default function Booking() {
  return (
    <div>
      <div className="flex gap-1.5 text-zinc-800">
        <Timer className="text-zinc-800 h-6"/>
        <span className="text-sm mt-auto ">Booking Date</span>
      </div>
      <div className=" font-medium ml-1 text-white/60">01/02/03</div>
    </div>
  )
}
