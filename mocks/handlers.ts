import { http, HttpResponse } from "msw"

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", (res) => {
    return HttpResponse.json({ name: "Bruce" })
  }),
]
