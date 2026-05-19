import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  User, Award, Calendar, BookOpen, Download, 
  TrendingUp, Medal, Target, Clock, CheckCircle,
  Share2, Edit2, Settings, Mail, MapPin, Briefcase,
  Camera, Save, X, Github, Linkedin, Twitter
} from 'lucide-react';
import { useAuth } from '../../main.jsx';

const Profile = () => {
  const { user, setUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: 'Passionate learner and technology enthusiast. Always eager to explore new technologies and build amazing things.',
    location: 'San Francisco, CA',
    occupation: 'Full Stack Developer',
    website: 'https://smartlearn.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  });
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const achievements = [
    { title: "7 Day Streak", icon: Calendar, date: "Earned 2 days ago", color: "orange", points: 100 },
    { title: "Course Master", icon: Award, date: "Earned 1 week ago", color: "purple", points: 500 },
    { title: "Quick Learner", icon: TrendingUp, date: "Earned 2 weeks ago", color: "blue", points: 250 },
    { title: "Offline Champion", icon: Download, date: "Earned 3 weeks ago", color: "green", points: 300 }
  ];

  const certificates = [
    { name: "React Development", date: "Dec 2023", credential: "REACT-2023-001", grade: "A+" },
    { name: "JavaScript Fundamentals", date: "Nov 2023", credential: "JS-2023-042", grade: "A" },
    { name: "Machine Learning Basics", date: "Oct 2023", credential: "ML-2023-089", grade: "A-" }
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        // Save to localStorage
        localStorage.setItem('profileImage', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = () => {
    // Update user in auth context
    const updatedUser = { ...user, name: profileData.name, email: profileData.email };
    if (setUser) {
      setUser(updatedUser);
    }
    localStorage.setItem('user', JSON.stringify(updatedUser));
    localStorage.setItem('profileData', JSON.stringify(profileData));
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleShare = async () => {
    const shareData = {
      title: 'SmartLearn Profile',
      text: `Check out my learning profile on SmartLearn! I've completed ${certificates.length} courses and earned ${achievements.length} achievements.`,
      url: window.location.href,
    };
    
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Copy to clipboard as fallback
        navigator.clipboard.writeText(window.location.href);
        alert('Profile link copied to clipboard!');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Profile link copied to clipboard!');
    }
  };

  // Load saved data on mount
  React.useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setImagePreview(savedImage);
    }
    const savedProfileData = localStorage.getItem('profileData');
    if (savedProfileData) {
      setProfileData(JSON.parse(savedProfileData));
    }
  }, []);

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-12"
        >
          <div className="luxury-card p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Profile Image with Upload */}
              <div className="relative group">
                <div className="w-32 h-32 rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #4F46E5, #8B5CF6)' }}>
                  {imagePreview ? (
                    <img src={imagePreview} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User className="w-16 h-16 text-white" />
                    </div>
                  )}
                </div>
                <button
                  onClick={() => fileInputRef.current.click()}
                  className="absolute bottom-0 right-0 p-2 rounded-full shadow-lg transition-all hover:scale-110"
                  style={{ background: '#4F46E5', color: 'white' }}
                >
                  <Camera className="w-4 h-4" />
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                {isEditing ? (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                      className="luxury-input text-2xl font-bold"
                      placeholder="Full Name"
                    />
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      className="luxury-input"
                      placeholder="Email"
                    />
                  </div>
                ) : (
                  <>
                    <h1 className="text-3xl font-bold mb-2 gradient-text">{profileData.name}</h1>
                    <p className="text-secondary mb-4">{profileData.email}</p>
                  </>
                )}
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="font-semibold">{achievements.length}</span>
                    <span className="text-sm text-secondary">Achievements</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-blue-400" />
                    <span className="font-semibold">12</span>
                    <span className="text-sm text-secondary">Courses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-green-400" />
                    <span className="font-semibold">127</span>
                    <span className="text-sm text-secondary">Hours</span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button 
                  onClick={handleShare}
                  className="px-4 py-2 btn-outline rounded-xl flex items-center gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                <button 
                  onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                  className="px-4 py-2 btn-primary rounded-xl flex items-center gap-2"
                >
                  {isEditing ? <Save className="w-4 h-4" /> : <Edit2 className="w-4 h-4" />}
                  {isEditing ? 'Save' : 'Edit Profile'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column */}
          <div className="space-y-6">
            {/* About Section - Editable */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="luxury-card p-6"
            >
              <h3 className="font-semibold text-lg mb-4">About Me</h3>
              {isEditing ? (
                <textarea
                  value={profileData.bio}
                  onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                  className="luxury-input w-full h-32 resize-none"
                  placeholder="Write something about yourself..."
                />
              ) : (
                <p className="text-secondary leading-relaxed">{profileData.bio}</p>
              )}
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-secondary">
                  <MapPin className="w-4 h-4" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.location}
                      onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                      className="luxury-input text-sm"
                    />
                  ) : (
                    <span>{profileData.location}</span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-secondary">
                  <Briefcase className="w-4 h-4" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.occupation}
                      onChange={(e) => setProfileData({ ...profileData, occupation: e.target.value })}
                      className="luxury-input text-sm"
                    />
                  ) : (
                    <span>{profileData.occupation}</span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-secondary">
                  <Mail className="w-4 h-4" />
                  <span>{profileData.email}</span>
                </div>
              </div>
            </motion.div>

            {/* Learning Stats */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="luxury-card p-6"
            >
              <h3 className="font-semibold text-lg mb-4">Learning Statistics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Course Completion</span>
                    <span>67%</span>
                  </div>
                  <div className="w-full rounded-full h-2" style={{ background: '#4F46E520' }}>
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '67%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Weekly Goal</span>
                    <span>8/12 hours</span>
                  </div>
                  <div className="w-full rounded-full h-2" style={{ background: '#4F46E520' }}>
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '66%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Quiz Average</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full rounded-full h-2" style={{ background: '#4F46E520' }}>
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links - Editable */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="luxury-card p-6"
            >
              <h3 className="font-semibold text-lg mb-4">Social Links</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-secondary" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.github}
                      onChange={(e) => setProfileData({ ...profileData, github: e.target.value })}
                      className="luxury-input flex-1 text-sm"
                    />
                  ) : (
                    <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="text-sm text-purple-500 hover:underline">
                      {profileData.github}
                    </a>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-secondary" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.linkedin}
                      onChange={(e) => setProfileData({ ...profileData, linkedin: e.target.value })}
                      className="luxury-input flex-1 text-sm"
                    />
                  ) : (
                    <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-purple-500 hover:underline">
                      {profileData.linkedin}
                    </a>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <Twitter className="w-5 h-5 text-secondary" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.twitter}
                      onChange={(e) => setProfileData({ ...profileData, twitter: e.target.value })}
                      className="luxury-input flex-1 text-sm"
                    />
                  ) : (
                    <a href={profileData.twitter} target="_blank" rel="noopener noreferrer" className="text-sm text-purple-500 hover:underline">
                      {profileData.twitter}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-xl font-semibold mb-4">Achievements</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="luxury-card p-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg`} style={{ background: `${achievement.color === 'orange' ? '#F59E0B' : achievement.color === 'purple' ? '#8B5CF6' : achievement.color === 'blue' ? '#3B82F6' : '#10B981'}15` }}>
                        <achievement.icon className={`w-5 h-5 text-${achievement.color === 'orange' ? 'orange' : achievement.color === 'purple' ? 'purple' : achievement.color === 'blue' ? 'blue' : 'green'}-400`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{achievement.title}</div>
                        <div className="text-xs text-secondary">{achievement.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-purple-500">+{achievement.points}</div>
                        <div className="text-xs text-secondary">XP</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certificates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold mb-4">Certificates</h2>
              <div className="space-y-3">
                {certificates.map((cert, index) => (
                  <div key={index} className="luxury-card p-4">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div>
                        <div className="font-semibold">{cert.name}</div>
                        <div className="text-xs text-secondary">{cert.date} • {cert.credential}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs px-2 py-1 rounded-full" style={{ background: '#10B98115', color: '#10B981' }}>
                          Grade: {cert.grade}
                        </span>
                        <button className="px-3 py-1 btn-outline rounded-lg text-sm">
                          View
                        </button>
                        <button className="px-3 py-1 btn-primary rounded-lg text-sm">
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Activity Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-xl font-semibold mb-4">Activity Timeline</h2>
              <div className="luxury-card p-6">
                <div className="space-y-4">
                  {[
                    { activity: "Completed lesson: Advanced React Hooks", time: "2 hours ago", type: "lesson" },
                    { activity: "Downloaded course: Machine Learning", time: "1 day ago", type: "download" },
                    { activity: "Earned '7 Day Streak' badge", time: "2 days ago", type: "achievement" },
                    { activity: "Started course: UI/UX Design", time: "3 days ago", type: "course" },
                    { activity: "Completed quiz with 95% score", time: "5 days ago", type: "quiz" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 pb-4 border-b last:border-0" style={{ borderColor: '#4F46E520' }}>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#4F46E515' }}>
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{activity.activity}</div>
                        <div className="text-xs text-secondary mt-1">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;