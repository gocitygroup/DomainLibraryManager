interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-lg w-full mx-auto max-h-[90vh] overflow-y-auto text-gray-900 dark:text-gray-100 shadow-lg dark:shadow-gray-900/30 transition-colors duration-200">
        {children}
      </div>
    </div>
  );
}