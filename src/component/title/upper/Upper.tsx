// import { Separator } from "../../components/ui/separator"
import { Separator } from "@/components/ui/separator"
import { LucidePanelLeft } from "lucide-react" ;
import Action from "./Action";
import Create from "./Create";
import Menu from "./Menu";

export default function upper() {
  return(
    <div title="Upper "  className="flex content-center gap-3 text-white/60">
    {/* <Separator orientation="vertical" className="h-6 w-[1px] bg-blue-400" /> */}
    <LucidePanelLeft className=" ml-4"></LucidePanelLeft>
    {/* // wierd beahvior */}
    <Separator orientation="vertical" className=" ml-3 p-[1px] opacity-60" ><p className=" opacity-0 ">h</p></Separator>
    <div className=" ">
      <p className=" font-semibold text-xl  sm:pl-2 xl:pl-6 my-auto "> Reservations </p>
    </div>
    <Action/>
    <Create/>
    <Menu/>
    </div>
  )

}
