import { useState, useEffect } from 'react';

interface Section {
  id: string;
  label: string;
}

interface ScrollSpyProps {
  sections: Section[];
}

export function ScrollSpy({ sections }: ScrollSpyProps) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="fixed right-4 top-1/2 transform -translate-y-1/2">
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`
                block w-2 h-2 rounded-full transition-all duration-200
                ${activeSection === section.id
                  ? 'bg-blue-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
                }
              `}
              aria-label={section.label}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}