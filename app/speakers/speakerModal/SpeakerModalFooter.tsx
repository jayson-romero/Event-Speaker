"use client"
// REACT HOOK
import { useContext } from "react"
//CONTEXT
import { SpeakerModalContext } from "@/components/contexts/SpeakerModalContext"
import { SpeakersDataContext } from "@/components/contexts/SpeakersDataContext"

const SpeakerModalFooter = () => {
	const { speakerList } = useContext(SpeakersDataContext)
	const {
		setModalShow,
		modalSpeakerId,
		modalSpeakerFirstName,
		modalSpeakerLastName,
		modalSpeakerEmail,
		modalSpeakerImageUrl,
	} = useContext(SpeakerModalContext)

	return (
		<div className="modal-footer justify-content-center">
			{modalSpeakerId !== 0 && (
				<button
					onClick={() => {
						// updateSpeaker({
						//   id: modalSpeakerId,
						//   firstName: modalSpeakerFirstName,
						//   lastName: modalSpeakerLastName,
						//   imageUrl: modalSpeakerImageUrl,
						//   email: modalSpeakerEmail,
						// });
						setModalShow(false)
					}}
					className="float-left btn btn-accent"
				>
					Save
				</button>
			)}

			<button
				className="btn btn-danger"
				onClick={() => {
					setModalShow(false)
				}}
				data-dismiss="modal"
			>
				Discard
			</button>

			{modalSpeakerId === 0 && (
				<button
					className="btn btn-accent"
					onClick={() => {
						// createSpeaker({
						//   firstName: modalSpeakerFirstName,
						//   lastName: modalSpeakerLastName,
						//   email: modalSpeakerEmail,
						//   imageUrl: modalSpeakerImageUrl,
						//   sat: true,
						//   sun: true,
						//   favorite: false,
						//   company: "Code Camp",
						//   twitterHandle: "unknown",
						//   userBioShort: "Dummy Bio",
						//   bio: "Dummy Bio",
						// });
						setModalShow(false)
					}}
				>
					Add
				</button>
			)}
		</div>
	)
}
export default SpeakerModalFooter
