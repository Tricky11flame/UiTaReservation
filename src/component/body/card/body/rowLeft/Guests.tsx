import { Users,PersonStanding,Baby } from "lucide-react"
export default function Guests() {
  return (
    <div className="">
      <div className=" text-zinc-800 flex gap-2">
        <Users className=" text-zinc-800 h-6 "></Users>
        <div className="text-sm my-auto">Guests</div>
      </div>
      <div className="text-white/60 flex gap-1 ml-1">
        <PersonStanding className="text-white/60 h-6"/>
        <div className="text-xs mt-auto">2</div>
        <Baby className="text-white/60 h-6"/>
        <div className="text-xs mt-auto">0</div>
      </div>
    </div>
  )
}
