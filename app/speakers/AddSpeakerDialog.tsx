"use client"
// REACT HOOK
import { useContext } from "react"
// CONTEXT
import { SpeakerModalContext } from "@/components/contexts/SpeakerModalContext"
// COMPONENT
import SpeakerModal from "./speakerModal/SpeakerModal"

const AddSpeakerDialog = () => {
	const {
		setModalShow,
		setModalSpeakerId,
		setModalSpeakerFirstName,
		setModalSpeakerLastName,
		setModalSpeakerEmail,
		setModalSpeakerImageUrl,
	} = useContext(SpeakerModalContext)

	return (
		<>
			<SpeakerModal modalShow={false} />
			<button
				onClick={() => {
					setModalSpeakerId(0)
					setModalSpeakerFirstName("")
					setModalSpeakerLastName("")
					setModalSpeakerEmail("")
					setModalSpeakerImageUrl("/images/Speaker-New.jpg")
					setModalShow(true)
				}}
				className="btn btn-accent"
			>
				Add Speaker <i className="fa fa-plus" />
			</button>
		</>
	)
}
export default AddSpeakerDialog
