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

	// =================== READ DATA =======================
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

	// =================== CREATE DATA =======================

	const createRecord = (createObject, callbackDone) => {
		const addData = async () => {
			const startingData = data.map((rec) => {
				return { ...rec }
			})
			try {
				// createObject.id = Math.max(...data.map((o) => o.id), 0) + 1
				// setData((oriState) => {
				// 	return [createObject, ...oriState]
				// })
				await axios.post(`${url}`, createObject)
				if (callbackDone) callbackDone()
			} catch (e) {
				setData(startingData)
				const errorString = formatErrorString(e, url)
				errorNotificationFn?.(errorString)
				if (callbackDone) callbackDone()
			}
		}
		addData()
	}

	// =================== UPDATE DATA =======================

	const updateRecord = (updateObject, callbackDone) => {
		const id = updateObject.id // all speakers must have a column "id"
		async function updateData() {
			//const startingData = [...data]; // FAILS BECAUSE NOT DEEP COPY
			const startingData = data.map(function (rec) {
				return { ...rec }
			})
			try {
				setData(function (oriState) {
					const dataRecord = oriState.find((rec) => rec.id === id)

					// only update the fields passed in for the updateObject
					for (const [key, value] of Object.entries(updateObject)) {
						dataRecord[key] = value === undefined ? dataRecord[key] : value
					}
					return oriState.map((rec) => (rec.id === id ? dataRecord : rec))
				})
				await new Promise((resolve) => setTimeout(resolve, 2000))

				// get the full record back that has been updated
				const updatedRecord = data.find((rec) => rec.id === id)
				await axios.put(`${url}/${id}`, updatedRecord)
				// console.log(`done  call axios.put`);
				if (callbackDone) callbackDone()
			} catch (e) {
				setData(startingData)
				const errorString = formatErrorString(e, url)
				errorNotificationFn?.(errorString)
				if (callbackDone) callbackDone()
			}
		}

		if (data.find((rec) => rec.id === id)) {
			updateData()
		} else {
			const errorString = `No data record found for id ${id}`
			errorNotificationFn?.(errorString)
		}
	}

	// =================== DELETE DATA =======================
	const deleteRecord = (id, callbackDone) => {
		async function deleteData() {
			const startingData = data.map(function (rec) {
				return { ...rec }
			})
			try {
				setData(function (oriState) {
					return oriState.filter((rec) => rec.id != id)
				})
				await axios.delete(`${url}/${id}`)
				if (callbackDone) callbackDone()
			} catch (e) {
				setData(startingData)
				const errorString = formatErrorString(e, url)
				errorNotificationFn?.(errorString)
				if (callbackDone) callbackDone()
			}
		}
		if (data.find((rec) => rec.id === id)) {
			deleteData()
		} else {
			const errorString = `No data record found for id ${id}`
			errorNotificationFn?.(errorString)
		}
	}
	return {
		data,
		error,
		loadingStatus,
		createRecord,
		updateRecord,
		deleteRecord,
	}
}
export default useGeneralizedCrudMethod
