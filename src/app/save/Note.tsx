'use client'

import React, { useCallback, useState } from 'react'

export default function Note() {
  const [note, setNote] = useState('')
  // const data = trpcHook.getNote.useQuery('save')

  const handleSaving = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setNote(e.target.value)
    },
    []
  )

  // if (!data.data) {
  //     return <div>Loading...</div>;
  // }

  return (
    <div className="flex flex-col items-center justify-center p-2 text-xl font-medium">
      {/* {JSON.stringify(data.data)} */}
      <div className="m-0 flex h-96 w-96 flex-col">
        <textarea
          className="inline-block flex-grow p-2 ring"
          onChange={handleSaving}
          value={note}
        ></textarea>
        <button className="m-2 ring ring-slate-500">Save</button>
      </div>
      <div className="m-4 h-16 w-full">{note}</div>
    </div>
  )
}
