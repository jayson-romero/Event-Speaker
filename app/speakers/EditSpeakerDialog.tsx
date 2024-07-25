"use client"
import { useContext } from "react"
import { SpeakerModalContext } from "@/components/contexts/SpeakerModalContext"

export default function EditSpeakerDialog({
	id,
	firstName,
	lastName,
	email,
	imageUrl,
}: {
	id: any
	firstName: any
	lastName: any
	email: any
	imageUrl: any
}) {
	const {
		setModalShow,
		modalShow,
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
	} = useContext<any>(SpeakerModalContext)

	return (
		<button
			onClick={(e) => {
				e.preventDefault()
				setModalSpeakerId(id)
				setModalSpeakerFirstName(firstName)
				setModalSpeakerLastName(lastName)
				setModalSpeakerImageUrl(imageUrl)
				setModalSpeakerEmail(email)
				setModalShow(true)
			}}
			className="btn btn-accent btn-sm"
		>
			<i className="fa fa-edit"></i>
			{" Edit "}
		</button>
	)
}
