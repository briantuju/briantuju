// Make the `request` function generic to specify the return data type:
async function fetchRequestWrapper<TResponse>(
  url: string,
  config: RequestInit = {}
): Promise<{
  data: TResponse
  success: boolean
}> {
  const response = await fetch(url, config)

  // When got a response call a `json` method on it and return the result data
  const data = await response.json()

  return {
    data,
    success: response.status < 400,
  }
}

export default fetchRequestWrapper
