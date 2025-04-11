import Amount from "./Amount";
import Contact from "./Contact";
import Document from "./Docs";

export default function RowRight() {

  return (
    <div className=" flex flex-col mr-4 my-4 gap-4">
      <Contact/>
      <Document/>
      <Amount/>
    </div>
  )
}
