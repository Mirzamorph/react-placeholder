const apiBase = 'https://jsonplaceholder.typicode.com'
const defaultHeaders = {
    'Content-Type': 'application/json'
}

class Req {
    constructor(apiBase, defaultHeaders) {
        this.apiBase = apiBase
        this.defaultHeaders = defaultHeaders
    }

    async get(url, headers = {}) {
        const res = await fetch(`${this.apiBase}/${url}`, {
            method: 'GET',
            headers: {
                ...this.defaultHeaders,
                ...headers
            }
        })
        return await res.json()
    }

    async post(url, body, headers) {
        let data
        try {
            data = JSON.stringify(body)
        } catch(e) {
            throw new Error(e.message)
        }

        const res = await fetch(`${this.apiBase}/${url}`, {
            method: 'POST',
            body: data,
            headers: {
                ...this.defaultHeaders,
                ...headers
            }
        })
        return await res.json()
    }

}

export const req = new Req(apiBase, defaultHeaders)
