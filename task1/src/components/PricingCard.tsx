export type PricingCardProps = {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
};

export default function PricingCard({
  plan,
  price,
  features,
  isFeatured = false,
}: PricingCardProps) {
  const borderClr = isFeatured ? "white" : "gray-200";
  const borderClass = `border-${borderClr}`;
  const divideClass = `divide-${borderClr}`;

  const ringClass = isFeatured
    ? "focus:ring-white focus:ring-offset-gray-700"
    : "focus:ring-gray-400 focus:ring-offset-white";

  return (
    <div
      className={`flex flex-col items-center border w-64 sm:w-72 transition-transform duration-200 md:hover:scale-105 hover:shadow-lg
        ${isFeatured
          ? "bg-gray-700 text-white border-gray-600 sm:-mt-6 sm:-mb-3 z-10"
          : "bg-white text-gray-900 border-gray-200"}`}
    >
      <div className="pt-6 pb-0 px-6 flex flex-col items-center w-full">
        <h3
          className={`text-lg font-semibold mb-2 ${
            isFeatured ? "text-white" : "text-gray-800"
          }`}
        >
          {plan}
        </h3>
        <div className="text-5xl font-bold mb-6">{price}</div>
      </div>


      <ul
        className={`w-full text-center text-sm border-t ${borderClass} divide-y  ${divideClass} font-semibold`}
      >
        {features.map((feature, idx) => (
          <li key={idx} className="py-5">
            {feature}
          </li>
        ))}
      </ul>

      <div className={`w-full border-t ${borderClass} px-6 py-6`}>
        <button
          className={`cursor-pointer w-full py-4 text-sm font-semibold ${ringClass}
            focus:outline-none focus:ring-2 
            ${
              isFeatured
                ? "text-white hover:bg-gray-600"
                : "text-gray-900 hover:bg-gray-100"
            }`}
        >
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
}
