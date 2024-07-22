import { useState } from "react"

const useTheme = () => {
	const [darkTheme, setDarkTheme] = useState(false)
	const toggleTheme = () => setDarkTheme(!darkTheme)

	const value = {
		darkTheme,
		toggleTheme,
	}

	return value
}
export default useTheme
