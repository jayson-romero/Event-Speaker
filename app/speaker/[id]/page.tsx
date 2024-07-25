"use client"
// REACT HOOK
import { useContext } from "react"
//CONTEXT PROVIDER && HOOK
import {
	SpeakersDataContext,
	SpeakersDataProvider,
} from "@/components/contexts/SpeakersDataContext"
import { ThemeContext } from "@/components/contexts/ThemeContext"
// COMPONENT
import SpeakerDetail from "@/app/speakers/SpeakerDetail"

const Inner = ({ id }: { id: string }) => {
	const { darkTheme } = useContext<any>(ThemeContext)
	const { speakerList, loadingStatus } = useContext<any>(SpeakersDataContext)

	if (loadingStatus === "loading") return <div>Loading...</div>

	const speakerRec = speakerList?.find((rec: any) => rec.id === id)

	return speakerRec ? (
		<div className={darkTheme ? "theme-dark" : "theme-light"}>
			<SpeakerDetail speakerRec={speakerRec} showDetails={true} />
		</div>
	) : (
		<h2 className="text-danger">Speaker {id} not found</h2>
	)
}

const Speaker = (props: any) => {
	return (
		<SpeakersDataProvider>
			<Inner {...props.params} />
		</SpeakersDataProvider>
	)
}

export default Speaker
