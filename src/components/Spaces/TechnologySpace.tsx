import { TechnologyDomain } from '../../types/spaces';
import { Cpu, CheckCircle2 } from 'lucide-react';

interface TechnologySpaceProps {
  domains: TechnologyDomain[];
}

export function TechnologySpace({ domains }: TechnologySpaceProps) {
  return (
    <div className="space-y-8">
      {domains.map((domain) => (
        <div key={domain.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700 dark:shadow-gray-900/30">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-50 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
              <Cpu className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">{domain.title}</h3>
              
              <div className="grid gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Best Used For</h4>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    {domain.bestFor.split('\n').map((text, i) => (
                      <p key={i} className="text-gray-700 dark:text-gray-300 mb-2 last:mb-0">{text}</p>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Learning Curve</h4>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      {domain.learningCurve.split('\n').map((text, i) => (
                        <p key={i} className="text-gray-700 dark:text-gray-300 mb-2 last:mb-0">{text}</p>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Industry Demand</h4>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      {domain.industryDemand.split('\n').map((text, i) => (
                        <p key={i} className="text-gray-700 dark:text-gray-300 mb-2 last:mb-0">{text}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Investment Factors</h4>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    {domain.investmentFactors.split('\n').map((text, i) => (
                      <p key={i} className="text-gray-700 dark:text-gray-300 mb-2 last:mb-0">{text}</p>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Key Features</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {domain.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 dark:text-green-400 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}