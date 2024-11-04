package id.vultra.demo.dto.response;

public class BaseResponse<T> {
    private String message;
    private T data;

    public BaseResponse() {
    }

    public BaseResponse(String message, T data) {
        this.message = message;
        this.data = data;
    }

    public BaseResponse(String message) {
        this.message = message;
    }

    public BaseResponse(T data) {
        this.data = data;
    }

    public String getMessage() {
        return this.message;
    }

    public T getData() {
        return this.data;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setData(T data) {
        this.data = data;
    }
}
