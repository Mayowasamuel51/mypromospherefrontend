const testEndpoint = async () => {
  try {
    const response = await fetch('https://apimypromospheretest.com.ng/api/trendingads');

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const data = await response.json();

    // Handle potential data structure (replace with actual keys)
    const items = data.normalads || data.data || [];
    const filteredData = items.filter((item) => item.categories === 'Skincare');

    console.log(filteredData);
  } catch (error) {
    console.error('Error fetching or processing data:', error);
  }
};

testEndpoint();