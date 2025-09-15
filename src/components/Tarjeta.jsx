export function Tarjeta({ item }) {

  return (
    <div
      className="
      bg-blue-600 
      flex 
      flex-col 
      items-center 
      w-[200px] 
      h-[330px] 
      border-2  
      border-neutral-300 
      rounded-md
      hover:scale-105
      duration-400
      hover:bg-blue-300
      shadow-sm 
      hover:shadow-2xl
      hover:shadow-black
      ">
      <h3
      className="
      bg-neutral-900 
      border-amber-50 
      border-2 w-50 
      text-amber-200 
      font-mono 
      flex 
      justify-center 
      rounded-md
      "
      >{item?.name}</h3>

      <img
        className="w-[200px] h-[275px] object-contain "
        src={item?.image} />

      <p
      className="bg-neutral-900 
      border-amber-50 
      border-2 w-50  
      text-amber-200 
      font-mono 
      flex 
      justify-center 
      rounded-md 
      "
      >{item?.ki}</p>
    </div>
  )
}

