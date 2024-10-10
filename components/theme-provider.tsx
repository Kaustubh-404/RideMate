// "use client"

// import * as React from "react"
// import { ThemeProvider as NextThemesProvider } from "next-themes"
// import { type ThemeProviderProps } from "next-themes/dist/types"
// import { Button } from "@/components/ui/button"
// import { Moon, Sun } from "lucide-react"

// export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
//   return <NextThemesProvider {...props}>{children}</NextThemesProvider>
// }

// export function ThemeToggle() {
//   const [mounted, setMounted] = React.useState(false)
//   const { theme, setTheme } = useTheme()

//   // useEffect only runs on the client, so now we can safely show the UI
//   React.useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) {
//     return null
//   }

//   return (
//     <Button
//       variant="outline"
//       size="icon"
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//       className="fixed top-4 right-4 bg-white dark:bg-gray-800"
//     >
//       {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
//     </Button>
//   )
// }

// export { useTheme } from "next-themes"
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-4 right-4 bg-white dark:bg-gray-800"
    >
      {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
    </Button>
  )
}
