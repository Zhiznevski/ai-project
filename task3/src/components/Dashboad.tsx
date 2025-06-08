import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null)

  useEffect(() => {
    const worker = new Worker(new URL('./sum.worker.ts', import.meta.url), { type: 'module' })

    worker.postMessage('start')

    worker.onmessage = (e) => {
      setD(e.data)
      worker.terminate()
    }

    return () => {
      worker.terminate()
    }
  }, [])

  return <div>{d}</div>
}
