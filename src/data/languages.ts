export interface ProgrammingLanguage {
  id: number;
  name: string;
  icon: string;
  bestFor: string;
  learningCurve: 'Easy' | 'Medium' | 'Hard';
  industryDemand: 'Low' | 'Medium' | 'High' | 'Very High';
  investment: 'Low' | 'Medium' | 'High';
  advancedFeatures: string[];
}

export const programmingLanguages: ProgrammingLanguage[] = [
  {
    id: 1,
    name: 'Python',
    icon: '🐍',
    bestFor: 'Python excels in artificial intelligence, data science, automation, and web development. Its extensive ecosystem makes it perfect for rapid prototyping and production-ready applications.',
    learningCurve: 'Easy',
    industryDemand: 'Very High',
    investment: 'Low',
    advancedFeatures: [
      'Dynamic typing & introspection',
      'Generators & async/await',
      'Metaclasses',
      'Extensive libraries (NumPy, TensorFlow)',
      'Easy C/C++ integration via ctypes, Cython'
    ]
  },
  {
    id: 2,
    name: 'JavaScript',
    icon: '🌐',
    bestFor: 'JavaScript powers modern web development, enabling both client and server-side applications. Perfect for creating interactive websites, single-page applications, and real-time features.',
    learningCurve: 'Easy',
    industryDemand: 'Very High',
    investment: 'Low',
    advancedFeatures: [
      'Closures & first-class functions',
      'Prototypes & dynamic objects',
      'Async programming (Promises, async/await)',
      'ES6+ features (destructuring, arrow functions)',
      'WebAssembly integration'
    ]
  },
  {
    id: 3,
    name: 'Java',
    icon: '☕',
    bestFor: 'Java is the backbone of enterprise applications, Android development, and large-scale systems. Its "Write Once, Run Anywhere" philosophy makes it ideal for cross-platform development.',
    learningCurve: 'Medium',
    industryDemand: 'High',
    investment: 'Medium',
    advancedFeatures: [
      'JVM-based portability',
      'Reflection API',
      'Annotations & generics',
      'Multithreading & concurrency',
      'Robust garbage collection'
    ]
  },
  {
    id: 4,
    name: 'C',
    icon: '💻',
    bestFor: 'C is essential for systems programming, embedded systems, and performance-critical applications. It provides unparalleled control over hardware and system resources.',
    learningCurve: 'Hard',
    industryDemand: 'Medium',
    investment: 'High',
    advancedFeatures: [
      'Direct memory management with pointers',
      'Preprocessor macros',
      'Bitwise operations',
      'Inline Assembly',
      'Manual memory control (malloc, free)'
    ]
  },
  {
    id: 5,
    name: 'C++',
    icon: '💾',
    bestFor: 'C++ is ideal for game development, high-performance systems, and complex applications requiring fine-grained control over system resources.',
    learningCurve: 'Hard',
    industryDemand: 'High',
    investment: 'High',
    advancedFeatures: [
      'Templates & STL',
      'Multiple inheritance',
      'RAII (Resource Acquisition Is Initialization)',
      'Operator overloading',
      'Compile-time programming (constexpr, metaprogramming)'
    ]
  },
  {
    id: 6,
    name: 'C#',
    icon: '🛠️',
    bestFor: 'C# excels in Windows application development, game development with Unity, and enterprise-level software solutions.',
    learningCurve: 'Medium',
    industryDemand: 'High',
    investment: 'Medium',
    advancedFeatures: [
      'LINQ (Language Integrated Query)',
      'Async/await & Task Parallel Library',
      'Reflection & attributes',
      'Events & delegates',
      'Interop with .NET and COM'
    ]
  },
  {
    id: 7,
    name: 'PHP',
    icon: '🌍',
    bestFor: 'PHP is widely used for web development, content management systems, and server-side applications.',
    learningCurve: 'Easy',
    industryDemand: 'Medium',
    investment: 'Low',
    advancedFeatures: [
      'Magic methods (__get, __set, etc.)',
      'Closures & anonymous functions',
      'Composer for dependency management',
      'Built-in web server for dev testing',
      'Integration with almost all web servers'
    ]
  },
  {
    id: 8,
    name: 'SQL',
    icon: '🐘',
    bestFor: 'SQL is the standard language for managing and manipulating relational databases, essential for data operations and analysis.',
    learningCurve: 'Easy',
    industryDemand: 'Very High',
    investment: 'Low',
    advancedFeatures: [
      'Window functions',
      'CTEs (Common Table Expressions)',
      'Triggers & stored procedures',
      'Recursive queries',
      'JSON/XML manipulation'
    ]
  },
  {
    id: 9,
    name: 'R',
    icon: '🧬',
    bestFor: 'R specializes in statistical computing, data analysis, and graphical visualization, particularly popular in academic and research settings.',
    learningCurve: 'Medium',
    industryDemand: 'Medium',
    investment: 'Medium',
    advancedFeatures: [
      'Vectorized operations',
      'Functional programming tools',
      'Built-in plotting libraries (ggplot2)',
      'Interactive notebooks (R Markdown)',
      'Statistical modeling & forecasting'
    ]
  },
  {
    id: 10,
    name: 'Swift',
    icon: '📱',
    bestFor: 'Swift is designed for iOS and macOS development, offering modern features for building high-performance, safe applications.',
    learningCurve: 'Medium',
    industryDemand: 'High',
    investment: 'Medium',
    advancedFeatures: [
      'Optionals & safety checks',
      'Protocol-oriented programming',
      'Generics & functional features',
      'SwiftUI for declarative UI',
      'Closures with trailing syntax'
    ]
  },
  {
    id: 11,
    name: 'Ruby',
    icon: '💎',
    bestFor: 'Ruby shines in web development, particularly with Ruby on Rails, emphasizing developer happiness and productivity.',
    learningCurve: 'Easy',
    industryDemand: 'Medium',
    investment: 'Low',
    advancedFeatures: [
      'Metaprogramming (e.g. define_method)',
      'Domain-Specific Languages (DSLs)',
      'Duck typing & reflection',
      'Blocks & procs',
      'Convention over configuration (Rails)'
    ]
  },
  {
    id: 12,
    name: 'Go',
    icon: '🛸',
    bestFor: 'Go excels in building cloud services, microservices, and high-performance network applications.',
    learningCurve: 'Medium',
    industryDemand: 'High',
    investment: 'Medium',
    advancedFeatures: [
      'Goroutines & channels for concurrency',
      'Static linking',
      'Fast compile times',
      'Strong tooling (formatting, linting)',
      'Interface-based programming'
    ]
  },
  {
    id: 13,
    name: 'Rust',
    icon: '🦀',
    bestFor: 'Rust is designed for systems programming, offering memory safety without garbage collection and high performance.',
    learningCurve: 'Hard',
    industryDemand: 'High',
    investment: 'High',
    advancedFeatures: [
      'Ownership and borrowing system',
      'Zero-cost abstractions',
      'Pattern matching',
      'Macros & trait-based generics',
      'Memory safety without GC'
    ]
  },
  {
    id: 14,
    name: 'TypeScript',
    icon: '🧾',
    bestFor: 'TypeScript adds static typing to JavaScript, making it ideal for large-scale JavaScript applications.',
    learningCurve: 'Medium',
    industryDemand: 'Very High',
    investment: 'Medium',
    advancedFeatures: [
      'Static typing over JS',
      'Interfaces & generics',
      'Type inference',
      'Strict null checks',
      'Union & intersection types'
    ]
  },
  {
    id: 15,
    name: 'Kotlin',
    icon: '☁️',
    bestFor: 'Kotlin is popular for Android development and modern server-side applications, offering Java interoperability.',
    learningCurve: 'Medium',
    industryDemand: 'High',
    investment: 'Medium',
    advancedFeatures: [
      'Null safety',
      'Coroutines',
      'Extension functions',
      'DSL support',
      'Multiplatform (Kotlin Native, JS)'
    ]
  },
  {
    id: 16,
    name: 'Haskell',
    icon: '🐫',
    bestFor: 'Haskell excels in academic and research settings, particularly for functional programming and mathematical computations.',
    learningCurve: 'Hard',
    industryDemand: 'Low',
    investment: 'High',
    advancedFeatures: [
      'Pure functional paradigm',
      'Pattern matching',
      'Monads & functors',
      'Lazy evaluation',
      'Type inference & strong static types'
    ]
  },
  {
    id: 17,
    name: 'Bash',
    icon: '🔒',
    bestFor: 'Bash is essential for system administration, DevOps, and automation of routine tasks in Unix-like environments.',
    learningCurve: 'Easy',
    industryDemand: 'High',
    investment: 'Low',
    advancedFeatures: [
      'Process substitution',
      'Command chaining (&&, ||, |)',
      'Shell expansion',
      'Background job control',
      'Integration with Unix/Linux tools'
    ]
  },
  {
    id: 18,
    name: 'Dart',
    icon: '🎯',
    bestFor: 'Dart is optimized for building mobile, desktop, and web applications using the Flutter framework.',
    learningCurve: 'Medium',
    industryDemand: 'Medium',
    investment: 'Medium',
    advancedFeatures: [
      'Hot reload (Flutter)',
      'Null safety',
      'Asynchronous programming with Future and Stream',
      'Extension methods',
      'Ahead-of-Time (AOT) + Just-in-Time (JIT) compilation'
    ]
  }
];