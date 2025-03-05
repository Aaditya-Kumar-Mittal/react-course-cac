function Card({username, image}) {
  return (
    <div>
      <div className="flex flex-col rounded-xl p-4 w-1/3 bg-slate-900 text-white mx-auto border-2 border-white gap-y-2">
        <div className="flex justify-center">
          <img
            src={image}
            className="rounded-xl w-full max-w-[300px]"
            alt="NFT"
          />
        </div>
        <div className="flex flex-col rounded-b-xl py-2">
          <div className="flex justify-between">
            <h1 className="font-RubikBold">{username}</h1>
            <h1 className="font-bold font-RubikBold">Price</h1>
          </div>
          <div className="flex justify-between font-mono">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
