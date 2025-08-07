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
          <div className="space-y-8">
            <h2 className="text-3xl font-light text-black mb-8">Recent Experience</h2>
            
            {/* Capillary Technologies */}
            <div className="border-l-4 border-orange-500 pl-6 mb-8">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-black">Capillary Technologies</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-orange-500 font-medium">Senior Product Manager</span>
                  <span className="text-gray-500 text-sm">October 2024 - Present</span>
                </div>
                <span className="text-gray-500 text-sm">Bengaluru</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                As a Senior Product Manager, collaborated with senior Architects to solve organization wide time zone standardization project and streamlined cross-region operations by correcting ingestion, processing and reporting across platforms.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 pl-4 py-3 rounded-r">
                <p className="text-gray-700 font-medium">Key Impact:</p>
                <p className="text-gray-600">
                  This improved data integrity and customer trust across time sensitive workflows by reduced defects and operational escalations from time zone mismatches by <span className="font-semibold text-green-600">90%</span>.
                </p>
              </div>
            </div>

            {/* Reward360 Global Services */}
            <div className="border-l-4 border-orange-500 pl-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-black">Reward360 Global Services Pvt Ltd</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-orange-500 font-medium">Product Manager</span>
                  <span className="text-gray-500 text-sm">January 2023 - April 2023</span>
                </div>
                <span className="text-gray-500 text-sm">Bengaluru</span>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Assessed and presented to the CEO - top 20 financial institutions competitive engagement trends and developed value prop, strategy, roadmap & requirements for an engaging product with deep dive into bin restrictions and smart redirection models.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Orchestrated end to end lifecycle of product for the largest bank in India – HDFC cascading brand specific changes to premium card holders in 6 microsites.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 rounded-r">
                  <p className="text-gray-700 font-medium mb-2">Key Outcomes:</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Reduced page load time by <span className="font-semibold text-blue-600">30%</span></li>
                    <li>• Revolutionized the branding of 6 microsite based on most trending UI/UX changes and customer feedback</li>
                    <li>• Increased customer retention by <span className="font-semibold text-blue-600">42%</span></li>
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
          <div className="text-center py-12">
            <h2 className="text-3xl font-light text-black mb-8">Practice / Learning</h2>
            <p className="text-gray-500 mb-8">Content coming soon...</p>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded"></div>
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
          <div className="flex h-full">
            {/* Left Sidebar Navigation */}
            <div className="w-1/3 pr-8 border-r border-gray-200">
              <h3 className="text-lg font-medium text-black mb-6">Product Management</h3>
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveProductSection('recent')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeProductSection === 'recent'
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-600 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  Recent Experience
                </button>
                <button
                  onClick={() => setActiveProductSection('entrepreneurial')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeProductSection === 'entrepreneurial'
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-600 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  Entrepreneurial Experience
                </button>
                <button
                  onClick={() => setActiveProductSection('learning')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeProductSection === 'learning'
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-600 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  Practice / Learning
                </button>
              </nav>
            </div>
            
            {/* Right Content Area */}
            <div className="w-2/3 pl-8">
              {renderProductManagementContent()}
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
        
        {/* Left Side - Profile Image Only - 40% */}
        <div className="w-[40%]">
          <div className="h-screen">
            <img 
              src={profileData.profileImage}
              alt="Bhuvaneshwari Seshachalam"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Main Content - 60% */}
        <div className="w-[60%] bg-white p-12 flex flex-col justify-center pt-32">
          <div className="max-w-4xl mx-auto">
            
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