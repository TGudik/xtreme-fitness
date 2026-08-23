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

export const blogsLoader = async () => {
    const res = await fetch(`${apiUrl}/blogs`)
    if (!res.ok) throw new Response("Fejl i at hente blogposts", {status: res.status})
    const preData = await res.json()
    const data = preData.data
    return data
}


/* Page loaders */
export const aboutPageLoader = async () => {
    const [ blogs ] = await Promise.all([
        blogsLoader()
    ])

    return {
        blogs
    }
}

export const employeePageLoader = async () => {
    const [ employees, blogs ] = await Promise.all([
        employeesLoader(),
        blogsLoader()
    ]) 
    return {
        employees, blogs
    }
}

export const subscriptionsPageLoader = async () => {
    const [prices, reviews, blogs] = await Promise.all([
        pricesLoader(),
        reviewsLoader(),
        blogsLoader()
    ])

    return {
        prices, reviews, blogs
    }
}

export const servicePageLoader = async () => {
    const [exercises, services, reviews, blogs] = await Promise.all([
        exercisesLoader(),
        servicesLoader(),
        reviewsLoader(),
        blogsLoader()
    ])

    return {
        exercises,
        services,
        reviews,
        blogs
    }
}

export const homeLoader = async () => {
    const [employees, prices, exercises, services, reviews, blogs] = await Promise.all([
        employeesLoader(),
        pricesLoader(),
        exercisesLoader(),
        servicesLoader(),
        reviewsLoader(),
        blogsLoader()
    ])

    return {
        employees,
        prices,
        exercises,
        services,
        reviews,
        blogs
    }
}