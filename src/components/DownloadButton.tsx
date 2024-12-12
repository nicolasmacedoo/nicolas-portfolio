'use client'

import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'

export function DownloadButton() {
  const handleDownload = () => {
    try {
      const link = document.createElement('a')

      link.href = '/cv.pdf'
      link.download = 'nicolas-macedo-cv.pdf'

      document.body.appendChild(link)
      link.click()

      document.body.removeChild(link)
    } catch (error) {
      console.error('Error downloading CV:', error)
    }
  }

  return (
    <Button
      variant="outline"
      size="lg"
      className="flex items-center gap-2 uppercase"
      onClick={handleDownload}
    >
      <span>Dowload CV</span>
      <FiDownload className="text-xl" />
    </Button>
  )
}
