
const Card = ({ judul, deskripsi, buttons = [], src }) => {
  return (
    <div className="flex flex-col w-100 bg-white border-2 border-gray-200 shadow-md rounded-2xl items-center justify-center">
      <img className="w-100 h-100 rounded-t-xl" src={src} alt="Card Image" />
      <div className="p-4 md:p-5 text-center">
        <h3 className="text-2xl font-bold text-blue-900">{judul}</h3>
        <p className="mt-3 text-gray-500">{deskripsi}</p>

        <div className="mt-4 mb-3 flex flex-wrap gap-2 justify-center">
          {buttons.map((btn, index) => {
            const Icon = btn.icon;

            return (
              <a
                key={index}
                href={btn.href || "#"}
                className="py-2 px-2 inline-flex items-center gap-4 text-sm font-medium rounded-lg border border-transparent bg-blue-900 text-white hover:bg-blue-500 hover:border-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              >
                {Icon && <Icon size={20} />}
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
