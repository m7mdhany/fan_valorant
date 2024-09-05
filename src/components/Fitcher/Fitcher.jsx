export const get_data = async (url) => {
  const api = url
  let Data = await fetch(api)
    .then((res) => res.json())
    .then((data) => data);
    Data = Data.data
  return Data
};