import React from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface props{
  loading:boolean,
  content:string
}

function Outputsection({loading,content}:props) {
  return (
    <div className='bg-white shadow-lg border '>
      <div className='flex justify-between items-center p-5'>
        <h2 className='text-2xl font-bold text-purple-700'>Your Result</h2>
         <Button className='bg-purple-600 hover:bg-purple-700'><Copy />copy</Button>
      </div>
       <Editor
    initialValue="hello your result appear here!"
    height="450px"
    initialEditType="wysiwyg"
    useCommandShortcut={true}
  />
    </div>
  )
}

export default Outputsection
