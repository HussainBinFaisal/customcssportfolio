export default function Contact() {
    return (
      <div className="bg-gradient-to-r from-teal-500 via-blue-600 to-indigo-700 min-h-screen text-white py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-5xl font-extrabold text-center mb-8">
            Contact Me
          </h1>
  
          {/* contact formk*/}
          <form className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition duration-200"
                required
              />
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition duration-200"
                required
              />
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg text-gray-700 mb-2">
                Message
              </label>
              <input
                type="text"
                id="message"
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition duration-200"
                required
              />
            </div>
  
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-teal-400 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 transition duration-300"
            >
              Send Message
            </button>
          </form>
  
          {/* Footer s*/}
          <footer className="text-center mt-12 text-gray-300">
            <p>Feel free to reach out to me for any inquiries!</p>
            <p>Copyright © 2024 - Hussain</p>
          </footer>
        </div>
      </div>
    );
  }
  