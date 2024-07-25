"use client"
// REACT HOOK
import { useContext } from "react"
//CONTEXT
import { SpeakerModalContext } from "@/components/contexts/SpeakerModalContext"

const SpeakerModalBody = () => {
	const {
		modalSpeakerId,
		modalSpeakerFirstName,
		setModalSpeakerFirstName,
		modalSpeakerLastName,
		setModalSpeakerLastName,
		modalSpeakerImageUrl,
		setModalSpeakerImageUrl,
		modalSpeakerEmail,
		setModalSpeakerEmail,
	} = useContext<any>(SpeakerModalContext)

	return (
		<div className="modal-body">
			<div className="notes-box">
				<div className="notes-content">
					<form>
						<div className="row">
							<div className="col-md-12">
								<div className="note-title">
									<label>Speaker Id:</label>
									<span>{modalSpeakerId}</span>
								</div>
							</div>
							<div className="col-md-12">
								<div className="note-title">
									<label>First Name</label>
									<input
										value={modalSpeakerFirstName}
										onChange={(event) => {
											setModalSpeakerFirstName(event.target.value)
										}}
										type="text"
										className="form-control"
										placeholder="First Name"
									/>
								</div>
							</div>
							<div className="col-md-12">
								<div className="note-title">
									<label>Last Name</label>
									<input
										value={modalSpeakerLastName}
										onChange={(event) => {
											setModalSpeakerLastName(event.target.value)
										}}
										type="text"
										className="form-control"
										placeholder="Last Name"
									/>
								</div>
							</div>
							<div className="col-md-12">
								<div className="note-title">
									<label>Email</label>
									<input
										value={modalSpeakerEmail}
										onChange={(event) => {
											setModalSpeakerEmail(event.target.value)
										}}
										type="text"
										className="form-control"
										placeholder="Email"
									/>
								</div>
							</div>
							<div className="col-md-12">
								<div className="note-title">
									<label>Speaker Image URL:</label>
									<input
										value={modalSpeakerImageUrl}
										onChange={(event) => {
											setModalSpeakerImageUrl(event.target.value)
										}}
										type="text"
										className="form-control"
										placeholder="https://"
									/>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
export default SpeakerModalBody
