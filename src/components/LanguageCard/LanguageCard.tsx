import { useState } from 'react';
import { Pencil, Trash2, Code2, BookOpen, Briefcase, PiggyBank, Rocket } from 'lucide-react';
import { ProgrammingLanguage } from '../../types/language';
import { Badge } from './Badge';
import { LanguageForm } from '../Forms/LanguageForm';
import { Modal } from '../Modal/Modal';
import { Tabs } from '../ui/Tabs';

interface LanguageCardProps {
  language: ProgrammingLanguage;
  onDelete: (id: number) => void;
  onUpdate: (language: ProgrammingLanguage) => void;
}

export function LanguageCard({ language, onDelete, onUpdate }: LanguageCardProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = (updatedLanguage: ProgrammingLanguage) => {
    onUpdate(updatedLanguage);
    setIsEditing(false);
  };

  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Code2 className="h-4 w-4 text-gray-700 dark:text-gray-300" />
              <span>Best Used For</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{language.bestFor}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Badge
              label="Learning Curve"
              variant="difficulty"
              value={language.learningCurve}
            />
            <Badge
              label="Industry Demand"
              variant="demand"
              value={language.industryDemand}
            />
            <Badge
              label="Investment"
              variant="investment"
              value={language.investment}
            />
          </div>
        </div>
      )
    },
    {
      id: 'features',
      label: 'Advanced Features',
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-3">
            <Rocket className="h-5 w-5 text-blue-500 dark:text-blue-400" />
            <h4 className="font-medium text-gray-900 dark:text-gray-100">Key Features</h4>
          </div>
          <ul className="grid gap-3">
            {language.advancedFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 dark:bg-blue-400" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    }
  ];

  return (
    <>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1 dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-2xl">
              {language.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{language.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Programming Language</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
              aria-label="Edit language"
            >
              <Pencil className="h-5 w-5" />
            </button>
            <button
              onClick={() => onDelete(language.id)}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
              aria-label="Delete language"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <Tabs tabs={tabs} />
      </div>

      <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
        <LanguageForm
          initialData={language}
          onSubmit={handleUpdate}
          onCancel={() => setIsEditing(false)}
          submitLabel="Save Changes"
        />
      </Modal>
    </>
  );
}