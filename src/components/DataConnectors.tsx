const DataConnectors = ({ scaleFactor }: { scaleFactor: number }) => {
  const scale9 = `${36 * scaleFactor}px`;
  const scale5 = `${20 * scaleFactor}px`;
  const scale4 = `${16 * scaleFactor}px`;
  const scale3 = `${12 * scaleFactor}px`;

  return (
    <>
      <div
        data-side="left"
        className="h-full absolute flex flex-col justify-center"
        style={{ left: `-${scale4}`, width: `${scale4}`, gap: scale5, top: 0 }}
      >
        <div
          className="rounded-tl-sm rounded-bl-sm bg-gradient-to-t from-slate-800 to-slate-400 shadow-icon"
          style={{ width: scale4, height: scale3 }}
        />
        <div
          style={{ width: scale4, height: scale3 }}
          className="rounded-tl-sm rounded-bl-sm bg-gradient-to-t from-slate-800 to-slate-400 shadow-icon"
        />
      </div>
      <div
        style={{ width: scale4, gap: scale5, right: `-${scale4}` }}
        data-side="right"
        className=" h-full absolute top-0 flex flex-col justify-center"
      >
        <div
          style={{ width: scale4, height: scale3 }}
          className="rounded-tr-sm rounded-br-sm bg-gradient-to-t from-slate-800 to-slate-400 shadow-icon"
        />
        <div
          style={{ width: scale4, height: scale3 }}
          className="rounded-tr-sm rounded-br-sm bg-gradient-to-t from-slate-800 to-slate-400 shadow-icon"
        />
      </div>
      <div
        style={{ gap: scale9, height: scale4, top: `-${scale4}` }}
        data-side="top"
        className="absolute left-0 w-full flex justify-center"
      >
        <div
          style={{ width: scale3, height: scale4 }}
          className="rounded-tl-sm rounded-tr-sm bg-gradient-to-t from-slate-800 to-slate-400 shadow-icon"
        />
        <div
          style={{ width: scale3, height: scale4 }}
          className="rounded-tl-sm rounded-tr-sm bg-gradient-to-t from-slate-800 to-slate-400 shadow-icon"
        />
        <div
          style={{ width: scale3, height: scale4 }}
          className="rounded-tl-sm rounded-tr-sm bg-gradient-to-t from-slate-800 to-slate-400 shadow-icon"
        />
        <div
          style={{ width: scale3, height: scale4 }}
          className="rounded-tl-sm rounded-tr-sm bg-gradient-to-t from-slate-800 to-slate-400 shadow-icon"
        />
        <div
          style={{ width: scale3, height: scale4 }}
          className="rounded-tl-sm rounded-tr-sm bg-gradient-to-t from-slate-800 to-slate-400 shadow-icon"
        />
        <div
          style={{ width: scale3, height: scale4 }}
          className="rounded-tl-sm rounded-tr-sm bg-gradient-to-t from-slate-800 to-slate-400 shadow-icon"
        />
      </div>
      <div
        style={{ gap: scale9, height: scale4, bottom: `-${scale4}` }}
        data-side="bottom"
        className="absolute left-0 w-full flex justify-center"
      >
        <div
          style={{ width: scale3, height: scale4 }}
          className="rounded-bl-sm rounded-br-sm bg-gradient-to-t to-slate-700 from-slate-300 shadow-icon"
        />
        <div
          style={{ width: scale3, height: scale4 }}
          className="rounded-bl-sm rounded-br-sm bg-gradient-to-t to-slate-700 from-slate-300 shadow-icon"
        />
        <div
          style={{ width: scale3, height: scale4 }}
          className="rounded-bl-sm rounded-br-sm bg-gradient-to-t to-slate-700 from-slate-300 shadow-icon"
        />
        <div
          style={{ width: scale3, height: scale4 }}
          className="rounded-bl-sm rounded-br-sm bg-gradient-to-t to-slate-700 from-slate-300 shadow-icon"
        />
        <div
          style={{ width: scale3, height: scale4 }}
          className="rounded-bl-sm rounded-br-sm bg-gradient-to-t to-slate-700 from-slate-300 shadow-icon"
        />
        <div
          style={{ width: scale3, height: scale4 }}
          className="rounded-bl-sm rounded-br-sm bg-gradient-to-t to-slate-700 from-slate-300 shadow-icon"
        />
      </div>
    </>
  );
};

export default DataConnectors;
