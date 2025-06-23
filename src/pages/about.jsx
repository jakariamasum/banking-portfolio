import Hero from "../components/hero";
import { FaBook } from "react-icons/fa";
import { GiOnTarget } from "react-icons/gi";
import { aboutContent } from "../constant";
import CTA from "../components/cta";

const About = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Hero title={aboutContent.title} about={aboutContent.about} />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {aboutContent.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At NeverBank, we believe that everyone deserves access to
                intelligent, secure, and user-friendly financial services. Our
                mission is to democratize banking by leveraging cutting-edge
                technology to create solutions that adapt to your lifestyle.
              </p>
              <p className="text-lg text-gray-600">
                We're not just another bank – we're your financial partner,
                committed to helping you achieve your goals through smart
                budgeting, intelligent insights, and seamless money management.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-64 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl">
                    <GiOnTarget className="text-purple-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape the way we
              serve our customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutContent.values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience
              in finance, technology, and design.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutContent.team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  className="w-32 h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4"
                  src={member.image}
                  alt={member.name}
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <div className="text-purple-600 font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-64 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl">
                    {" "}
                    <FaBook className="text-purple-600" />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020 by a team of financial technology veterans,
                NeverBank was born from the frustration of dealing with outdated
                banking systems and poor user experiences. We saw an opportunity
                to build something better – a bank that truly understands the
                needs of modern consumers.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Starting with just a small team and a big vision, we've grown to
                serve millions of customers worldwide. Our journey has been
                marked by continuous innovation, customer-centric design, and an
                unwavering commitment to security and transparency.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to be at the forefront of the fintech
                revolution, constantly pushing the boundaries of what's possible
                in digital banking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default About;
