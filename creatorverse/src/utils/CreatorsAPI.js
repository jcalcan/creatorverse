export class Creators_API {
  constructor() {
    this._baseUrl = "http://localhost:3003/api"; //use the PORT setup in the backend
  }

  _request(endpoint, options = {}) {
    const finalOptions = {
      ...options
    };

    return fetch(endpoint, finalOptions).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getCreatorCards() {
    const url = `${this._baseUrl}/creator-cards`;
    return this._request(url, { method: "GET" });
  }

  getCreatorById(id) {
    return this._request(`${this._baseUrl}/creator-cards/${id}`, {
      method: "GET"
    });
  }

  addCreator(creatorData) {
    return this._request(`${this._baseUrl}/creator-cards`, {
      method: "POST",
      body: JSON.stringify(creatorData)
    });
  }
  updateCreator(id, creatorData) {
    return this._request(`${this._baseUrl}/creator-cards/${id}`, {
      method: "PUT",
      body: JSON.stringify(creatorData)
    });
  }
  deleteCreator(id) {
    return this._request(`${this._baseUrl}/creator-cards/${id}`, {
      method: "DELETE"
    });
  }
}
export const creatorApi = new Creators_API();
