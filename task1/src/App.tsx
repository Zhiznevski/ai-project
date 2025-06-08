import PricingCard from './components/PricingCard'
import { plans } from './mocks/data'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex flex-col gap-10 items-center font-mont">
      <h1 className="text-3xl font-bold text-center text-white mb-12">
        Pricing
      </h1>
      <div className="flex flex-col sm:flex-row justify-center">
        {plans.map((p) => (
          <PricingCard
            key={p.plan}
            plan={p.plan}
            price={p.price}
            features={p.features}
            isFeatured={p.isFeatured}
          />
        ))}
      </div>
    </div>
  );
}
export default App
