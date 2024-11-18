import { Sun, Moon } from 'lucide-react'
import { Switch } from "@/components/ui/switch"
import { ThemeProps } from "@/props"

const ChangeTheme: React.FC<ThemeProps> = ({ Theme }) => {
  return (
    <div className={`flex space-x-3`}>
      <Sun className={`bg-transparent`} />
      <Switch checked={Theme.currentTheme === "dark"} onCheckedChange={Theme.toggleTheme}/>
			<Moon className={`bg-transparent`} />
    </div>
  )
}

export default ChangeTheme