import { useState, useEffect } from "react"

export function useFetch(url, options = {}) {
    const [data, setdata] = useState()
    const [isLoading, setisLoading] = useState(true)
    const [isError, setisError] = useState(false)

    useEffect(() => {
        setdata(undefined)
        setisError(false)
        setisLoading(true);

        const controlller = new AbortController()

        fetch(url, { signal: controlller.signal, ...options })
            .then(response => {
                if (response.status === 200) return response.json()
                return Promise.reject(response)
            })
            .then(setdata)
            .catch((e) => {
                if (e.name === 'AbortError') return
                setisError(false)
            })
            .finally(() => {
                // now what Happening that if controller.abort is called ,  
                // it will start from  .catch to .final and this will lead to setisloading to false
                // So we're going to add this line below
                if (controlller.signal.aborted) return
                setisLoading(false)
            })

        return () => {
            controlller.abort()
        }
    }, [url])
    return { data, isError, isLoading }
}
