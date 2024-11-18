import "@/global.css"
import { Sun, Moon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState } from "react"

const Page: React.FC = () => {
    const initialTheme = document.documentElement.getAttribute("data-theme") || "light"
    const [currentTheme, setCurrentTheme] = useState<string>(initialTheme)

    const toggleBackground: () => void = () => {
        const newTheme = currentTheme === "light" ? "dark" : "light"
        document.documentElement.setAttribute("data-theme", newTheme)
        setCurrentTheme(newTheme)
    }

    return (
        <main className={`w-screen h-screen flex flex-col justify-center items-center`}>
            <Button variant={`outline`} size={`icon`} onClick={toggleBackground}>
                {currentTheme === "light" ? <Sun className={`bg-transparent text-[32px]`} />:<Moon className={`bg-transparent text-[32px]`} />}
            </Button>
        </main>
    )
}

export default Page