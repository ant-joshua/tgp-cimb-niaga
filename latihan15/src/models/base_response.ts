export class BaseResponse<T, R = any> {
  status: number;
  message: string;
  data: T;
  errors?: R;

  constructor(status: number, message: string, data: T) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}

// let baseResponse = new BaseResponse(200, "Success", "Hello, World!");
// baseResponse = new BaseResponse<number>(200, "Success", 100);
