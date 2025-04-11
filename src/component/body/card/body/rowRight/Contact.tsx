import { Mail , Contact2 , MessageCircleCode} from "lucide-react"
export default function Contact({mail = "random@gmail.com", contact = "+91 9862120906" }) {
  return (
    <div>
      <div className="flex text-white/60 gap-2 ">
        <Mail className=" text-white/60 "/>
        <span> {mail}</span>
      </div>
      <div className="flex text-white/60 gap-2">
        <Contact2 className="text-blue-400"/>
        <MessageCircleCode className=" bg-green-600 rounded-xl" />
        <span>{contact}</span>
      </div>
    </div>
  )
}
