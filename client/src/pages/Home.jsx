import { Link } from 'react-router-dom'
import { ArrowRight, FileText, Users, MessageSquare } from 'lucide-react'

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to MERN Blog
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A modern blog platform built with the MERN stack
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/posts"
            className="btn btn-primary flex items-center space-x-2"
          >
            <span>Browse Posts</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/register"
            className="btn btn-secondary"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 py-12">
        <div className="text-center">
          <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="h-8 w-8 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Create Posts</h3>
          <p className="text-gray-600">
            Write and publish your thoughts with our rich text editor
          </p>
        </div>

        <div className="text-center">
          <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="h-8 w-8 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">User Community</h3>
          <p className="text-gray-600">
            Join our community of writers and readers
          </p>
        </div>

        <div className="text-center">
          <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="h-8 w-8 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Engage</h3>
          <p className="text-gray-600">
            Comment and interact with other users' posts
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to start blogging?
        </h2>
        <p className="text-gray-600 mb-6">
          Join our community and start sharing your thoughts with the world
        </p>
        <Link
          to="/register"
          className="btn btn-primary"
        >
          Create Account
        </Link>
      </div>
    </div>
  )
}

export default Home 