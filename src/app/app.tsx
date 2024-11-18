import React from "react"
import ChangeTheme from "@/components/changeTheme"
import { ThemeProps } from "@/props"

const Page: React.FC<ThemeProps> = ({ currentTheme, toggleTheme }) => {
    return (
        <main className="w-screen h-screen flex justify-center items-center space-x-2">
            <ChangeTheme currentTheme={currentTheme} toggleTheme={toggleTheme} />
        </main>
    )
}

export default Page