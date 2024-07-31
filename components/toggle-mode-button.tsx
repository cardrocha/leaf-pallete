"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="border w-12 h-12 md:w-14 md:h-14"
    >
      <SunIcon className="dark:block h-6 w-6 hidden" />
      <MoonIcon className="dark:hidden h-6 w-6 block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}