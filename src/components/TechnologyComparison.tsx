import React from 'react';
import { Code2, Globe, Layers, Zap } from 'lucide-react';

function TechnologyComparison() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900">JSP vs Angular</h2>
        <p className="mt-1 text-sm text-gray-500">Comparação entre as tecnologias web</p>
      </div>
      
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* JSP Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Globe className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">JSP (JavaServer Pages)</h3>
            </div>
            
            <div className="space-y-2">
              <p className="text-gray-700"><strong>Definição:</strong> Tecnologia Java que permite criar páginas web dinâmicas usando HTML com código Java embutido.</p>
              
              <h4 className="font-medium text-gray-900 mt-4">Características:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Execução no lado do servidor</li>
                <li>Parte do ecossistema Java EE</li>
                <li>Integração direta com servlets</li>
                <li>Bom para aplicações empresariais</li>
              </ul>

              <h4 className="font-medium text-gray-900 mt-4">Vantagens:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Fácil de aprender para desenvolvedores Java</li>
                <li>Boa performance para páginas simples</li>
                <li>Integração nativa com backend Java</li>
                <li>Suporte a tags customizadas (JSTL)</li>
              </ul>
            </div>
          </div>

          {/* Angular Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Layers className="h-6 w-6 text-red-600 mr-2" />
              <h3 className="text-xl font-semibold">Angular</h3>
            </div>
            
            <div className="space-y-2">
              <p className="text-gray-700"><strong>Definição:</strong> Framework JavaScript moderno para construção de aplicações web SPA (Single Page Applications).</p>
              
              <h4 className="font-medium text-gray-900 mt-4">Características:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Baseado em TypeScript</li>
                <li>Arquitetura baseada em componentes</li>
                <li>Sistema de módulos robusto</li>
                <li>Ferramentas de desenvolvimento avançadas</li>
              </ul>

              <h4 className="font-medium text-gray-900 mt-4">Vantagens:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Desenvolvimento mais rápido de SPAs</li>
                <li>Melhor experiência do usuário</li>
                <li>Forte sistema de tipos com TypeScript</li>
                <li>Grande ecossistema de bibliotecas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center mb-3">
            <Code2 className="h-5 w-5 text-purple-600 mr-2" />
            <h4 className="font-medium text-gray-900">Quando Usar Cada Um?</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium text-gray-900">Use JSP quando:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 mt-2">
                <li>Precisar de renderização no servidor</li>
                <li>Trabalhar com aplicações Java existentes</li>
                <li>Desenvolver aplicações empresariais tradicionais</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-900">Use Angular quando:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 mt-2">
                <li>Desenvolver aplicações web modernas e complexas</li>
                <li>Precisar de uma arquitetura robusta e escalável</li>
                <li>Trabalhar com equipes grandes e projetos empresariais modernos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyComparison;