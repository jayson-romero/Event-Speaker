"use client"
// REACT HOOK
import { useContext } from "react"

// CUSTOM HOOK
import useSpeakerSortandFilter from "@/components/hooks/useSpeakerSortandFilter"

// CONTEXT
import { SpeakersDataContext } from "@/components/contexts/SpeakersDataContext"
import { SpeakerMenuContext } from "@/components/contexts/SpeakerMenuContext"

// COMPONENT
import SpeakerDetail from "./SpeakerDetail"

const SpeakersList = () => {
	const { speakerList, loadingStatus } = useContext<any>(SpeakersDataContext)
	const { speakingSaturday, speakingSunday, searchText } =
		useContext<any>(SpeakerMenuContext)

	const filterdData = useSpeakerSortandFilter(
		speakerList,
		speakingSaturday,
		speakingSunday,
		searchText
	)

	// 	const speakerListJson = JSON.stringify(speakerList);
	//   const speakerListFiltered = useMemo(
	//     () =>
	//       useSpeakerSortAndFilter(
	//         speakerList,
	//         speakingSaturday,
	//         speakingSunday,
	//         searchText
	//       ),
	//     [speakingSaturday, speakingSunday, searchText, loadingStatus,
	//       speakerListJson],
	//   );

	if (loadingStatus === "loading") {
		return <div className="card">Loading...</div>
	}

	return (
		<>
			{filterdData.map((speakerRec: any) => {
				return (
					<SpeakerDetail
						key={speakerRec.id}
						speakerRec={speakerRec}
						showDetails={false}
					/>
				)
			})}
		</>
	)
}
export default SpeakersList
