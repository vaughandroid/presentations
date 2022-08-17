export type Result<SuccessData, FailureReason> =
  | { successful: true, data: SuccessData }
  | { successful: false, reason: FailureReason };