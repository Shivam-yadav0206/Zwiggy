//import { BB_IMAGE_URL } from "../config";

const CategoryCard = ({ name, image}) => {
  return (
    <li className="item_wrap food">
      <div className="h-56 grid place-items-center bg-primaryColorLight dark:bg-darkColorLight dark:hover:bg-secondaryColor rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
        <img
          src={image}
          alt={name}
          className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
        />
      </div>

      <div className="pt-5">
        <div className="mb-2">
          <h4 className="card__title">{name}</h4>
          <div className="max-w-xs overflow-hidden">
            {/* <p className="truncate paragraph hover:line-clamp-none">
              {cuisines?.join(", ")}
            </p> */}
          </div>
          {/* <p className="paragraph">{locality}</p> */}
        </div>
        <div className="flex justify-between">
          <p className="text-secondaryColor">Starts from Rs99</p>
          <button
            type="button"
            className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View More
          </button>
        </div>
      </div>
    </li>
  );
};
export default CategoryCard;
