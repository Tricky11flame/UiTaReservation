import { Ellipsis } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

export default function Dot() {
  return (
    <div className="ml-auto">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Ellipsis className="bg-zinc-700 text-white/60 rounded-full" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 border-blue-400 bg-black/100">
          <DropdownMenuItem>cstm1</DropdownMenuItem>
          <DropdownMenuItem>cstm2</DropdownMenuItem>
          <DropdownMenuSeparator className="bg-blue-400" />
          <DropdownMenuItem>cstm3</DropdownMenuItem>
          <DropdownMenuItem>cstm4</DropdownMenuItem>
          <DropdownMenuItem>cstm5</DropdownMenuItem>
          <DropdownMenuItem>cstm6</DropdownMenuItem>
          <DropdownMenuSeparator className="bg-blue-400"  />
          <DropdownMenuItem>cstm7</DropdownMenuItem>
          <DropdownMenuItem>cstm8</DropdownMenuItem>
          <DropdownMenuItem>cstm9</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
