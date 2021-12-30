const api = 'http://localhost:8080/api';

export default async function fetchRequest(url, options) {
  try {
    const response = await fetch(`${api}${url}`, options);
    const result = await response.json();
    return {
      status: response.status,
      data: await result,
      ok: response.ok,
    }
  } catch (error) {
    return { status: 500, ok: false, data: null }
  }
}