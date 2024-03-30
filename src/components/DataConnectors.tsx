const DataConnectors = () => (
  <>
    <div
      data-side="left"
      className=" h-full absolute -left-4 top-0 w-4 flex flex-col justify-center gap-5"
    >
      <div className="w-4 h-3  rounded-tl-sm rounded-bl-sm bg-gradient-to-t from-slate-800 to-slate-400 shadow-icon" />
      <div className="w-4 h-3 rounded-tl-sm rounded-bl-sm bg-gradient-to-t from-slate-800 to-slate-400 shadow-icon" />
    </div>
    <div
      data-side="right"
      className=" h-full absolute -right-4 top-0 w-4 flex flex-col justify-center gap-5"
    >
      <div className="w-4 h-3 rounded-tr-sm rounded-br-sm bg-gradient-to-t from-slate-800 to-slate-400 shadow-icon" />
      <div className="w-4 h-3 rounded-tr-sm rounded-br-sm bg-gradient-to-t from-slate-800 to-slate-400 shadow-icon" />
    </div>
    <div data-side="top" className="h-4 absolute left-0 -top-4 w-full flex justify-center gap-9">
      <div className="w-3 h-4 rounded-tl-sm rounded-tr-sm bg-gradient-to-t from-slate-800 to-slate-400 shadow-icon" />
      <div className="w-3 h-4 rounded-tl-sm rounded-tr-sm bg-gradient-to-t from-slate-800 to-slate-400 shadow-icon" />
      <div className="w-3 h-4 rounded-tl-sm rounded-tr-sm bg-gradient-to-t from-slate-800 to-slate-400 shadow-icon" />
      <div className="w-3 h-4 rounded-tl-sm rounded-tr-sm bg-gradient-to-t from-slate-800 to-slate-400 shadow-icon" />
      <div className="w-3 h-4 rounded-tl-sm rounded-tr-sm bg-gradient-to-t from-slate-800 to-slate-400 shadow-icon" />
      <div className="w-3 h-4 rounded-tl-sm rounded-tr-sm bg-gradient-to-t from-slate-800 to-slate-400 shadow-icon" />
    </div>
    <div
      data-side="bottom"
      className="h-4 absolute left-0 -bottom-4 w-full flex justify-center gap-9"
    >
      <div className="w-3 h-4 rounded-bl-sm rounded-br-sm bg-gradient-to-t to-slate-700 from-slate-300 shadow-icon" />
      <div className="w-3 h-4 rounded-bl-sm rounded-br-sm bg-gradient-to-t to-slate-700 from-slate-300 shadow-icon" />
      <div className="w-3 h-4 rounded-bl-sm rounded-br-sm bg-gradient-to-t to-slate-700 from-slate-300 shadow-icon" />
      <div className="w-3 h-4 rounded-bl-sm rounded-br-sm bg-gradient-to-t to-slate-700 from-slate-300 shadow-icon" />
      <div className="w-3 h-4 rounded-bl-sm rounded-br-sm bg-gradient-to-t to-slate-700 from-slate-300 shadow-icon" />
      <div className="w-3 h-4 rounded-bl-sm rounded-br-sm bg-gradient-to-t to-slate-700 from-slate-300 shadow-icon" />
    </div>
  </>
);

export default DataConnectors;
