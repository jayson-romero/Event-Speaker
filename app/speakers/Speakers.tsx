"use client"
// REACT HOOK
import { useContext } from "react"
// CONTEXT PROVIDER

import { SpeakersDataProvider } from "@/components/contexts/SpeakersDataContext"
import { SpeakerMenuProvider } from "@/components/contexts/SpeakerMenuContext"

// CONTEXT
import { ThemeContext } from "@/components/contexts/ThemeContext"

// COMPONETS
import SpeakerMenu from "@/app/speakers/SpeakerMenu"
import SpeakersList from "@/app/speakers/SpeakersList"

const Speakers = () => {
	const { darkTheme } = useContext<any>(ThemeContext)

	return (
		<div className={darkTheme ? "theme-dark" : "theme-light"}>
			<SpeakersDataProvider>
				<SpeakerMenuProvider>
					<SpeakerMenu />

					<div className="container">
						<div className="row g-4">
							<SpeakersList />
						</div>
					</div>
				</SpeakerMenuProvider>
			</SpeakersDataProvider>
		</div>
	)
}
export default Speakers
