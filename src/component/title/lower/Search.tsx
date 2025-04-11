"use client"

import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Search,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ToggleableSearch() {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-[200px] bg-truGray-950 text-gray-300  border-zinc-800 hover:bg-blue-400/50  font-semibold hover:text-gray-300 p-2"
        >
          
          <span className="mr-auto">
            Search
          </span>
          <Search className="ml-8 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="rounded-lg  bg-truGray-950 text-gray-300 border border-zinc-800  hover:bg-blue-400/50md:min-w-[450px] p-0"
        align="start" 
      >
        <Command className="bg-truGray-950 text-blue-400">
          <CommandInput
            placeholder="Type a command or search..."
            className="bg-truGray-950 text-gray-300 border border-zinc-800"
          />
          <CommandList>
            <CommandEmpty className="text-blue-400">No results found.</CommandEmpty>

            <CommandGroup heading="Suggestions" className="text-blue-500">
              <CommandItem className="hover:bg-blue-500/10 cursor-pointer">
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem className="hover:bg-blue-500/10 cursor-pointer">
                <Smile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem disabled className="opacity-50">
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>

            <CommandSeparator className="bg-blue-400" />

            <CommandGroup heading="Settings" className="text-blue-500">
              <CommandItem className="hover:bg-blue-500/10 cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut className="text-blue-300">⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem className="hover:bg-blue-500/10 cursor-pointer">
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut className="text-blue-300">⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem className="hover:bg-blue-500/10 cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut className="text-blue-300">⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
