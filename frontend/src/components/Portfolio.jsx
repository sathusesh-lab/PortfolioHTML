import React, { useState } from 'react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Phone, Mail, Linkedin, Download, MapPin } from 'lucide-react';
import { profileData, tabsData, skills } from '../mock';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('about');

  const handleResumeDownload = () => {
    window.open(profileData.resumeUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">B</span>
              </div>
              <span className="text-xl font-light text-black">Bhuvaneshwari</span>
            </div>
            <Button 
              onClick={handleResumeDownload}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column - Profile */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              {/* Profile Image */}
              <div className="mb-8">
                <img 
                  src={profileData.profileImage}
                  alt="Bhuvaneshwari Seshachalam"
                  className="w-80 h-96 object-cover rounded-2xl mx-auto lg:mx-0 shadow-lg grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Contact Info */}
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4 text-black">Get in Touch</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-600 hover:text-black transition-colors">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">{profileData.contact.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600 hover:text-black transition-colors">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">{profileData.contact.email}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600 hover:text-black transition-colors">
                      <Linkedin className="w-4 h-4" />
                      <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
                        LinkedIn Profile
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">India</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="border-0 shadow-sm mt-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4 text-black">Core Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-100 text-black hover:bg-gray-200 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7">
            {/* Hero Section */}
            <div className="mb-12">
              <h1 className="text-sm text-gray-500 mb-2 tracking-wider uppercase">HELLO!</h1>
              <h2 className="text-5xl lg:text-6xl font-light text-black mb-6 leading-tight">
                I'm <span className="text-orange-500">Bhuvaneshwari</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 font-light leading-relaxed">
                {profileData.title}
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {profileData.intro}
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                {profileData.experience}
              </p>
            </div>

            {/* Tabs Navigation */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-5 bg-gray-50 p-1 rounded-lg mb-8">
                <TabsTrigger value="about" className="text-sm data-[state=active]:bg-white data-[state=active]:text-black">
                  About Me
                </TabsTrigger>
                <TabsTrigger value="product" className="text-sm data-[state=active]:bg-white data-[state=active]:text-black">
                  Product Mgmt
                </TabsTrigger>
                <TabsTrigger value="program" className="text-sm data-[state=active]:bg-white data-[state=active]:text-black">
                  Program Mgr
                </TabsTrigger>
                <TabsTrigger value="developer" className="text-sm data-[state=active]:bg-white data-[state=active]:text-black">
                  Developer
                </TabsTrigger>
                <TabsTrigger value="hobbies" className="text-sm data-[state=active]:bg-white data-[state=active]:text-black">
                  Hobbies
                </TabsTrigger>
              </TabsList>

              {/* Tab Content */}
              <TabsContent value="about" className="mt-0">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-8">
                    <div className="space-y-8">
                      {tabsData.aboutMe.content.map((item, index) => (
                        <div key={index}>
                          <h3 className="text-xl font-medium text-black mb-3">{item.section}</h3>
                          <p className="text-gray-600 leading-relaxed">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="product" className="mt-0">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-8">
                    <div className="text-center py-12">
                      <h3 className="text-2xl font-light text-black mb-4">Product Management</h3>
                      <p className="text-gray-500 mb-8">Coming soon...</p>
                      <div className="w-24 h-1 bg-orange-500 mx-auto rounded"></div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="program" className="mt-0">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-8">
                    <div className="text-center py-12">
                      <h3 className="text-2xl font-light text-black mb-4">Program Manager</h3>
                      <p className="text-gray-500 mb-8">Coming soon...</p>
                      <div className="w-24 h-1 bg-orange-500 mx-auto rounded"></div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="developer" className="mt-0">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-8">
                    <div className="text-center py-12">
                      <h3 className="text-2xl font-light text-black mb-4">Developer</h3>
                      <p className="text-gray-500 mb-8">Coming soon...</p>
                      <div className="w-24 h-1 bg-orange-500 mx-auto rounded"></div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="hobbies" className="mt-0">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-8">
                    <div className="text-center py-12">
                      <h3 className="text-2xl font-light text-black mb-4">Hobbies</h3>
                      <p className="text-gray-500 mb-8">Coming soon...</p>
                      <div className="w-24 h-1 bg-orange-500 mx-auto rounded"></div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © 2025 Bhuvaneshwari Seshachalam. Crafted with passion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;