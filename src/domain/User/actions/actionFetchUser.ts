import { queryFetchUser } from "@/domain/User/api/queryFetchUser"
import { urql } from "@/modules"

export async function actionFetchUser() {
  return urql.getClient().query(queryFetchUser, {})
}
