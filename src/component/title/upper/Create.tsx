import { Button } from "@/components/ui/button"
import { CirclePlus } from "lucide-react"

export default function Create({ create = () => console.log(null) }: { create?: () => void }) {
  return (
    <Button
      className="border-2 border-blue-400 text-white/60 bg-blue-400 
                 hover:bg-black hover:text-blue-400 mr-2 flex items-center gap-2"
      onClick={create}
    >
      <CirclePlus />
      <span>Create</span>
    </Button>
  )
}
