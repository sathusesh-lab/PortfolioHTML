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
            <h3 className="text-2xl font-light text-black mb-4">Program Manager</h3>
            <p className="text-gray-500 mb-8">Coming soon...</p>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded"></div>
          </div>
        );
      case 'developer':
        return (
          <div className="text-center py-12">
            <h3 className="text-2xl font-light text-black mb-4">Developer</h3>
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
      <div className="flex min-h-screen">
        
        {/* Left Side - Profile Image with Overlay Navigation */}
        <div className="relative w-1/2 min-h-screen">
          {/* Profile Image */}
          <div className="absolute inset-0">
            <img 
              src={profileData.profileImage}
              alt="Bhuvaneshwari Seshachalam"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>
          
          {/* Navigation Overlay */}
          <div className="absolute top-0 left-0 right-0 p-8">
            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              {/* Logo/Brand */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">B</span>
                </div>
                <span className="text-xl font-light text-black">BHUVANESHWARI</span>
              </div>
              
              {/* Navigation Tabs */}
              <nav className="flex space-x-4 flex-wrap">
                <button
                  onClick={() => handleTabClick('about')}
                  className={`px-4 py-2 text-sm font-medium transition-all rounded-lg ${
                    activeTab === 'about' 
                      ? 'bg-black text-white' 
                      : 'text-gray-600 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  ABOUT ME
                </button>
                <button
                  onClick={() => handleTabClick('product')}
                  className={`px-4 py-2 text-sm font-medium transition-all rounded-lg ${
                    activeTab === 'product' 
                      ? 'bg-black text-white' 
                      : 'text-gray-600 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  PRODUCT MANAGEMENT
                </button>
                <button
                  onClick={() => handleTabClick('program')}
                  className={`px-4 py-2 text-sm font-medium transition-all rounded-lg ${
                    activeTab === 'program' 
                      ? 'bg-black text-white' 
                      : 'text-gray-600 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  PROGRAM MANAGER
                </button>
                <button
                  onClick={() => handleTabClick('developer')}
                  className={`px-4 py-2 text-sm font-medium transition-all rounded-lg ${
                    activeTab === 'developer' 
                      ? 'bg-black text-white' 
                      : 'text-gray-600 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  DEVELOPER
                </button>
                <button
                  onClick={() => handleTabClick('hobbies')}
                  className={`px-4 py-2 text-sm font-medium transition-all rounded-lg ${
                    activeTab === 'hobbies' 
                      ? 'bg-black text-white' 
                      : 'text-gray-600 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  HOBBIES
                </button>
                <button
                  onClick={() => handleTabClick('resume')}
                  className="px-4 py-2 text-sm font-medium transition-all rounded-lg bg-orange-500 hover:bg-orange-600 text-white"
                >
                  RESUME
                </button>
              </nav>
            </div>
          </div>
        </div>

        {/* Right Side - Main Content */}
        <div className="w-1/2 bg-white p-12 flex flex-col justify-center">
          {/* Hero Content */}
          <div className="max-w-2xl">
            {/* Greeting */}
            <h1 className="text-sm text-gray-400 mb-4 tracking-[0.2em] uppercase font-medium">
              HELLO!
            </h1>
            
            {/* Main Title */}
            <h2 className="text-6xl font-light text-black mb-8 leading-tight">
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
            <div className="space-y-3 mb-8">
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
                  linkedin.com/in/bhuvaneshwarisesha/
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Bengaluru, India</span>
              </div>
            </div>

            {/* Tab Content */}
            <div className="mt-12 p-6 bg-gray-50 rounded-xl">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;