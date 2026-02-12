import { useState } from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { ProgrammingLanguage } from '../../types/language';

interface LanguageFormProps {
  initialData?: ProgrammingLanguage;
  onSubmit: (language: ProgrammingLanguage) => void;
  onCancel: () => void;
  submitLabel?: string;
}

export function LanguageForm({
  initialData,
  onSubmit,
  onCancel,
  submitLabel = 'Add Language'
}: LanguageFormProps) {
  const [formData, setFormData] = useState<Omit<ProgrammingLanguage, 'id'>>(
    initialData || {
      name: '',
      icon: '',
      bestFor: '',
      learningCurve: 'Easy',
      industryDemand: 'Medium',
      investment: 'Low',
      advancedFeatures: ['']
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(initialData ? { ...formData, id: initialData.id } : formData as ProgrammingLanguage);
  };

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...formData.advancedFeatures];
    newFeatures[index] = value;
    setFormData({ ...formData, advancedFeatures: newFeatures });
  };

  const addFeature = () => {
    setFormData({
      ...formData,
      advancedFeatures: [...formData.advancedFeatures, '']
    });
  };

  const removeFeature = (index: number) => {
    const newFeatures = formData.advancedFeatures.filter((_, i) => i !== index);
    setFormData({ ...formData, advancedFeatures: newFeatures });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {initialData ? 'Edit Language' : 'Add New Language'}
        </h2>
        <button
          type="button"
          onClick={onCancel}
          className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Icon</label>
          <input
            type="text"
            required
            value={formData.icon}
            onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
            className="mt-1 block w-full rounded-md 
              border-gray-300 dark:border-gray-700 
              bg-white dark:bg-gray-800 
              text-gray-900 dark:text-gray-100
              shadow-sm focus:border-blue-500 focus:ring-blue-500 
              sm:text-sm transition-colors"
            placeholder="🔥"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full rounded-md 
              border-gray-300 dark:border-gray-700 
              bg-white dark:bg-gray-800 
              text-gray-900 dark:text-gray-100
              shadow-sm focus:border-blue-500 focus:ring-blue-500 
              sm:text-sm transition-colors"
            placeholder="Language name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Best For</label>
          <textarea
            required
            value={formData.bestFor}
            onChange={(e) => setFormData({ ...formData, bestFor: e.target.value })}
            className="mt-1 block w-full rounded-md 
              border-gray-300 dark:border-gray-700 
              bg-white dark:bg-gray-800 
              text-gray-900 dark:text-gray-100
              shadow-sm focus:border-blue-500 focus:ring-blue-500 
              sm:text-sm transition-colors"
            placeholder="Main use cases"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Learning Curve</label>
            <select
              required
              value={formData.learningCurve}
              onChange={(e) => setFormData({ ...formData, learningCurve: e.target.value as 'Easy' | 'Medium' | 'Hard' })}
              className="mt-1 block w-full rounded-md 
                border-gray-300 dark:border-gray-700 
                bg-white dark:bg-gray-800 
                text-gray-900 dark:text-gray-100
                shadow-sm focus:border-blue-500 focus:ring-blue-500 
                sm:text-sm transition-colors"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Industry Demand</label>
            <select
              required
              value={formData.industryDemand}
              onChange={(e) => setFormData({ ...formData, industryDemand: e.target.value as 'Low' | 'Medium' | 'High' | 'Very High' })}
              className="mt-1 block w-full rounded-md 
                border-gray-300 dark:border-gray-700 
                bg-white dark:bg-gray-800 
                text-gray-900 dark:text-gray-100
                shadow-sm focus:border-blue-500 focus:ring-blue-500 
                sm:text-sm transition-colors"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Very High">Very High</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Investment</label>
            <select
              required
              value={formData.investment}
              onChange={(e) => setFormData({ ...formData, investment: e.target.value as 'Low' | 'Medium' | 'High' })}
              className="mt-1 block w-full rounded-md 
                border-gray-300 dark:border-gray-700 
                bg-white dark:bg-gray-800 
                text-gray-900 dark:text-gray-100
                shadow-sm focus:border-blue-500 focus:ring-blue-500 
                sm:text-sm transition-colors"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Advanced Features</label>
            <button
              type="button"
              onClick={addFeature}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
          {formData.advancedFeatures.map((feature, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={feature}
                onChange={(e) => handleFeatureChange(index, e.target.value)}
                className="flex-1 rounded-md 
                  border-gray-300 dark:border-gray-700 
                  bg-white dark:bg-gray-800 
                  text-gray-900 dark:text-gray-100
                  shadow-sm focus:border-blue-500 focus:ring-blue-500 
                  sm:text-sm transition-colors"
                placeholder="Enter a feature"
              />
              {formData.advancedFeatures.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeFeature(index)}
                  className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
                >
                  <Minus className="h-5 w-5" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 
            border border-gray-300 dark:border-gray-600 
            rounded-md text-sm font-medium 
            text-gray-700 dark:text-gray-300 
            bg-white dark:bg-gray-800
            hover:bg-gray-50 dark:hover:bg-gray-700 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 
            border border-transparent rounded-md shadow-sm 
            text-sm font-medium text-white 
            bg-blue-600 hover:bg-blue-700 
            dark:bg-blue-700 dark:hover:bg-blue-800
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            transition-colors"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}