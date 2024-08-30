import React from "react";
import { Github, Facebook, X } from "lucide-react";

const Social: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://github.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="w-6 h-6 text-gray-700 hover:text-gray-900" />
      </a>
      <a
        href="https://facebook.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook className="w-6 h-6 text-blue-600 hover:text-blue-800" />
      </a>
      <a
        href="https://twitter.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <X className="w-6 h-6 text-blue-500 hover:text-blue-700" />
      </a>
    </div>
  );
};

export default Social;
