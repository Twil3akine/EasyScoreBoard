import "@/global.css"
import React, { useState } from "react"
import Page from "@/app/app"
import { Theme } from "@/props"

const Layout: React.FC = () => {
  const [theme, setTheme] = useState<Theme>({
    currentTheme: "light",
    toggleTheme: () => {
      setTheme((prevTheme) => {
        const newTheme = prevTheme.currentTheme === "light" ? "dark" : "light"
        document.documentElement.setAttribute("data-theme", newTheme)
        return { ...prevTheme, currentTheme: newTheme }
      })
    }
  })

  return (
    <div>
      <Page Theme={theme} />
    </div>
  )
}

export default Layout