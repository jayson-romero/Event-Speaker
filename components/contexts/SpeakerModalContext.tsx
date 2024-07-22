import { createContext, useState } from "react"

const SpeakerModalContext = createContext({})

const SpeakerModalProvider = ({ children }) => {
	const [modalShow, setModalShow] = useState(false)

	const [modalSpeakerId, setModalSpeakerId] = useState(0)
	const [modalSpeakerFirstName, setModalSpeakerFirstName] = useState("")
	const [modalSpeakerLastName, setModalSpeakerLastName] = useState("")
	const [modalSpeakerImageUrl, setModalSpeakerImageUrl] = useState("")
	const [modalSpeakerEmail, setModalSpeakerEmail] = useState("")

	const value = {
		modalShow,
		setModalShow,
		modalSpeakerId,
		setModalSpeakerId,
		modalSpeakerFirstName,
		setModalSpeakerFirstName,
		modalSpeakerLastName,
		setModalSpeakerLastName,
		modalSpeakerEmail,
		setModalSpeakerEmail,
		modalSpeakerImageUrl,
		setModalSpeakerImageUrl,
	}

	return (
		<SpeakerModalContext.Provider value={value}>
			{children}
		</SpeakerModalContext.Provider>
	)
}
export { SpeakerModalContext, SpeakerModalProvider }
