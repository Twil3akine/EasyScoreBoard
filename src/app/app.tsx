import ChangeTheme from "@/components/changeTheme"
import Counter from "@/components/counter"
import { ThemeProps } from "@/props"

const Page = ({ Theme }: ThemeProps) => {
    return (
        <main className="w-screen h-screen flex flex-col justify-center items-center space-y-2">
            <ChangeTheme Theme={Theme} />
            <Counter />
        </main>
    )
}

export default Page