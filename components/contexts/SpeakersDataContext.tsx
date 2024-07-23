// REACT HOOK
import { createContext } from "react"
// CUSTOM HOOK
import userSpeakersData from "../hooks/useSpeakersData"

export const SpeakersDataContext = createContext({})

export const SpeakersDataProvider = ({ children }) => {
	const {
		speakerList,
		loadingStatus,
		createSpeaker,
		updateSpeaker,
		deleteSpeaker,
	} = userSpeakersData()

	const value = {
		speakerList,
		loadingStatus,
		createSpeaker,
		updateSpeaker,
		deleteSpeaker,
	}

	return (
		<SpeakersDataContext.Provider value={value}>
			{children}
		</SpeakersDataContext.Provider>
	)
}
