import React, { useState } from 'react';
import { Mail, Phone, Trash2, UserCircle } from 'lucide-react';
import { Contact } from '../types';

const MOCK_CONTACTS: Contact[] = [
  {
    id: '1',
    name: 'João Silva',
    email: 'joao@example.com',
    phone: '(11) 98765-4321',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Maria Santos',
    email: 'maria@example.com',
    phone: '(11) 91234-5678',
    createdAt: new Date().toISOString(),
  },
];

function ContactList() {
  const [contacts, setContacts] = useState<Contact[]>(MOCK_CONTACTS);

  const handleDelete = (id: string) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg font-medium text-gray-900">Meus Contatos</h2>
        <p className="mt-1 text-sm text-gray-500">Lista de todos os seus contatos.</p>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {contacts.map((contact) => (
            <li key={contact.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <UserCircle className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-lg font-medium text-gray-900">{contact.name}</div>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Mail className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                      {contact.email}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Phone className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                      {contact.phone}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="inline-flex items-center p-2 text-red-600 hover:text-red-900"
                  aria-label="Deletar contato"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ContactList;