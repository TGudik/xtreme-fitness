const apiUrl = "http://localhost:3042"

export const employeesLoader = async () => {
    const res = await fetch(`${apiUrl}/employees`)
    if (!res.ok) throw new Response("Fejl i at hente trænere", {status: res.status})
    const preData = await res.json()
    const data = preData.data
    return data
}

export const pricesLoader = async () => {
    const res = await fetch(`${apiUrl}/subscriptions`)
    if (!res.ok) throw new Response("Fejl i at hente priser", {status: res.status})
    const preData = await res.json()
    const data = preData.data
    return data
}

export const homeLoader = async () => {
    const [employees, prices] = await Promise.all([
        employeesLoader(),
        pricesLoader()
    ])

    return {
        employees,
        prices
    }
}