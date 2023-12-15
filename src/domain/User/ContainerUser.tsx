import { actionFetchUser } from "@/domain/User/actions/actionFetchUser"
import { UIUserDetail } from "@/domain/User/components/UIUserDetail/UIUserDetail"
import { IUserDetail } from "@/domain/User/types/types"

export async function ContainerUser() {
  const response = await actionFetchUser()

  return (
    <UIUserDetail entity={response.data?.user as IUserDetail | undefined} />
  )
}
