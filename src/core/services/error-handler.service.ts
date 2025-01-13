import { ErrorHandler, Injectable } from '@angular/core';
import { AppError } from '../models/error';

@Injectable()
export class AppErrorHandler extends ErrorHandler {
  override handleError(error: any): void {
    if (error instanceof AppError) {
      // TODO: implement
    }
    console.log(`ERROR: ${error.message}`);
  }
}
