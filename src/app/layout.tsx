import "@/global.css"
import React, { useState } from "react"
import Page from "@/app/app"

const Layout: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light")

  const toggleTheme: () => void = () => {
    const newTheme: "light"|"dark" = currentTheme==="light" ? "dark":"light"
    document.documentElement.setAttribute("data-theme", newTheme)
    setCurrentTheme(newTheme)
  }

  return (
    <div>
      <Page currentTheme={currentTheme} toggleTheme={toggleTheme} />
    </div>
  )
}

export default Layout