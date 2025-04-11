import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

type FilterProps = {
  att?: "Communication" | "Status" | "Source" | "Payment"
  create?: () => void
}

export default function Filter({ att = "Communication", create = () => console.log(null) }: FilterProps) {
  return (
    <Button
      className="bg-truGray-950 text-gray-300 border border-zinc-800 hover:bg-blue-400/50 gap-3 font-semibold"
      onClick={create}
    >
      {att}
      <ChevronDown />
    </Button>
  )
}
