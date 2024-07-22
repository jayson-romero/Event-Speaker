const useSpeakerSortandFilter = (
	speakerList,
	speakingSaturday,
	speakingSunday,
	searchText
) => {
	return speakerList
		? speakerList
				.filter(
					({ sat, sun }) => (speakingSaturday && sat) || (speakingSunday && sun)
				)
				.filter(({ firstName, lastName }) => {
					return (
						searchText.length === 0 ||
						(firstName?.toLowerCase() + lastName?.toLowerCase()).includes(
							searchText.toLowerCase()
						)
					)
				})
				.sort((a, b) => {
					if (a.firstName < b.firstName) {
						return -1
					}
					if (a.firstName > b.firstName) {
						return 1
					}
					return 0
				})
		: []
}
export default useSpeakerSortandFilter
