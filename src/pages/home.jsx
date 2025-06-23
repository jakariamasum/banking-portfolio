import { FaStar } from "react-icons/fa6";
import { homeContent } from "../constant";
import CTA from "../components/cta";
import Button from "../components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="hero-gradient py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Bank{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                  Intelligently
                </span>
                ,<br />
                Live{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                  Effortlessly
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl">
                Experience seamless digital finance with intelligent budgeting,
                smart investing, and control at your fingertips.
              </p>
              <div className="mt-8">
                <Button className="w-fit px-2 py-1" size="lg">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="border border-purple-400 w-72 h-48 card-gradient rounded-2xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300">
                  <div className="p-6 text-purple-600 ">
                    <div className="flex justify-between items-start mb-8">
                      <div className="text-sm opacity-80">NEVERBANK</div>
                      <div className="text-sm opacity-80">VISA</div>
                    </div>
                    <div className="text-lg font-mono tracking-wider mb-4">
                      •••• •••• •••• 1234
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-xs opacity-80">VALID THRU</div>
                        <div className="text-sm">12/28</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs opacity-80">CARDHOLDER</div>
                        <div className="text-sm">ABC</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-500 text-sm uppercase tracking-wide">
              Trusted by leading companies
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {homeContent.partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-gray-400">
                  {partner}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience seamless digital finance with intelligent budgeting,
              smart investing, and control at your fingertips.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeContent.steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-sm text-purple-600 font-medium mb-2">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Track and manage your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                  finances
                </span>{" "}
                from your phone
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We offer a user-friendly mobile app to help you manage your
                finances, track income, and control expenses.
              </p>
              <div className="flex space-x-4 mb-8">
                <Button variant="outline">App Store</Button>
                <Button variant="secondary">Google Play</Button>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-medium"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">10M+</div>
                  <div className="text-sm text-gray-600">Active users</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-fit md:w-96 h-96 bg-gradient-to-b from-gray-100 to-gray-200 rounded-3xl shadow-2xl p-4">
                  <div className="bg-white rounded-2xl h-full p-4 flex flex-col">
                    <div className="text-center mb-6">
                      <div className="text-sm text-gray-500">
                        Current Balance
                      </div>
                      <div className="text-3xl font-bold text-gray-900">
                        $3,567.12
                      </div>
                    </div>
                    <div className="space-y-4 flex-1">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Income</span>
                          <span className="text-sm font-medium text-green-600">
                            +$2,400
                          </span>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">
                            Expenses
                          </span>
                          <span className="text-sm font-medium text-red-600">
                            -$1,200
                          </span>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Savings</span>
                          <span className="text-sm font-medium text-blue-600">
                            $800
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button>View Details</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-72 h-48 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="p-6 text-white">
                    <div className="flex justify-between items-start mb-8">
                      <div className="text-sm opacity-80">NEVERBANK</div>
                      <div className="text-sm opacity-80">VISA</div>
                    </div>
                    <div className="text-lg font-mono tracking-wider mb-4">
                      •••• •••• •••• 5678
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-xs opacity-80">VALID THRU</div>
                        <div className="text-sm">12/28</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs opacity-80">CARDHOLDER</div>
                        <div className="text-sm">ABC</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Customize your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                  debit card
                </span>{" "}
                Design
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We give you complete freedom to design the debit card of your
                dreams. From color to design, and control over expenses.
              </p>
              <Button className="w-fit px-4 py-2">Get Card</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Thousands — Here's What They're Saying
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      <FaStar className="text-yellow-400" />
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default Home;
