import React from 'react';
import { UserPlus, Users, Code } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import TechnologyComparison from './components/TechnologyComparison';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex space-x-4">
                <Link to="/" className="flex items-center px-2 py-2 text-gray-700 hover:text-blue-600">
                  <Users className="h-6 w-6 mr-2" />
                  <span className="font-medium">Meus Contatos</span>
                </Link>
                <Link to="/tecnologias" className="flex items-center px-2 py-2 text-gray-700 hover:text-blue-600">
                  <Code className="h-6 w-6 mr-2" />
                  <span className="font-medium">Tecnologias</span>
                </Link>
              </div>
              <div className="flex items-center">
                <Link
                  to="/novo"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  <UserPlus className="h-5 w-5 mr-2" />
                  Novo Contato
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/novo" element={<ContactForm />} />
            <Route path="/tecnologias" element={<TechnologyComparison />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;