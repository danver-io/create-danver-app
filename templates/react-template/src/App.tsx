import "./App.css";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to My App
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get Started
          </h2>
          <p className="text-gray-600 mb-6">
            This is a sample page built with React and Tailwind CSS. Explore the
            components below.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Feature {item}
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor.
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 rounded-lg shadow-md p-8 text-white">
          <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="mb-6">
            Join thousands of users who are already using our platform to
            achieve their goals.
          </p>
          <Button
            variant="outline"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Sign Up Now
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500">
            © 2024 My App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
