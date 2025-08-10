import { useState } from "react";
import { FaSearch, FaCalendar, FaUser, FaTag, FaArrowRight, FaEnvelope } from "react-icons/fa";
import { MdTrendingUp, MdFitnessCenter, MdRestaurant, MdEmojiEvents } from "react-icons/md";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "Complete Marathon Training Guide for Beginners",
      excerpt: "Learn the essential steps to prepare for your first marathon with our comprehensive training guide.",
      author: "Coach Sarah Johnson",
      date: "2024-01-15",
      category: "training",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500",
      tags: ["beginner", "training", "marathon"],
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Nutrition Tips for Marathon Runners",
      excerpt: "Discover the best foods and hydration strategies to fuel your marathon performance.",
      author: "Dr. Mike Chen",
      date: "2024-01-12",
      category: "nutrition",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500",
      tags: ["nutrition", "hydration", "fueling"],
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "From Couch to Marathon: A Success Story",
      excerpt: "Follow John's incredible journey from being a non-runner to completing his first marathon.",
      author: "John Smith",
      date: "2024-01-10",
      category: "success-stories",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=500",
      tags: ["motivation", "success", "beginner"],
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "Advanced Training Techniques for Experienced Runners",
      excerpt: "Take your running to the next level with these advanced training methods and strategies.",
      author: "Coach Maria Rodriguez",
      date: "2024-01-08",
      category: "training",
      image: "https://images.unsplash.com/photo-1502904550040-7534597429ae?w=500",
      tags: ["advanced", "techniques", "performance"],
      readTime: "10 min read"
    },
    {
      id: 5,
      title: "Recovery and Rest: The Key to Better Performance",
      excerpt: "Understand why proper recovery is crucial for marathon training and how to implement it.",
      author: "Dr. Lisa Wang",
      date: "2024-01-05",
      category: "training",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500",
      tags: ["recovery", "rest", "performance"],
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "Mental Preparation for Marathon Success",
      excerpt: "Learn the psychological strategies that will help you overcome mental barriers during your race.",
      author: "Sports Psychologist Dr. James Wilson",
      date: "2024-01-03",
      category: "training",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500",
      tags: ["mental", "psychology", "motivation"],
      readTime: "9 min read"
    }
  ];

  const categories = [
    { id: "all", name: "All Posts", icon: MdTrendingUp, count: blogPosts.length },
    { id: "training", name: "Training", icon: MdFitnessCenter, count: blogPosts.filter(post => post.category === "training").length },
    { id: "nutrition", name: "Nutrition", icon: MdRestaurant, count: blogPosts.filter(post => post.category === "nutrition").length },
    { id: "success-stories", name: "Success Stories", icon: MdEmojiEvents, count: blogPosts.filter(post => post.category === "success-stories").length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularTags = ["marathon", "training", "nutrition", "beginner", "motivation", "recovery", "performance"];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Marathon Pro Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, training tips, and inspiring stories to help you achieve your marathon goals
          </p>
        </div>

        {/* Search and Categories */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, tips, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                  }`}
                >
                  <category.icon className="text-lg" />
                  <span>{category.name}</span>
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Article */}
        {filteredPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {filteredPosts[0].category.replace("-", " ").toUpperCase()}
                    </span>
                    <span className="text-gray-500 text-sm">{filteredPosts[0].readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {filteredPosts[0].title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FaUser className="text-gray-400" />
                      <span className="text-gray-700">{filteredPosts[0].author}</span>
                      <FaCalendar className="text-gray-400 ml-3" />
                      <span className="text-gray-700">{new Date(filteredPosts[0].date).toLocaleDateString()}</span>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                      Read More <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      {post.category.replace("-", " ").toUpperCase()}
                    </span>
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FaUser />
                      <span>{post.author}</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                      Read More <FaArrowRight className="text-sm" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
          <p className="text-blue-100 mb-6">
            Get the latest marathon tips, training advice, and success stories delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1 relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 text-gray-900 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
              />
            </div>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Popular Tags */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tags</h3>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors text-sm"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 