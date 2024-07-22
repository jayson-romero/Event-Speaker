// REACT HOOK
import { createContext, useState } from "react"

const SpeakerMenuContext = createContext({})

const SpeakerMenuProvider = ({ children }) => {
	const [speakingSaturday, setSpeakingSaturday] = useState(true)
	const [speakingSunday, setSpeakingSunday] = useState(true)
	const [searchText, setSearchText] = useState("")

	const value = {
		speakingSaturday,
		setSpeakingSaturday,
		speakingSunday,
		setSpeakingSunday,
		searchText,
		setSearchText,
	}

	return (
		<SpeakerMenuContext.Provider value={value}>
			{children}
		</SpeakerMenuContext.Provider>
	)
}
export { SpeakerMenuContext, SpeakerMenuProvider }
