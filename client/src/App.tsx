import { FC, useEffect } from "react"
import { useDispatch } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router"
import { useErrorBoundary } from "react-error-boundary";

import Loading from "./components/Loading";
import { UserInfo } from "./types/UserInfo";

const router = createBrowserRouter(routes);

const initializeUserData = async(
  dispatch: any,
  showBoundary: (error: Error) => void
) => {
  try {
    const userData: UserInfo = await getUserInfo();

    // ユーザー基本情報設定
    dispatch(
      setUserInfo({
        userId: userData.userId,
        userName: userData.userName,
        userRoleId: userData.userRoleId,
        roleId: userData.roleId,
      })
    )
    // ユーザー権限設定
    dispatch(
      setPermissions({
        isAdmin: userData.isAdmin,
        isRead: userData.isRead,
        isPass: userData.isPass,
        isApprove: userData.isApprove,
        isWrite: userData.isWrite,
        isDelete: userData.isDelete,
        isUpdate: userData.isUpdate,
        isCreate: userData.isCreate,
        isExport: userData.isExport,
        isImport: userData.isImport,
        isClose: userData.isClose,
        isSuspend: userData.isSuspend,
        isResume: userData.isResume,
        isReject: userData.isReject,
        isCancel: userData.isCancel,
      })
    )
    dispatch(
      setScope({
        readScope: userData.readScope,
        updateScope: userData.updateScope,
        createScope: userData.createScope,
        deleteScope: userData.deleteScope,
        exportScope: userData.exportScope,
        importScope: userData.importScope,
      })
    )
  } catch (error) {
    showBoundary(error as Error)
  }
}

const App: FC = () => {
  const { showBoundary } = useErrorBoundary()
  const dispatch = useDispatch()

  useEffect(() => {},[])

  return (
    <RouterProvider router={router} fallbackElement={<Loading />} />
  )
}

export default App
