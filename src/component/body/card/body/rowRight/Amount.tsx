export default function Amount({netAmm =780 , paidAmm = 500  }) {
  return (
    <div className="mt-auto ">
      <div className=" font-medium">{`Total:$${paidAmm}`}</div>
      <span className=" text-sm px-1.5 py-0.5 rounded-4xl text-white/60 bg-red-800 h-auto" >{`Due:$${netAmm-paidAmm}`}</span>
    </div>
  )
}
