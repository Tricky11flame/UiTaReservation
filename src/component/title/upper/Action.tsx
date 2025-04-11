import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
export default function Action(){

  return (
    <div title="Action" className="ml-auto">
    <Select >
      <SelectTrigger className="w-[120px] bg-truGray-950 text-blue-400 border-blue-400">
        <SelectValue placeholder="Action.." />
      </SelectTrigger>
      <SelectContent className="bg-truGray-950 text-blue-400 border-blue-400 ">
        <SelectGroup className="bg-truGray-950 text-blue-400 border-blue-400  ">
          <SelectLabel className="">Actions</SelectLabel>
          <SelectItem value="action1" className="data-[state=checked]:bg-blue-400 data-[state=checked]:text-truGray-950 " >ActionABC</SelectItem>
          <SelectItem value="action2" className="data-[state=checked]:bg-blue-400 data-[state=checked]:text-truGray-950 ">ActionBCD</SelectItem>
          <SelectItem value="action3" className="data-[state=checked]:bg-blue-400 data-[state=checked]:text-truGray-950 " >ActionGCp</SelectItem>
          <SelectItem value="action4" className="data-[state=checked]:bg-blue-400 data-[state=checked]:text-truGray-950 " >ActionAWS</SelectItem>
          <SelectItem value="action5" className="data-[state=checked]:bg-blue-400 data-[state=checked]:text-truGray-950 " >ActionAZ</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  )
}