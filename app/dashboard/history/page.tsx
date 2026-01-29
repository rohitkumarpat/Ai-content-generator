"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

type HistoryItem = {
  id: number;
  slugname: string;
  aiResponse: string;
  createdAt: string;
};

function History() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState<number | null>(null);


  const fetchTheHistory = async () => {
    try {
      const res = await axios.get("/api/ai-output");
      setHistory(res.data);
    } catch (error) {
      console.error("Failed to fetch history", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTheHistory();
  }, []);

 const copyToClipboard = async (text: string, id: number) => {
  await navigator.clipboard.writeText(text);
  setCopiedId(id);

  setTimeout(() => {
    setCopiedId(null);
  }, 2000); 
};


  const truncate = (text: string, length = 80) =>
    text.length > length ? text.slice(0, length) + "..." : text;

  if (loading) return <div>Loading history...</div>;

  return (
    <div>
     

      {history.length === 0 && <p>No history found</p>}

      {history.length > 0 && (
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Template</th>
              <th className="border p-2 text-left">AI Response</th>
              <th className="border p-2 text-left">Date</th>
              <th className="border p-2 text-center">Copy</th>
            </tr>
          </thead>

          <tbody>
            {history.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                {/* Template */}
                <td className="border p-2 capitalize">
                  {item.slugname}
                </td>

                {/* AI Response (preview only) */}
                <td className="border p-2">
                  {truncate(item.aiResponse)}
                </td>

                {/* Date */}
                <td className="border p-2">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>

                {/* Copy Button */}
              <td className="border p-2 text-center">
  <button
    onClick={() => copyToClipboard(item.aiResponse, item.id)}
    className={`px-3 py-1 rounded text-white transition ${
      copiedId === item.id
        ? "bg-green-500"
                         : "bg-blue-500 hover:bg-blue-600"
                                                }`}
                                                     >
                      {copiedId === item.id ? "✓ Copied" : "Copy"}
                       </button>
                 </td>

              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default History;
