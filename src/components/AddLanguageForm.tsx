import { useState } from 'react';
import { X } from 'lucide-react';
import { ProgrammingLanguage } from '../data/languages';

interface AddLanguageFormProps {
  onSubmit: (language: ProgrammingLanguage) => void;
  onCancel: () => void;
}

export function AddLanguageForm({ onSubmit, onCancel }: AddLanguageFormProps) {
  const [newLanguage, setNewLanguage] = useState<Omit<ProgrammingLanguage, 'id'>>({
    name: '',
    icon: '',
    bestFor: '',
    learningCurve: 'Easy',
    industryDemand: 'Medium',
    investment: 'Low'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(newLanguage as ProgrammingLanguage);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Add New Language</h2>
        <button
          type="button"
          onClick={onCancel}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Icon</label>
        <input
          type="text"
          required
          value={newLanguage.icon}
          onChange={(e) => setNewLanguage({ ...newLanguage, icon: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          placeholder="🔥"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          required
          value={newLanguage.name}
          onChange={(e) => setNewLanguage({ ...newLanguage, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          placeholder="Language name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Best For</label>
        <input
          type="text"
          required
          value={newLanguage.bestFor}
          onChange={(e) => setNewLanguage({ ...newLanguage, bestFor: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          placeholder="Main use cases"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Learning Curve</label>
        <select
          required
          value={newLanguage.learningCurve}
          onChange={(e) => setNewLanguage({ ...newLanguage, learningCurve: e.target.value as 'Easy' | 'Medium' | 'Hard' })}
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
          required
          value={newLanguage.industryDemand}
          onChange={(e) => setNewLanguage({ ...newLanguage, industryDemand: e.target.value as 'Low' | 'Medium' | 'High' | 'Very High' })}
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
          required
          value={newLanguage.investment}
          onChange={(e) => setNewLanguage({ ...newLanguage, investment: e.target.value as 'Low' | 'Medium' | 'High' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add Language
        </button>
      </div>
    </form>
  );
}