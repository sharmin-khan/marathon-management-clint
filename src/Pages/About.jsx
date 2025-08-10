import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaRunning, FaUsers, FaTrophy, FaHeart, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { MdSportsScore, MdSecurity, MdAccessibility } from "react-icons/md";

const About = () => {
       useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const stats = [
    { number: "50+", label: "Marathons Organized", icon: FaRunning },
    { number: "10K+", label: "Happy Participants", icon: FaUsers },
    { number: "100+", label: "Cities Covered", icon: FaMapMarkerAlt },
    { number: "5+", label: "Years Experience", icon: FaTrophy }
  ];

  const features = [
    {
      icon: MdSecurity,
      title: "Secure Registration",
      description: "Your personal information and payment details are protected with industry-standard security measures."
    },
    {
      icon: MdAccessibility,
      title: "Easy Access",
      description: "User-friendly platform designed for runners of all experience levels and technical backgrounds."
    },
    {
      icon: MdSportsScore,
      title: "Real-time Updates",
      description: "Get instant notifications about race status, results, and important announcements."
    },
    {
      icon: FaHeart,
      title: "Community Support",
      description: "Join a community of passionate runners and get support throughout your marathon journey."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Former professional runner with 15+ years of experience in marathon organization."
    },
    {
      name: "Mike Chen",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Sports management expert specializing in large-scale athletic events."
    },
    {
      name: "Lisa Wang",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Tech enthusiast passionate about creating seamless digital experiences for athletes."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
       <Helmet>
              <title>About | MarathonPro</title>
            </Helmet>
      <div className="w-11/12 mx-auto py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Marathon Pro
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're passionate about connecting runners with the best marathon experiences. 
            Our platform makes it easy to discover, register, and participate in marathons 
            across the country while building a supportive community of athletes.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-blue-600 mb-4">
              <FaRunning size={48} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To democratize marathon participation by providing an accessible, 
              user-friendly platform that connects runners with quality events 
              and fosters a supportive community of athletes.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-yellow-500 mb-4">
              <FaTrophy size={48} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the leading platform for marathon discovery and registration, 
              empowering millions of runners to achieve their goals and create 
              lasting memories through organized athletic events.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 mb-4 flex justify-center">
                  <stat.icon size={40} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Marathon Pro?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-blue-600 mb-4 flex justify-center">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&h=300&fit=crop&crop=face";
                  }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <FaMapMarkerAlt size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-blue-100">
                123 Running Street<br />
                Marathon City, MC 12345
              </p>
            </div>
            <div>
              <FaPhone size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-blue-100">
                +1 (555) 123-4567<br />
                Mon-Fri 9AM-6PM
              </p>
            </div>
            <div>
              <FaEnvelope size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-blue-100">
                info@marathonpro.com<br />
                support@marathonpro.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 