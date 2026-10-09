export const ragFetch = (path: string, init: RequestInit = {}) =>
  fetch(`${process.env.RAG_SERVICE_URL}${path}`, {
    ...init,
    headers: { ...(init.headers || {}), "x-api-key": process.env.RAG_API_KEY! },
    signal: AbortSignal.timeout(90000),
  });