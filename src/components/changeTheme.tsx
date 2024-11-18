import { Sun, Moon } from 'lucide-react'
import { Switch } from "@/components/ui/switch"
import { ThemeProps } from "@/props"

const ChangeTheme: React.FC<ThemeProps> = ({ currentTheme, toggleTheme }) => {
  
  return (
    <div className={`flex space-x-3`}>
      <Sun className={`bg-transparent`} />
			<Switch checked={currentTheme==="dark"} onCheckedChange={toggleTheme}/>
			<Moon className={`bg-transparent`} />
    </div>
  )
}

export default ChangeTheme