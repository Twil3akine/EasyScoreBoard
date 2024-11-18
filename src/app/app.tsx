import React from "react"
import ChangeTheme from "@/components/changeTheme"
import { ThemeProps } from "@/props"

const Page: React.FC<ThemeProps> = ({ Theme }) => {
    return (
        <main className="w-screen h-screen flex justify-center items-center space-x-2">
            <ChangeTheme Theme={Theme} />
        </main>
    )
}

export default Page