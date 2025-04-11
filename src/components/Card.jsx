const Card = ({ judul, deskripsi, buttons = [], src }) => {
  return (
    <div className="flex flex-col w-120 bg-white border-2 border-gray-200 shadow-md rounded-t-[100%] items-center justify-center transition delay-150 duration-300 ease-in hover:-translate-y-1 hover:scale-110">
      <img
        className="w-120 h-120 rounded-t-[100%] border-4 border-gray-100 border-t-purple-300 border-x-purple-300 "
        src={src}
        alt="Card Image"
      />
      <div
        className="p-4 md:p-5 text-center border-4 border-gray-100 border-b-purple-300 border-x-purple-300">
        <h3 className="text-2xl font-bold text-blue-900">{judul}</h3>
        <p className="mt-5 text-gray-500">{deskripsi}</p>

        <div className="mt-5 mb-3 flex flex-wrap gap-2 justify-center">
          {buttons.map((btn, index) => {
            const Icon = btn.icon;

            return (
              <a
                key={index}
                href={btn.href || "#"}
                className="py-2 px-2 inline-flex items-center gap-4 text-sm font-medium rounded-lg border-2   bg-blue-900 text-white hover:bg-white hover:border-2 hover:border-blue-900 hover:stroke-blue-900 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-90"
              >
                {Icon && <Icon size={21} className="hover:stroke-blue-900" />}
                {btn.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
