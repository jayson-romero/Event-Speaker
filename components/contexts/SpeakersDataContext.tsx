// REACT HOOK
import { createContext } from "react"
// CUSTOM HOOK
import userSpeakersData from "../hooks/useSpeakersData"

export const SpeakersDataContext = createContext({})

export const SpeakersDataProvider = ({ children }) => {
	const { speakerList, loadingStatus } = userSpeakersData()

	const value = {
		speakerList,
		loadingStatus,
	}

	return (
		<SpeakersDataContext.Provider value={value}>
			{children}
		</SpeakersDataContext.Provider>
	)
}
