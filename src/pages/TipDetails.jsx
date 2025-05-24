import React, { useState } from 'react';
import { Heart, Calendar, Leaf, Share2, Bookmark } from 'lucide-react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const TipDetails = () => {
  const data = useLoaderData();
  const {
    image,
    title,
    category,
    difficulty,
    plantType,
    description,
    authorName,
    authorImage,
    date,
    blogContent,
    likes: initialLikes,
    _id,
  } = data;
  const [likes, setLikes] = useState(initialLikes || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleLike = () => {
    const newLikeStatus = !isLiked;
    const newLikesCount = newLikeStatus ? likes + 1 : likes - 1;

    // Update in database
    fetch(`http://localhost:3000/tip/${_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ likes: newLikesCount }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setIsLiked(newLikeStatus);
          setLikes(newLikesCount);
          console.log(data);
        }
      })
      .catch((err) => {
        setIsLiked(!newLikeStatus);
        setLikes(initialLikes);
        toast.error('Failed to update likes');
        console.error(err);
      });
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          {/* Hero Image */}
          <div className="relative h-96 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {category}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
                    difficulty
                  )}`}
                >
                  {difficulty}
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {plantType}
                </span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {title}
            </h1>

            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {description}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-between mb-8 pb-6 border-b border-gray-200">
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <div className="flex items-center space-x-3">
                  <img
                    src={authorImage}
                    alt={authorName}
                    className="w-12 h-12 rounded-full border-2 border-green-200"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{authorName}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{date}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLike}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                    isLiked
                      ? 'bg-red-100 text-red-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500'
                  }`}
                >
                  <Heart
                    className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`}
                  />
                  <span>{likes}</span>
                </button>

                <button
                  onClick={handleBookmark}
                  className={`p-2 rounded-full transition-all ${
                    isBookmarked
                      ? 'bg-yellow-100 text-yellow-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-yellow-50 hover:text-yellow-500'
                  }`}
                >
                  <Bookmark
                    className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`}
                  />
                </button>

                <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-500 transition-all">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg prose-green max-w-none">
              {blogContent}
            </div>

            {/* Call to Action */}
            <div className="mt-12 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-2">
                Ready to Start Gardening ?
              </h3>
              <p className="text-green-700 mb-4">
                Join thousands of passionate gardeners who have transformed
                their green spaces with the help of our platform. Discover
                expert tips, step-by-step guides, and a supportive community to
                start your gardening journey today!
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
                Get Started Guide
              </button>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Leaf className="h-6 w-6 text-green-600 mr-2" />
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">
                Traditional Composting Methods
              </h3>
              <p className="text-gray-600 text-sm">
                Learn about hot and cold composting techniques for your
                backyard.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">
                Organic Fertilizers Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Discover natural ways to feed your plants and improve soil
                health.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TipDetails;
