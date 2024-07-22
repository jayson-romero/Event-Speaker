import useGeneralizedCrudMethod from "./useGeneralizedCrudMethod"

const userSpeakersData = () => {
	const url = "http://localhost:3000/speakers"
	const errorNotificationFn = (error) => {
		console.log("Error from useSpeakersData", error)
	}

	const { data, error, loadingStatus } = useGeneralizedCrudMethod(
		url,
		errorNotificationFn
	)

	return {
		speakerList: data,
		loadingStatus,
		error,
	}
}

export default userSpeakersData
