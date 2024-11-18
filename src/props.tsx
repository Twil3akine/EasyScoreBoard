export type Theme = {
    currentTheme: "light" | "dark"
    toggleTheme: () => void
}

export interface ThemeProps {
    Theme: Theme
}