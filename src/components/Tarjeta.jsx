export function Tarjeta({ item }) {

  return (
    <div
      className=" flex flex-col items-center w-[200px] h-[330px] border-2 rounded border-neutral-300">
      <h3>{item?.name}</h3>

      <img
        className="w-[200px] h-[280px] object-contain "
        src={item?.image} />

      <p>{item?.ki}</p>
    </div>
  )
}

