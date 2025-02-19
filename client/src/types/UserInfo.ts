export type UserInfo = {
  userId: string;
  userName: string;
  userRoleId: string;
  roleId: string;
  userStatus: string;
  isAdmin: boolean;
  isRead: boolean;
  isWrite: boolean;
  isDelete: boolean;
  isUpdate: boolean;
  isCreate: boolean;
  isPass: boolean;
  isExport: boolean;
  isImport: boolean;
  isApprove: boolean;
  isReject: boolean;
  isCancel: boolean;
  isClose: boolean;
  isSuspend: boolean;
  isResume: boolean;
  readScope: number;
  userCreatedAt: string;
  userUpdatedAt: string;
}