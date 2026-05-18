import React, { useState } from 'react';
import { Sun, Moon, Bell, Globe, Database, Download, Shield, Monitor, Save, Languages, Wifi, Volume2 } from 'lucide-react';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [language, setLanguage] = useState('english');
  const [dataSaver, setDataSaver] = useState(false);
  const [downloadQuality, setDownloadQuality] = useState('high');

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Settings</span>
          </h1>
          <p className="text-gray-400">Customize your learning experience</p>
        </div>

        <div className="space-y-6">
          {/* Appearance Settings */}
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Monitor className="w-5 h-5 mr-2 text-blue-400" />
              Appearance
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                  <div>
                    <div className="font-medium">Dark Mode</div>
                    <div className="text-sm text-gray-400">Switch between light and dark theme</div>
                  </div>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    darkMode ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    darkMode ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Bell className="w-5 h-5 mr-2 text-purple-400" />
              Notifications
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Push Notifications</div>
                  <div className="text-sm text-gray-400">Get reminders about your learning progress</div>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    notifications ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Email Notifications</div>
                  <div className="text-sm text-gray-400">Receive weekly progress reports</div>
                </div>
                <button
                  onClick={() => setEmailNotifications(!emailNotifications)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    emailNotifications ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    emailNotifications ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            </div>
          </div>

          {/* Download & Storage */}
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Download className="w-5 h-5 mr-2 text-orange-400" />
              Download & Storage
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Data Saver Mode</div>
                  <div className="text-sm text-gray-400">Reduce data usage and storage</div>
                </div>
                <button
                  onClick={() => setDataSaver(!dataSaver)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    dataSaver ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    dataSaver ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Download Quality</label>
                <select
                  value={downloadQuality}
                  onChange={(e) => setDownloadQuality(e.target.value)}
                  className="w-full glass rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="high">High (1080p) - More storage</option>
                  <option value="medium">Medium (720p) - Balanced</option>
                  <option value="low">Low (480p) - Save space</option>
                </select>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:shadow-lg transition-all">
              <Save className="w-4 h-4 inline mr-2" />
              Save All Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;