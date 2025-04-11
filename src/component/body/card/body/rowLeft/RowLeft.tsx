import Booking from "./Booking"
import ChekIn from "./ChekIn"
import Guests from "./Guests"
import ViewRoom from "./ViewRoom"

export default function RowLeft() {
  return (
    <div className="flex flex-col ml-4 mr-auto my-4 gap-4" >
      <ChekIn></ChekIn>
      <Booking></Booking>
      <Guests></Guests>
      <ViewRoom></ViewRoom>
    </div>
  )
}
