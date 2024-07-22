"use client"
// REACT HOOK
import { useContext } from "react"
// REACT ICON
import { IoCloseSharp } from "react-icons/io5"
//CONTEXT
import { SpeakerModalContext } from "@/components/contexts/SpeakerModalContext"

const SpeakerModalHeader = () => {
	const { setModalShow, modalSpeakerId } = useContext(SpeakerModalContext)

	return (
		<div className="modal-header bg-main-gradient text-white ">
			<h5 className="modal-title">
				{modalSpeakerId === 0 ? (
					<span>Add Speaker</span>
				) : (
					<span>Edit Speaker</span>
				)}
			</h5>
			<button
				type="button"
				onClick={() => {
					setModalShow(false)
				}}
				className="btn btn-sm text-dark"
				data-dismiss="modal"
				area-label="close"
			>
				<IoCloseSharp />
			</button>
		</div>
	)
}
export default SpeakerModalHeader
