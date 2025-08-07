import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Phone, Mail, Linkedin, Download, MapPin } from 'lucide-react';
import { profileData, tabsData, skills } from '../mock';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [activeProductSection, setActiveProductSection] = useState('recent');

  const handleResumeDownload = () => {
    window.open(profileData.resumeUrl, '_blank');
  };

  const handleTabClick = (tabValue) => {
    if (tabValue === 'resume') {
      handleResumeDownload();
      return;
    }
    setActiveTab(tabValue);
  };

  const renderProductManagementContent = () => {
    switch(activeProductSection) {
      case 'recent':
        return (
          <div className="space-y-6">
            {/* Header with Recent Experience title only */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-light text-black">Recent Experience</h2>
            </div>
            
            {/* Capillary Technologies */}
            <div className="bg-gradient-to-r from-orange-50 to-white border border-orange-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                <div className="mb-3 sm:mb-0">
                  <div className="flex items-center mb-2">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_portfolio-bhuvana/artifacts/wru4c7hu_CapillaryLogo.jpg" 
                      alt="Capillary Technologies Logo" 
                      className="w-10 h-10 rounded-lg mr-3 object-contain bg-white border border-gray-200"
                    />
                    <h3 className="text-lg font-semibold text-black">Capillary Technologies</h3>
                  </div>
                  <span className="text-orange-600 font-medium">Senior Product Manager</span>
                  <p className="text-gray-500 text-sm mt-1">Bengaluru</p>
                </div>
                <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  October 2024 - Present
                </div>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                  As a Senior Product Manager, collaborated with senior Architects to solve organization wide time zone standardization project and streamlined cross-region operations by correcting ingestion, processing and reporting across platforms.
                </p>
                
                <div className="bg-green-50 border-l-4 border-green-500 pl-4 py-3 rounded-r-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <p className="text-gray-800 font-semibold text-sm">Key Impact:</p>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Improved data integrity and customer trust across time sensitive workflows by reducing defects and operational escalations from time zone mismatches by <span className="font-bold text-green-600">90%</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Reward360 Global Services */}
            <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                <div className="mb-3 sm:mb-0">
                  <div className="flex items-center mb-2">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_portfolio-bhuvana/artifacts/o7qryihr_reward360_logo.jpeg" 
                      alt="Reward360 Logo" 
                      className="w-10 h-10 rounded-lg mr-3 object-contain bg-white border border-gray-200"
                    />
                    <h3 className="text-lg font-semibold text-black">Reward360 Global Services Pvt Ltd</h3>
                  </div>
                  <span className="text-blue-600 font-medium">Product Manager</span>
                  <p className="text-gray-500 text-sm mt-1">Bengaluru</p>
                </div>
                <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  January 2023 - April 2023
                </div>
              </div>
              
              <div className="prose prose-gray max-w-none space-y-3">
                <p className="text-gray-700 leading-relaxed text-sm">
                  Assessed and presented to the CEO - top 20 financial institutions competitive engagement trends and developed value prop, strategy, roadmap & requirements for an engaging product with deep dive into bin restrictions and smart redirection models.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Orchestrated end to end lifecycle of product for the largest bank in India – HDFC cascading brand specific changes to premium card holders in 6 microsites.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 rounded-r-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <p className="text-gray-800 font-semibold text-sm">Key Outcomes:</p>
                  </div>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
                      Reduced page load time by <span className="font-bold text-blue-600">30%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                      <span>Revolutionized the branding of 6 microsite based on most trending UI/UX changes and customer feedback</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
                      Increased customer retention by <span className="font-bold text-blue-600">42%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      case 'entrepreneurial':
        return (
          <div className="text-center py-12">
            <h2 className="text-3xl font-light text-black mb-8">Entrepreneurial Experience</h2>
            <p className="text-gray-500 mb-8">Content coming soon...</p>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded"></div>
          </div>
        );
      case 'learning':
        return (
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-light text-black">Practice / Learning</h2>
            </div>
            
            {/* EduSphere Project */}
            <div className="bg-gradient-to-r from-purple-50 to-white border border-purple-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">EduSphere</h3>
                  <p className="text-purple-600 font-medium text-lg mb-2">Revolutionising Math Education in India</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    A comprehensive educational platform designed to transform how mathematics is taught and learned across India, 
                    focusing on interactive learning experiences and personalized education paths.
                  </p>
                  <div className="flex space-x-4">
                    <a 
                      href="https://customer-assets.emergentagent.com/job_portfolio-bhuvana/artifacts/3zyozx8a_Landing%20Page.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                    >
                      View Landing Design
                    </a>
                    <a 
                      href="https://customer-assets.emergentagent.com/job_portfolio-bhuvana/artifacts/58x3qet3_Revolutionizing%20Math%20Education%20in%20India.pptx.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center border-2 border-purple-500 text-purple-600 hover:bg-purple-50 px-4 py-2 rounded-lg text-sm transition-colors"
                    >
                      View Full Presentation
                    </a>
                  </div>
                </div>
                <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium ml-4">
                  Learning Project
                </div>
              </div>
            </div>

            {/* Empower Cards for Kids */}
            <div className="bg-gradient-to-r from-green-50 to-white border border-green-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Empower Cards for Kids</h3>
                  <p className="text-green-600 font-medium text-lg mb-2">Educational Card Game System</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    An innovative card-based learning system designed to empower children through interactive play, 
                    fostering creativity, critical thinking, and emotional intelligence through gamified learning experiences.
                  </p>
                  <a 
                    href="https://customer-assets.emergentagent.com/job_portfolio-bhuvana/artifacts/5g9zbj0h_Bhuvaneshwari%20Seshachalam%20-%20Empower%20Cards.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                  >
                    View Project Details
                  </a>
                </div>
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium ml-4">
                  Learning Project
                </div>
              </div>
            </div>

            {/* Presence Attendance App */}
            <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Presence Attendance App</h3>
                  <p className="text-blue-600 font-medium text-lg mb-2">Smart Attendance Management System</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    A modern attendance tracking application designed to streamline attendance management through 
                    intuitive UI/UX design, featuring real-time tracking, analytics, and seamless user experience.
                  </p>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.figma.com/design/o5yhPstdjDbHWIO0v7pH7X/Presence--Attendance-App-?node-id=0-1&t=k9QryJnjyY3BLakX-1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                    >
                      View Figma Design
                    </a>
                    <a 
                      href="https://customer-assets.emergentagent.com/job_portfolio-bhuvana/artifacts/qls1v29e_Presence%20Attendance%20App%20-%20UX_UI.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg text-sm transition-colors"
                    >
                      View UX/UI Documentation
                    </a>
                  </div>
                </div>
                <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium ml-4">
                  Learning Project
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderTabContent = () => {
    switch(activeTab) {
      case 'about':
        return (
          <div className="space-y-6">
            {/* Minimalistic - no extra content */}
          </div>
        );
      case 'product':
        return (
          <div className="w-full min-h-screen relative">
            {/* Pure Background Image at Top - Moved down 10px */}
            <div 
              className="w-full h-64 bg-cover bg-center relative mt-2.5"
              style={{
                backgroundImage: `url('https://customer-assets.emergentagent.com/job_portfolio-bhuvana/artifacts/q03w0t9q_1619607869770.jpeg')`
              }}
            >
              {/* CSPO Certification Badge - Overlapping on background */}
              <div className="absolute -bottom-6 right-8 z-10">
                <a 
                  href="https://bcert.me/sxkvkhwur" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center bg-white border-2 border-orange-500 rounded-lg p-3 shadow-lg hover:shadow-xl">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_portfolio-bhuvana/artifacts/92g8efi6_badge-7224%20%282%29.png" 
                      alt="CSPO Certification" 
                      className="w-12 h-12 mr-3"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">Certified Scrum Product Owner</h3>
                      <p className="text-xs text-gray-600">Scrum Alliance Certification</p>
                      <p className="text-xs text-orange-500 mt-1">Click to verify →</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Main Content - Condensed Layout */}
            <div className="w-full bg-white">
              <div className="flex px-8 py-4">
                
                {/* Left Sidebar Navigation */}
                <div className="w-1/4 pr-6">
                  <div className="bg-gray-50 rounded-xl p-4 sticky top-24">
                    <h3 className="text-base font-medium text-black mb-4">Product Management</h3>
                    <nav className="space-y-2">
                      <button
                        onClick={() => setActiveProductSection('recent')}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all text-sm ${
                          activeProductSection === 'recent'
                            ? 'bg-orange-500 text-white shadow-md'
                            : 'text-gray-600 hover:text-black hover:bg-white hover:shadow-sm'
                        }`}
                      >
                        Recent Experience
                      </button>
                      <button
                        onClick={() => setActiveProductSection('entrepreneurial')}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all text-sm ${
                          activeProductSection === 'entrepreneurial'
                            ? 'bg-orange-500 text-white shadow-md'
                            : 'text-gray-600 hover:text-black hover:bg-white hover:shadow-sm'
                        }`}
                      >
                        Entrepreneurial Experience
                      </button>
                      <button
                        onClick={() => setActiveProductSection('learning')}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all text-sm ${
                          activeProductSection === 'learning'
                            ? 'bg-orange-500 text-white shadow-md'
                            : 'text-gray-600 hover:text-black hover:bg-white hover:shadow-sm'
                        }`}
                      >
                        Practice / Learning
                      </button>
                    </nav>
                  </div>
                </div>

                {/* Right Content Area */}
                <div className="w-3/4 pl-6">
                  {renderProductManagementContent()}
                </div>
              </div>
            </div>
          </div>
        );
      case 'program':
        return (
          <div className="text-center py-12">
            <h3 className="text-2xl font-light text-black mb-4">Program Management</h3>
            <p className="text-gray-500 mb-8">Coming soon...</p>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded"></div>
          </div>
        );
      case 'developer':
        return (
          <div className="text-center py-12">
            <h3 className="text-2xl font-light text-black mb-4">Development Experience</h3>
            <p className="text-gray-500 mb-8">Coming soon...</p>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded"></div>
          </div>
        );
      case 'hobbies':
        return (
          <div className="text-center py-12">
            <h3 className="text-2xl font-light text-black mb-4">Hobbies</h3>
            <p className="text-gray-500 mb-8">Coming soon...</p>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded"></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Top Navigation Tabs - Oval Shape, Lower Position, Thin Design */}
      <div className="relative">
        <div className="absolute top-[42px] left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg border border-gray-100">
            <nav className="flex space-x-4 justify-center items-center whitespace-nowrap">
              <button
                onClick={() => handleTabClick('about')}
                className={`px-3 py-1.5 text-xs font-medium transition-all rounded-full whitespace-nowrap ${
                  activeTab === 'about' 
                    ? 'bg-black text-white' 
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
                }`}
              >
                ABOUT ME
              </button>
              <button
                onClick={() => handleTabClick('product')}
                className={`px-3 py-1.5 text-xs font-medium transition-all rounded-full whitespace-nowrap ${
                  activeTab === 'product' 
                    ? 'bg-black text-white' 
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
                }`}
              >
                PRODUCT MANAGEMENT
              </button>
              <button
                onClick={() => handleTabClick('program')}
                className={`px-3 py-1.5 text-xs font-medium transition-all rounded-full whitespace-nowrap ${
                  activeTab === 'program' 
                    ? 'bg-black text-white' 
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
                }`}
              >
                PROGRAM MANAGEMENT
              </button>
              <button
                onClick={() => handleTabClick('developer')}
                className={`px-3 py-1.5 text-xs font-medium transition-all rounded-full whitespace-nowrap ${
                  activeTab === 'developer' 
                    ? 'bg-black text-white' 
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
                }`}
              >
                DEVELOPMENT EXPERIENCE
              </button>
              <button
                onClick={() => handleTabClick('hobbies')}
                className={`px-3 py-1.5 text-xs font-medium transition-all rounded-full whitespace-nowrap ${
                  activeTab === 'hobbies' 
                    ? 'bg-black text-white' 
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
                }`}
              >
                HOBBIES
              </button>
              <button
                onClick={() => handleTabClick('resume')}
                className="px-3 py-1.5 text-xs font-medium transition-all rounded-full bg-orange-500 hover:bg-orange-600 text-white whitespace-nowrap"
              >
                RESUME
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex min-h-screen">
        
        {/* Left Side - Profile Image Only - 40% - Only for About Me tab */}
        {activeTab === 'about' && (
          <div className="w-[40%]">
            <div className="h-screen">
              <img 
                src={profileData.profileImage}
                alt="Bhuvaneshwari Seshachalam"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Right Side - Main Content - 60% for About Me, 100% for other tabs */}
        <div className={`${activeTab === 'about' ? 'w-[60%]' : 'w-full'} bg-white ${activeTab === 'about' ? 'p-12' : 'p-0'} flex flex-col justify-center ${activeTab === 'about' ? 'pt-32' : 'pt-0'}`}>
          <div className={`${activeTab === 'about' ? 'max-w-4xl mx-auto' : 'w-full'}`}>
            
            {/* Show Home Content only for About Me tab */}
            {activeTab === 'about' && (
              <div className="mb-12">
                {/* Greeting */}
                <h1 className="text-sm text-gray-400 mb-4 tracking-[0.2em] uppercase font-medium">
                  HELLO!
                </h1>
                
                {/* Main Title */}
                <h2 className="text-4xl lg:text-5xl font-light text-black mb-8 leading-tight">
                  I'm <span className="text-orange-500 font-normal">Bhuvaneshwari Seshachalam</span>
                </h2>
                
                {/* Subtitle */}
                <p className="text-xl text-gray-600 mb-6 font-light leading-relaxed">
                  {profileData.title}
                </p>
                
                {/* Description */}
                <p className="text-gray-600 mb-8 text-base leading-relaxed">
                  {profileData.intro}
                </p>
                
                <p className="text-gray-600 mb-8 text-base leading-relaxed">
                  {profileData.experience}
                </p>

                {/* Contact Information */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-orange-500">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-medium">{profileData.contact.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-orange-500">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm font-medium">{profileData.contact.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-orange-500">
                    <Linkedin className="w-4 h-4" />
                    <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" 
                       className="text-sm font-medium hover:underline">
                      bhuvaneshwarisesha/
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-orange-500">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">Bengaluru, India</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab Content Area for non-About tabs */}
            {activeTab !== 'about' && (
              <div className="w-full h-full">
                {renderTabContent()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;