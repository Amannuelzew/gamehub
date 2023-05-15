const GameSkelton = () => {
  return (
    <div className="max-h-80 w-64 bg-base-100 shadow-xl mb-4 rounded-lg">
      <div className="animate-pulse">
        <div className="rounded-t-lg bg-slate-700 h-48 "></div>
        <div className="flex-1 py-4 px-5">
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="grid grid-cols-2 gap-1 py-8 pl-28">
              <div className="h-2 w-9 bg-slate-700 rounded "></div>
              <div className="h-2 w-10 bg-slate-700 rounded "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameSkelton;
