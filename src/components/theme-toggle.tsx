"use client"

import * as React from "react"
import { useTheme as useNextTheme } from "next-themes"
import { Button } from "@/components/ui/shadcn/ui/button"
import { IconMoon, IconSun } from "@tabler/icons-react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useNextTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch by mounting after client-side render
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-9 h-9" />
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      title={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {resolvedTheme === "dark" ? (
        <IconSun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <IconMoon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
} 