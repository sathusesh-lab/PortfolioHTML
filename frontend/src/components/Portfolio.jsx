import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Phone, Mail, Linkedin, Download, MapPin } from 'lucide-react';
import { profileData, tabsData, skills } from '../mock';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('about');

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
          <div className="text-center py-12">
            <h3 className="text-2xl font-light text-black mb-4">Product Management</h3>
            <p className="text-gray-500 mb-8">Coming soon...</p>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded"></div>
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
      
      {/* Top Navigation Tabs - Oval Shape, Lower Position */}
      <div className="relative">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-gray-100">
            <nav className="flex space-x-6 justify-center">
              <button
                onClick={() => handleTabClick('about')}
                className={`px-4 py-2 text-sm font-medium transition-all rounded-full ${
                  activeTab === 'about' 
                    ? 'bg-black text-white' 
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
                }`}
              >
                ABOUT ME
              </button>
              <button
                onClick={() => handleTabClick('product')}
                className={`px-4 py-2 text-sm font-medium transition-all rounded-full ${
                  activeTab === 'product' 
                    ? 'bg-black text-white' 
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
                }`}
              >
                PRODUCT MANAGEMENT
              </button>
              <button
                onClick={() => handleTabClick('program')}
                className={`px-4 py-2 text-sm font-medium transition-all rounded-full ${
                  activeTab === 'program' 
                    ? 'bg-black text-white' 
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
                }`}
              >
                PROGRAM MANAGEMENT
              </button>
              <button
                onClick={() => handleTabClick('developer')}
                className={`px-4 py-2 text-sm font-medium transition-all rounded-full ${
                  activeTab === 'developer' 
                    ? 'bg-black text-white' 
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
                }`}
              >
                DEVELOPMENT EXPERIENCE
              </button>
              <button
                onClick={() => handleTabClick('hobbies')}
                className={`px-4 py-2 text-sm font-medium transition-all rounded-full ${
                  activeTab === 'hobbies' 
                    ? 'bg-black text-white' 
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
                }`}
              >
                HOBBIES
              </button>
              <button
                onClick={() => handleTabClick('resume')}
                className="px-4 py-2 text-sm font-medium transition-all rounded-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                RESUME
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex min-h-screen">
        
        {/* Left Side - Profile Image Only - 30% */}
        <div className="w-[30%]">
          <div className="h-screen">
            <img 
              src={profileData.profileImage}
              alt="Bhuvaneshwari Seshachalam"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Main Content - 70% */}
        <div className="w-[70%] bg-white p-12 flex flex-col justify-center pt-24">
          <div className="max-w-4xl mx-auto">
            
            {/* Hero Content */}
            <div className="mb-12">
              {/* Greeting */}
              <h1 className="text-sm text-gray-400 mb-4 tracking-[0.2em] uppercase font-medium">
                HELLO!
              </h1>
              
              {/* Main Title - Smaller font to fit in one line */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;