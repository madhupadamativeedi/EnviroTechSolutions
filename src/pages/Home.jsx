import { Link } from "react-router-dom";
import { useEffect } from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import StatCard from "../components/StatCard";
import ServiceCard from "../components/ServiceCard";
import AccreditationGrid from "../components/AccreditationGrid";
import CTA from "../components/CTA";
import { stats } from "../data/stats";
import { serviceCategories, serviceBenefits } from "../data/services";
import { certifications } from "../data/certifications";
import { updatePageMeta, updateStructuredData } from "../lib/seo";
import { getOrganizationSchema } from "../lib/schema";
import img1 from '../assets/home/img1.avif';
import img2 from '../assets/home/img2.avif';
import img3 from '../assets/home/img3.avif';
import img7 from '../assets/home/img7.jpeg';

function Home() {
  const defaultImages = [
    img1,
    img2,
    img3
  ];
  useEffect(() => {
    updatePageMeta({
      title:
        "EnviroTech Solutions - Environmental Testing & Engineering Services",
      description:
        "Leading environmental engineering and testing laboratory offering comprehensive solutions in air quality, water testing, waste management, and environmental compliance consultancy.",
    });
    updateStructuredData(getOrganizationSchema());
  }, []);

  return (
    <>
      <Hero
        title="Environmental Solutions for a Sustainable Future"
        description="Comprehensive testing, consultancy, and waste management services backed by ISO/NABL accreditation and multidisciplinary expertise."
        ctaText="Request a Quote"
        ctaLink="/enquiry"
      />

      {/* Stats Section */}
      {/* <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </div>
      </Section> */}

      {/* Services Section */}
      <Section
        id="services"
        title="Our Services"
        subtitle="End-to-end environmental solutions tailored to your industry and regulatory requirements"
        background="gray"
      >


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {serviceCategories.map((category, index) => (
            <ServiceCard
              key={category.id}
              title={category.title}
              description={category.description}
              // icon={category.icon}
              href={category.href}
              features={category.services.slice(0, 4).map((s) => s.name)}
              image={defaultImages[index % defaultImages.length]} 
            />
          ))}
        </div>

        {/* Service Benefits */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-accent-900 mb-8 text-center">
            Why Choose Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center text-xl mr-4">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-accent-900 mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-accent-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Certifications Section */}
      <Section
        id="certifications"
        title="Accreditations & Certifications"
        subtitle="Recognized by national and international bodies for quality and technical competence"
        background="white"
      >
        <AccreditationGrid certifications={certifications.slice(0, 6)} />
        <div className="text-center mt-8">
          <Link to="/certifications" className="btn-outline">
            View All Certifications
          </Link>
        </div>
      </Section>

      {/* About Preview */}
      <Section background="pattern">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-accent-900 mb-4">
              Multidisciplinary Expertise in Environmental Science
            </h2>
            <p className="text-lg text-accent-600 mb-6">
              With over 15 years of experience, we bring together environmental
              engineers, chemists, microbiologists, and consultants to deliver
              reliable, accurate, and actionable insights for your environmental
              challenges.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "State-of-the-art laboratory facilities",
                "NABL-accredited testing procedures",
                "Experienced technical team",
                "Rapid turnaround times",
                "Comprehensive reporting",
                "Onsite training and support",
              ].map((item, index) => (
                <li key={index} className="flex items-center text-accent-700">
                  <svg
                    className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
              {/* <div className="text-center p-8">
                <div className="text-8xl mb-4">🔬</div>
                <p className="text-xl font-semibold text-accent-800">
                  ISO 17025:2017 Accredited Laboratory
                </p>
              </div> */}
              <img src={img7} alt="ISO 17025"/>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Ready to Get Started?"
        description="Contact us today for a consultation or request a quote for your environmental testing and consultancy needs."
        primaryText="Request Quote"
        primaryLink="/enquiry"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
    </>
  );
}

export default Home;
