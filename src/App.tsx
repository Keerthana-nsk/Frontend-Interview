import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogDetailPage from './pages/BlogDetailPage';
import NewBlogForm from './components/NewBlogForm';

export default function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        {/* Left Panel */}
        <aside className="w-1/3 border-r border-gray-200 bg-white p-4 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4 text-blue-600">CA Monk Blogs</h1>
          <NewBlogForm />
          <div className="mt-4">
            <BlogList />
          </div>
        </aside>

        {/* Right Panel */}
        <main className="w-2/3 p-6 overflow-y-auto">
          <Routes>
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            <Route path="/" element={<div className="text-gray-400 text-center mt-32">Select a blog to view details</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
