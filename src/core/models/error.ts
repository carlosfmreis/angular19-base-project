export enum AppErrors {
  NotFound = 'NOT_FOUND_ERROR',
  Unauthorized = 'UNAUTHORIZED_ERROR',
  Forbidden = 'FORBIDDEN_ERROR',
  General = 'GENERAL_ERROR',
}

interface AppErrorParams {
  type: AppErrors;
  message: string;
  cause?: any;
}

export class AppError extends Error {
  constructor(params: AppErrorParams) {
    super();
    this.name = params.type;
    this.message = params.message;
    this.cause = params.cause;
  }
}
