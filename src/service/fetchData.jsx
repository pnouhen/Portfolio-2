export async function fetchData(URLData) {
  try {
    const response = await fetch(URLData);
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors du fecth");
    throw error;
  }
}
