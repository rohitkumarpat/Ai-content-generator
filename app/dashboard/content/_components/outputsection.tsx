"use client";

import React, { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import CodeBlock from "@tiptap/extension-code-block";
import Blockquote from "@tiptap/extension-blockquote";
import { Button } from "@/components/ui/button";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Code,
  Quote,
  Undo,
  Redo,
  Copy,
} from "lucide-react";

interface Props {
  loading: boolean;
  content: string;
}

export default function OutputSection({ loading, content }: Props) {
  const [copied, setCopied] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({ levels: [1, 2, 3] }),
      BulletList,
      OrderedList,
      CodeBlock,
      Blockquote,
    ],
    content: "",
    editable: true,
    immediatelyRender: false,
  });

  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  const copyHTML = async () => {
    if (!editor) return;
    await navigator.clipboard.writeText(editor.getHTML());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!editor) return null;

  return (
    <div className="bg-white border rounded-lg shadow-md">
      {/* TOOLBAR */}
      <div className="flex flex-wrap gap-1 p-2 border-b bg-gray-50">
        <Button variant="outline" size="sm" onClick={() => editor.chain().focus().toggleBold().run()}>
          <Bold size={16} />
        </Button>

        <Button variant="outline" size="sm" onClick={() => editor.chain().focus().toggleItalic().run()}>
          <Italic size={16} />
        </Button>

        <Button variant="outline" size="sm" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
          H1
        </Button>

        <Button variant="outline" size="sm" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          H2
        </Button>

        <Button variant="outline" size="sm" onClick={() => editor.chain().focus().toggleBulletList().run()}>
          <List size={16} />
        </Button>

        <Button variant="outline" size="sm" onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          <ListOrdered size={16} />
        </Button>

        <Button variant="outline" size="sm" onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
          <Code size={16} />
        </Button>

        <Button variant="outline" size="sm" onClick={() => editor.chain().focus().toggleBlockquote().run()}>
          <Quote size={16} />
        </Button>

        <Button variant="outline" size="sm" onClick={() => editor.chain().focus().undo().run()}>
          <Undo size={16} />
        </Button>

        <Button variant="outline" size="sm" onClick={() => editor.chain().focus().redo().run()}>
          <Redo size={16} />
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={copyHTML}
          className="ml-auto"
        >
          {copied ? "Copied" : <Copy size={16} />}
        </Button>
      </div>

      {/* EDITOR */}
      <div className="p-6 min-h-[450px]">
        {loading ? (
          <p className="text-gray-500 animate-pulse">
            Generating content…
          </p>
        ) : (
          <EditorContent
            editor={editor}
            className="prose max-w-none focus:outline-none min-h-[400px]"
          />
        )}
      </div>
    </div>
  );
}
