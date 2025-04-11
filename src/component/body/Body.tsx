import Card from "./card/Card"

type Status = {
  Name: "Pending" | "Confirmed" | "Cancelled"
  Color: "red" | "orange" | "green"
  res:number
  brand : 1|2|3|4|5
}

const statuses: Status[] = [
  { Name: "Pending", Color: "orange" ,res:3412454,brand :5},
  { Name: "Confirmed", Color: "green" ,res:893454 ,brand:3},
  { Name: "Cancelled", Color: "red" , res:134454,brand:2},
]

function getRandomStatus(): Status {
  const index = Math.floor(Math.random() * statuses.length)
  return statuses[index]
}

export default function Body() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 text-zinc-800 font-medium">
      {Array.from({ length: 10 }).map((_, i) => (
        <Card status={getRandomStatus()} key={i} />
      ))}
    </div>
  )
}
