"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { errorDetection, dsaProblems } from "./data";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CorePage() {
  const [activeTab, setActiveTab] = useState("error");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (code: string, index: number) => {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      navigator.clipboard.writeText(code);
    } else {
      // Fallback for unsupported browsers
      const textArea = document.createElement("textarea");
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }

    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <main className="flex flex-col items-center min-h-screen p-8 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Coding Competition Reference</h1>

      {/* Navigation Tabs */}
      <div className="flex gap-6 mb-6">
        <motion.button
          className={`px-6 py-2 rounded-lg ${
            activeTab === "error" ? "bg-blue-600" : "bg-gray-700"
          }`}
          whileTap={{ scale: 0.9 }}
          onClick={() => setActiveTab("error")}
        >
          Error Detection
        </motion.button>

        <motion.button
          className={`px-6 py-2 rounded-lg ${
            activeTab === "dsa" ? "bg-blue-600" : "bg-gray-700"
          }`}
          whileTap={{ scale: 0.9 }}
          onClick={() => setActiveTab("dsa")}
        >
          DSA Problems
        </motion.button>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-3xl">
        {(activeTab === "error" ? errorDetection : dsaProblems).map((item, index) => (
          <motion.div
            key={index}
            className="mb-6 p-6 bg-gray-800 rounded-lg shadow-lg relative"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <div className="relative">
              <button
                className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
                onClick={() => handleCopy(item.code, index)}
              >
                {copiedIndex === index ? "Copied!" : "Copy"}
              </button>
              {/* Syntax Highlighted Code */}
              <SyntaxHighlighter language="c" style={vscDarkPlus} className="rounded-md text-sm">
                {item.code}
              </SyntaxHighlighter>
            </div>
            <p className="mt-4 text-gray-300">{item.explanation}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
