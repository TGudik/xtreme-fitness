const apiUrl = "http://localhost:3042"

export const employeesLoader = async () => {
    const res = await fetch(`${apiUrl}/employees`)
    if (!res.ok) throw new Response("Fejl i at hente trænere", {status: res.status})
    const preData = await res.json()
    const data = preData.data
    return data
}

export const reviewsLoader = async () => {
    const res = await fetch(`${apiUrl}/reviews`);
    if (!res.ok) throw new Response("Fejl i at hente anmeldelser", { status: res.status });
    const preData = await res.json();
    const data = preData.data;
    return data;
}

export const pricesLoader = async () => {
    const res = await fetch(`${apiUrl}/subscriptions`)
    if (!res.ok) throw new Response("Fejl i at hente priser", {status: res.status})
    const preData = await res.json()
    const data = preData.data
    return data
}

export const exercisesLoader = async () => {
    const res = await fetch(`${apiUrl}/exercises`)
    if (!res.ok) throw new Response("Fejl i at hente øvelser", {status: res.status})
    const preData = await res.json()
    const data = preData.data
    return data
}

export const servicesLoader = async () => {
    const res = await fetch(`${apiUrl}/services`)
    if (!res.ok) throw new Response("Fejl i at hente øvelser", {status: res.status})
    const preData = await res.json()
    const data = preData.data
    return data
}

export const subscriptionsPageLoader = async () => {
    const [prices, reviews] = await Promise.all([
        pricesLoader(),
        reviewsLoader()
    ])

    return {
        prices, reviews
    }
}

export const servicePageLoader = async () => {
    const [exercises, services, reviews] = await Promise.all([
        exercisesLoader(),
        servicesLoader(),
        reviewsLoader()
    ])

    return {
        exercises,
        services,
        reviews
    }
}

export const homeLoader = async () => {
    const [employees, prices, exercises, services, reviews] = await Promise.all([
        employeesLoader(),
        pricesLoader(),
        exercisesLoader(),
        servicesLoader(),
        reviewsLoader()
    ])

    return {
        employees,
        prices,
        exercises,
        services,
        reviews
    }
}