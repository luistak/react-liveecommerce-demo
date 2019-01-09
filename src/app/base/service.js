const BASE_URL = 'https://api.liveecommerce.com.br';

const METHODS = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
};

class FetchService {
  static fetch(endpoint = null, options = {}) {
    const { requestOptions, queryParams } = options;

    const configs = {
      method: METHODS.GET,
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      ...(requestOptions || {})
    };

    let url = new URL(`${BASE_URL}/${endpoint}`)
    url.search = queryParams || {};

    return fetch(url, configs);
  }

  static get(endpoint, queryParams = null, requestOptions = {}) {
    let options = {
      ...requestOptions
    }

    if (queryParams) {
      const UrlParams = new URLSearchParams(queryParams);
      options.queryParams = UrlParams;
    }

    this.fetch(endpoint, options)
    .then(res => {
      console.log(res);
      console.log(res.contentType);
      console.log(res.text());
      // console.log(res.json());
      return res.json();
    })
    .catch(err => {
      return err;
    });
  }
}

export default FetchService;
