"use client"

import React, { useState } from 'react'
import Formsection from '../_components/formsection'
import Outputsection from '../_components/outputsection'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Templates from '@/app/(data)/Templates'

export default function Contentitemslug() {
  const params = useParams();
  const [output, setOutput] = useState(''); // 🧠 store AI response
  const [loading, setLoading] = useState(false);

  // ✨ Main function that calls AI API
  const Generateaicontent = async (userInput: any) => {
    const template = Templates.find((item) => item.slug === params.slug);
    if (!template) return;
    console.log(userInput)

    try {
      setLoading(true);

      const prompt = `${template.aiPrompt}\nUser Input: ${JSON.stringify(userInput)}`;

      // 🔥 Call ai.tsx or backend API
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setOutput(data.result || 'No output generated.');
      console.log(output);

    } catch (err) {
      console.error(err);
      setOutput('Error generating content.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=''>
      <Link href={'/dashboard'}>
        <Button className='bg-purple-600 hover:bg-purple-700 border rounded-md'>
          <ArrowLeft />Back
        </Button>
      </Link>

      <div className='grid md:grid-cols-2 gap-10 p-8'>
        {/* form section */}
        <Formsection slugvalue={params.slug as string} userforminput={Generateaicontent} />

        {/* output section */}
        <Outputsection loading={loading} content={output} />
      </div>
    </div>
  );
}
