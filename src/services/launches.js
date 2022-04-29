const API_URL = "https://api.spacexdata.com/v3/launches?limit=100";

export async function getAllLaunches() {
  try {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
