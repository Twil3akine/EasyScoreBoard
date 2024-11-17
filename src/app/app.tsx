import "@/global.css"
import { Button } from "@/components/ui/button"

const toggleBackground: () => void = () => {
    const root: HTMLElement = document.documentElement;
    const currentTheme: string | null = root.getAttribute("data-theme");

    root.setAttribute("data-theme", currentTheme === "light" ? "dark" : "light");
}

const Page: React.FC = () => {
    return (
        <main className={`w-screen h-screen flex flex-col justify-center items-center`}>
            <Button onClick={toggleBackground}>Click</Button>
        </main>
    )
}

export default Page