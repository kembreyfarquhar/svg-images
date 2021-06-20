import axios from "axios";

class RequestError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

class HttpClient {
  baseUrl = "http://localhost:4000";

  async nonAuthCall(headers) {
    return axios.create({
      baseURL: this.baseUrl,
      withCredentials: true,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      headers: { ...headers },
    });
  }

  authCall(headers) {
    const token = localStorage.getItem("user_token");
    if (!token)
      throw new RequestError("Please login to access this page.", 401);
    return axios.create({
      baseURL: this.baseUrl,
      withCredentials: true,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      headers: { ...headers, Authorization: token },
    });
  }
}

export default new HttpClient();
