export const apiCall = async (url, method, data) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const options = {
    method: method,
    headers: headers,
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
