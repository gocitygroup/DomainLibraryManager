import { InnovationArea } from '../../types/spaces';
import { Lightbulb, ChevronRight } from 'lucide-react';

interface InnovationSpaceProps {
  areas: InnovationArea[];
}

export function InnovationSpace({ areas }: InnovationSpaceProps) {
  return (
    <div className="space-y-8">
      {areas.map((area) => (
        <div key={area.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700 dark:shadow-gray-900/30">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
              <Lightbulb className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{area.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{area.description}</p>
              
              <div className="space-y-4">
                {area.details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}