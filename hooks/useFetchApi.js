const useFetchApi = async (url) => {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/${url}`);
  
  return await res.json();
}
  
export default useFetchApi;