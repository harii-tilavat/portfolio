export interface UserDataModel {
  name: string;
  email: string;
  subject: string;
  message: string;
  id?: string;
}
export interface UserFeedbackModel {
  id: number,
  userName: string,
  userFeedback?: string,
  userReply?: string,
  date?: Date
}
