"use client"
import { useContext, useState } from "react"
import { SpeakersDataContext } from "@/components/contexts/SpeakersDataContext"
import { FaHeart } from "react-icons/fa"

export default function FavoriteSpeakerToggle({ speakerRec }) {
	const { updateSpeaker } = useContext(SpeakersDataContext)
	const [updating, setUpdating] = useState(false)

	return (
		<button
			className={speakerRec.favorite ? " btn" : " btn"}
			onClick={(e) => {
				e.preventDefault()
				console.log(updateSpeaker)
				const newSpeakerRec = {
					...speakerRec,
					favorite: !speakerRec.favorite,
				}
				setUpdating(true)
				updateSpeaker(newSpeakerRec, () => {
					setUpdating(false)
				})
			}}
		>
			{updating ? (
				<i className="spinner-border text-dark" role="status" />
			) : speakerRec.favorite ? (
				<FaHeart style={{ color: "red", fontSize: "1.5em" }} />
			) : (
				<FaHeart style={{ color: "black", fontSize: "1.5em" }} />
			)}
		</button>
	)
}
