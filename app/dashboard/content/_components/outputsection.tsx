import React, { useEffect, useRef, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

interface Props {
  loading: boolean;
  content: string;
}

function OutputSection({ loading, content }: Props) {
  const editorRef = useRef<Editor | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!editorRef.current) return;

    const editorInstance = editorRef.current.getInstance();

    // ✅ IMPORTANT: Use setHTML for HTML content
    editorInstance.setHTML(content || "");
  }, [content]);

  const handleCopy = async () => {
    if (!editorRef.current) return;

    try {
      const editorInstance = editorRef.current.getInstance();

      // Copy rendered HTML
      const html = editorInstance.getHTML();
      await navigator.clipboard.writeText(html);

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="text-2xl font-bold text-purple-700">Your Result</h2>

        <Button
          onClick={handleCopy}
          disabled={!content}
          className={`flex items-center gap-2 ${
            copied
              ? "bg-green-600 hover:bg-green-700"
              : "bg-purple-600 hover:bg-purple-700"
          } text-white`}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy HTML
            </>
          )}
        </Button>
      </div>

      <Editor
        ref={editorRef}
        initialValue="Your AI-generated content will appear here..."
        height="450px"
        initialEditType="wysiwyg" // ✅ required for HTML
        useCommandShortcut={true}
        hideModeSwitch={true}
      />
    </div>
  );
}

export default OutputSection;
