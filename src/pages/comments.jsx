import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { commentsContent } from "../constant";
import { FaThumbsUp } from "react-icons/fa";
import Button from "../components/ui/button";
import CTA from "../components/cta";
import Hero from "../components/hero";

const Comments = () => {
  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(5);
  const [comments, setComments] = useState(commentsContent);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        name: "You",
        avatar:
          "https://i.ibb.co/YQd9HKR/man-avatar-clipart-illustration-free-png.png",
        rating: rating,
        date: new Date().toISOString().split("T")[0],
        comment: newComment,
        helpful: 0,
        verified: false,
      };
      setComments([comment, ...comments]);
      setNewComment("");
      setRating(5);
    }
  };

  const averageRating =
    comments.reduce((sum, comment) => sum + comment.rating, 0) /
    comments.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: comments.filter((comment) => comment.rating === rating).length,
    percentage:
      (comments.filter((comment) => comment.rating === rating).length /
        comments.length) *
      100,
  }));

  return (
    <div className="min-h-screen">
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Hero
              title="Customer"
              about="See what our customers are saying about their NeverBank
              experience. Join thousands of satisfied users who have transformed
              their financial lives"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-6xl font-bold text-gray-900 mb-2">
                {averageRating.toFixed(1)}
              </div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-2xl ${
                      i < Math.floor(averageRating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    <FaStar className="text-yellow-400" />
                  </span>
                ))}
              </div>
              <p className="text-gray-600">
                Based on {comments.length} reviews
              </p>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Rating Distribution
              </h3>
              <div className="space-y-2">
                {ratingDistribution.map((item) => (
                  <div key={item.rating} className="flex items-center">
                    <span className="text-sm text-gray-600 w-8">
                      {item.rating}★
                    </span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-8">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Share Your Experience
            </h2>
            <form onSubmit={handleSubmitComment}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Rating
                </label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`text-2xl ${
                        star <= rating ? "text-yellow-400" : "text-gray-300"
                      } hover:text-yellow-400 transition-colors`}
                    >
                      <FaStar className="text-yellow-400" />
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Review
                </label>
                <textarea
                  id="comment"
                  rows={4}
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Share your experience with NeverBank..."
                  required
                />
              </div>
              <Button type="submit" className="w-fit px-4">
                Submit Review
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Comments List */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Customer Reviews
          </h2>
          <div className="space-y-8">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={comment.avatar}
                    className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center text-xl"
                  />

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-gray-900">
                          {comment.name}
                        </h3>
                        {comment.verified && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            Verified Customer
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-gray-500">
                        {comment.date}
                      </span>
                    </div>
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${
                            i < comment.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        >
                          <FaStar className="text-yellow-400" />
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4">{comment.comment}</p>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700">
                        <span>
                          <FaThumbsUp className="text-purple-500" />
                        </span>
                        <span>Helpful ({comment.helpful})</span>
                      </button>
                      <button className="text-sm text-gray-500 hover:text-gray-700">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default Comments;
