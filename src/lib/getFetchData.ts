export const getFetchData = async (filename: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/data/${filename}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch translations: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching translations:", error);
    throw error;
  }
};
