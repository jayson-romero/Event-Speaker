import { useEffect, useState } from "react"
import axios from "axios"

const LOADING_STATE = ["loading", "errored", "success"]

const useGeneralizedCrudMethod = (url, errorNotificationFn) => {
	const [data, setData] = useState()
	const [error, setError] = useState()
	const [loadingStatus, setLoadingStatus] = useState("loading")

	if (!url || url.length === 0) {
		throw "useGeneralizedCrudMethods no url passed in error"
	}

	const formatErrorString = (e, url) => {
		const errorSting =
			e?.response?.status === 404
				? e?.message + " url " + url
				: e?.message + e?.response?.data
		console.log(errorSting)
		return errorSting
	}

	// =================== GET DATA =======================
	useEffect(() => {
		const getData = async () => {
			try {
				setLoadingStatus(LOADING_STATE[0])
				const results = await axios.get(url)
				setData(results.data)
				setLoadingStatus(LOADING_STATE[2])
			} catch (e) {
				setError(e)
				setLoadingStatus(LOADING_STATE[1])
				errorNotificationFn(e)
			}
		}
		getData()
	}, [url])

	return {
		data,
		error,
		loadingStatus,
	}
}
export default useGeneralizedCrudMethod
