import { useState } from 'react';
import { Pencil, Trash2, X, Check } from 'lucide-react';
import { ProgrammingLanguage } from '../data/languages';

interface LanguageCardProps {
  language: ProgrammingLanguage;
  onDelete: (id: number) => void;
  onUpdate: (language: ProgrammingLanguage) => void;
}

export function LanguageCard({ language, onDelete, onUpdate }: LanguageCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedLanguage, setEditedLanguage] = useState(language);

  const demandColor = {
    'Low': 'bg-red-100 text-red-800',
    'Medium': 'bg-yellow-100 text-yellow-800',
    'High': 'bg-green-100 text-green-800',
    'Very High': 'bg-emerald-100 text-emerald-800',
  }[language.industryDemand];

  const difficultyColor = {
    'Easy': 'bg-green-100 text-green-800',
    'Medium': 'bg-yellow-100 text-yellow-800',
    'Hard': 'bg-red-100 text-red-800',
  }[language.learningCurve];

  const handleSave = () => {
    onUpdate(editedLanguage);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Icon</label>
            <input
              type="text"
              value={editedLanguage.icon}
              onChange={(e) => setEditedLanguage({ ...editedLanguage, icon: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={editedLanguage.name}
              onChange={(e) => setEditedLanguage({ ...editedLanguage, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Best For</label>
            <input
              type="text"
              value={editedLanguage.bestFor}
              onChange={(e) => setEditedLanguage({ ...editedLanguage, bestFor: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Learning Curve</label>
            <select
              value={editedLanguage.learningCurve}
              onChange={(e) => setEditedLanguage({ ...editedLanguage, learningCurve: e.target.value as 'Easy' | 'Medium' | 'Hard' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Industry Demand</label>
            <select
              value={editedLanguage.industryDemand}
              onChange={(e) => setEditedLanguage({ ...editedLanguage, industryDemand: e.target.value as 'Low' | 'Medium' | 'High' | 'Very High' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Very High">Very High</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Investment</label>
            <select
              value={editedLanguage.investment}
              onChange={(e) => setEditedLanguage({ ...editedLanguage, investment: e.target.value as 'Low' | 'Medium' | 'High' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setIsEditing(false)}
              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <X className="h-4 w-4 mr-2" />
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Check className="h-4 w-4 mr-2" />
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{language.icon}</span>
          <h3 className="text-xl font-bold">{language.name}</h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsEditing(true)}
            className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
          >
            <Pencil className="h-5 w-5" />
          </button>
          <button
            onClick={() => onDelete(language.id)}
            className="p-1 text-gray-500 hover:text-red-600 transition-colors"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="space-y-3">
        <div>
          <div className="text-sm font-medium text-gray-500">Best For</div>
          <div className="mt-1">{language.bestFor}</div>
        </div>

        <div className="flex gap-2">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${difficultyColor}`}>
            {language.learningCurve}
          </span>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${demandColor}`}>
            {language.industryDemand}
          </span>
        </div>

        <div>
          <div className="text-sm font-medium text-gray-500">Investment</div>
          <div className="mt-1">{language.investment}</div>
        </div>
      </div>
    </div>
  );
}