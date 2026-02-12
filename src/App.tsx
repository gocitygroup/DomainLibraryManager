import { useState } from 'react';
import { programmingLanguages } from './data/languages';
import { spaces, innovationAreas, technologyDomains } from './data/spaces';
import { ProgrammingLanguage } from './types/language';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useCors } from './hooks/useCors';
import { Header } from './components/Layout/Header';
import { SearchBar } from './components/Search/SearchBar';
import { LanguageCard } from './components/LanguageCard/LanguageCard';
import { LanguageForm } from './components/Forms/LanguageForm';
import { Modal } from './components/Modal/Modal';
import { ArrowLeft, Filter, SlidersHorizontal } from 'lucide-react';
import { SpaceSelector } from './components/Spaces/SpaceSelector';
import { InnovationSpace } from './components/Spaces/InnovationSpace';
import { TechnologySpace } from './components/Spaces/TechnologySpace';
import { ThemeToggle } from './components/ThemeToggle';

interface ProgrammingLanguageManagerProps {
  storageKey?: string;
  initialLanguages?: ProgrammingLanguage[];
  className?: string;
  onLanguageAdd?: (language: ProgrammingLanguage) => void;
  onLanguageUpdate?: (language: ProgrammingLanguage) => void;
  onLanguageDelete?: (id: number) => void;
  onSpaceChange?: (spaceId: string) => void;
  allowedOrigins?: string[];
}

function ProgrammingLanguageManager({
  storageKey = 'languages',
  initialLanguages = programmingLanguages,
  className = '',
  onLanguageAdd,
  onLanguageUpdate,
  onLanguageDelete,
  onSpaceChange,
}: ProgrammingLanguageManagerProps) {
  // Initialize CORS hook
  useCors();

  const MAIN_SITE_URL = 'https://gocitygroup.org';
  const showMainSiteFloatingTab =
    typeof window !== 'undefined' &&
    window.location.hostname === 'tech.gocitygroup.org';

  const [activeSpace, setActiveSpace] = useState('programming');
  const [search, setSearch] = useState('');
  const [languages, setLanguages] = useLocalStorage(storageKey, initialLanguages);
  const [showAddForm, setShowAddForm] = useState(false);
  const [filters, setFilters] = useState({
    learningCurve: [] as string[],
    industryDemand: [] as string[],
    investment: [] as string[],
  });
  
  const filteredLanguages = languages.filter(lang => {
    const matchesSearch = 
      lang.name.toLowerCase().includes(search.toLowerCase()) ||
      lang.bestFor.toLowerCase().includes(search.toLowerCase()) ||
      lang.advancedFeatures.some(feature => 
        feature.toLowerCase().includes(search.toLowerCase())
      );

    const matchesFilters = 
      (filters.learningCurve.length === 0 || filters.learningCurve.includes(lang.learningCurve)) &&
      (filters.industryDemand.length === 0 || filters.industryDemand.includes(lang.industryDemand)) &&
      (filters.investment.length === 0 || filters.investment.includes(lang.investment));

    return matchesSearch && matchesFilters;
  });

  const handleAdd = (newLanguage: ProgrammingLanguage) => {
    const updatedLanguages = [...languages, { ...newLanguage, id: languages.length + 1 }];
    setLanguages(updatedLanguages);
    setShowAddForm(false);
    onLanguageAdd?.(newLanguage);
  };

  const handleDelete = (id: number) => {
    setLanguages(languages.filter(lang => lang.id !== id));
    onLanguageDelete?.(id);
  };

  const handleUpdate = (updatedLanguage: ProgrammingLanguage) => {
    setLanguages(languages.map(lang => 
      lang.id === updatedLanguage.id ? updatedLanguage : lang
    ));
    onLanguageUpdate?.(updatedLanguage);
  };

  const handleSpaceChange = (spaceId: string) => {
    setActiveSpace(spaceId);
    onSpaceChange?.(spaceId);
  };

  const toggleFilter = (category: keyof typeof filters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(v => v !== value)
        : [...prev[category], value]
    }));
  };

  const renderContent = () => {
    switch (activeSpace) {
      case 'programming':
        return (
          <>
            <div className="mb-8 space-y-6">
              <SearchBar value={search} onChange={setSearch} />
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-700 transition-colors duration-200">
                <div className="flex items-center gap-2 mb-4">
                  <SlidersHorizontal className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Filters</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Learning Curve</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Easy', 'Medium', 'Hard'].map(level => (
                        <button
                          key={level}
                          onClick={() => toggleFilter('learningCurve', level)}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                            filters.learningCurve.includes(level)
                              ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 ring-2 ring-blue-500 ring-opacity-50'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Industry Demand</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Low', 'Medium', 'High', 'Very High'].map(level => (
                        <button
                          key={level}
                          onClick={() => toggleFilter('industryDemand', level)}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                            filters.industryDemand.includes(level)
                              ? 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 ring-2 ring-green-500 ring-opacity-50'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Investment Required</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Low', 'Medium', 'High'].map(level => (
                        <button
                          key={level}
                          onClick={() => toggleFilter('investment', level)}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                            filters.investment.includes(level)
                              ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300 ring-2 ring-purple-500 ring-opacity-50'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredLanguages.map((language) => (
                <LanguageCard
                  key={language.id}
                  language={language}
                  onDelete={handleDelete}
                  onUpdate={handleUpdate}
                />
              ))}
            </div>

            {filteredLanguages.length === 0 && (
              <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-700 transition-colors duration-200">
                <div className="max-w-md mx-auto">
                  <Filter className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                    No languages found
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                </div>
              </div>
            )}
          </>
        );
      case 'innovation':
        return <InnovationSpace areas={innovationAreas} />;
      case 'technology':
        return <TechnologySpace domains={technologyDomains} />;
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 ${className}`}>
      {showMainSiteFloatingTab && (
        <a
          href={MAIN_SITE_URL}
          className="fixed z-50 left-4 bottom-4 sm:left-0 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2
                     inline-flex items-center gap-2 px-3 py-2 sm:py-2.5
                     rounded-xl sm:rounded-l-none sm:rounded-r-2xl
                     border border-gray-200/70 dark:border-gray-700/70
                     bg-white/90 dark:bg-gray-800/90 backdrop-blur
                     text-gray-800 dark:text-gray-100 shadow-lg shadow-black/10 dark:shadow-black/30
                     hover:bg-white hover:text-gray-900 dark:hover:bg-gray-800
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gocity-blue-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50
                     dark:focus-visible:ring-offset-gray-900"
          aria-label="Back to GoCityGroup main website"
          title="Back to GoCityGroup"
        >
          <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gocity-blue-600 dark:text-gocity-blue-400" />
          <span className="text-sm font-semibold whitespace-nowrap">
            Gocity Group
          </span>
          <span className="hidden sm:inline text-sm text-gray-600 dark:text-gray-300">
            Main site
          </span>
        </a>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-end mb-3 sm:mb-4">
            <ThemeToggle />
          </div>
          <Header onAddClick={() => setShowAddForm(true)} />
        </div>

        <SpaceSelector
          spaces={spaces}
          activeSpace={activeSpace}
          onSpaceChange={handleSpaceChange}
        />
        
        {renderContent()}

        <Modal isOpen={showAddForm} onClose={() => setShowAddForm(false)}>
          <LanguageForm
            onSubmit={handleAdd}
            onCancel={() => setShowAddForm(false)}
          />
        </Modal>
      </div>
    </div>
  );
}

export default ProgrammingLanguageManager;