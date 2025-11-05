import Templates from '@/app/(data)/Templates'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { LoaderCircle } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

interface Props {
  slugvalue: string
  userforminput: (data: any) => Promise<void> | void // userforminput can be async
}

function Formsection({ slugvalue, userforminput }: Props) {
  const template = Templates.find((item) => item.slug === slugvalue)
  const [formData, setFormData] = useState<{ [key: string]: string }>({})
  const [loading, setLoading] = useState(false)

  if (!template)
    return <p className="text-red-500 text-center mt-10">Template not found.</p>

  // 🧠 handle input change dynamically
  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
      await userforminput(formData) // wait for parent async call
    } catch (err) {
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

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
          disabled={loading}
          className={`py-2 px-4 font-semibold rounded-lg flex items-center justify-center gap-2
            ${loading
              ? 'bg-purple-400 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-700 text-white'}
          `}
        >
          {loading && <LoaderCircle className="animate-spin h-5 w-5" />}
          {loading ? 'Generating...' : 'Generate Content'}
        </button>
      </form>
    </div>
  )
}

export default Formsection
