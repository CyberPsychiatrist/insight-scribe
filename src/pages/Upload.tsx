import { UploadCloud } from 'lucide-react';

export default function Upload() {
  return (
    <div>
      <h1 className='text-lg font-semibold md:text-2xl'>Upload Document</h1>
      <div className='flex items-center justify-center w-full mt-8'>
        <label
          htmlFor='dropzone-file'
          className='flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-muted/80'
        >
          <div className='flex flex-col items-center justify-center pt-5 pb-6'>
            <UploadCloud className='w-10 h-10 mb-4 text-muted-foreground' />
            <p className='mb-2 text-sm text-muted-foreground'>
              <span className='font-semibold'>Click to upload</span> or drag and drop
            </p>
            <p className='text-xs text-muted-foreground'>PDF, Word, Excel, PPT, or Image (MAX. 800x400px)</p>
          </div>
          <input id='dropzone-file' type='file' className='hidden' />
        </label>
      </div>
    </div>
  );
}
