"use client"
import { FaHeart } from "react-icons/fa"
import { useContext, useState } from "react"
import { SpeakersDataContext } from "@/components/contexts/SpeakersDataContext"
export default function FavoriteSpeakerToggleLine({
	speakerRec,
}: {
	speakerRec: any
}) {
	const { updateSpeaker } = useContext<any>(SpeakersDataContext)
	const [updating, setUpdating] = useState(false)

	return (
		<button
			className={speakerRec.favorite ? " btn" : " btn"}
			onClick={(e) => {
				e.preventDefault()

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
