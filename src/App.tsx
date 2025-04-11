import Title from "./component/title/Title"
import Body from "./component/body/Body"


import { ScrollArea } from "./components/ui/scroll-area"

function App() {
  return (
    <>
    <Title/>
    <ScrollArea className=" bg-truGray-950 ">
      <Body/>    
    </ScrollArea>
    </>
  )
}

export default App
