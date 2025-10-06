import Templates from '@/app/(data)/Templates'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'
import React, { useState } from 'react'

interface Props {
  slugvalue: string
  userforminput: (data: any) => void
}

function Formsection({ slugvalue, userforminput }: Props) {
  const template = Templates.find((item) => item.slug === slugvalue)
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  if (!template)
    return <p className="text-red-500 text-center mt-10">Template not found.</p>;

  // 🧠 handle change dynamically
  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    userforminput(formData); // pass full object
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border max-w-3xl mx-auto">
      <div className="flex items-center space-x-4 mb-6">
        <Image src={template.icon} alt="icon" width={70} height={70} />
        <div>
          <h2 className="text-2xl font-bold text-purple-700">{template.name}</h2>
          <p className="text-gray-600 text-sm">{template.desc}</p>
        </div>
      </div>

      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        {template.form?.map((field, index) => (
          <div key={index} className="flex flex-col space-y-2">
            {field.label && <label className="font-medium">{field.label}</label>}
            {field.field === 'input' ? (
              <Input
                value={formData[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
                placeholder={field.label || ''}
                required={field.required}
              />
            ) : field.field === 'textarea' ? (
              <Textarea
                value={formData[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
                placeholder={field.label || ''}
                required={field.required}
                className="min-h-[100px]"
              />
            ) : null}
          </div>
        ))}

        <button
          type="submit"
          className="py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg"
        >
          Generate Content
        </button>
      </form>
    </div>
  );
}

export default Formsection;
