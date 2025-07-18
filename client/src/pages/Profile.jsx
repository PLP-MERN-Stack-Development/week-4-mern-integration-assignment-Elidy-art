import { useAuth } from '../context/AuthContext'

const Profile = () => {
  const { user } = useAuth()

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Profile</h1>
      
      <div className="card p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <p className="text-lg">{user?.username}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="text-lg">{user?.email}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <p className="text-lg capitalize">{user?.role}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Member Since</label>
            <p className="text-lg">{new Date(user?.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile 