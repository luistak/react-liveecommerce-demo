import FetchService from "app/base/service";

class LoginService {
  static login (clientId = null, apiKey = null) {

    const aaa = FetchService.get('accesstoken', { clientId,  apiKey });


    console.log(aaa);
  }
}

export default LoginService;