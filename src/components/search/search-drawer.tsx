import React from 'react'
import { DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export const SearchDrawer = () => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Search</DrawerTitle>
      </DrawerHeader>
      <form onSubmit={handleSearch} className="space-y-4 p-4">
        <div className="flex space-x-2">
          <Input type="search" placeholder="Search..." className="flex-grow" />
          <Button type="submit">Search</Button>
        </div>
      </form>
    </DrawerContent>
  )
}
