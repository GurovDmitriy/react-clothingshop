import { graphql } from "@/gql"

export const queryFetchUser = graphql(`
  query fetchUser($id: ID! = 1) {
    user(id: $id) {
      id
      username
      email
    }
  }
`)
