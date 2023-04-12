import axios from 'axios'

const API_URL = "https://randomuser.me/api/?results=20";

export async function getDataAPI() {

  try {
    const dataRandomUser = await axios.get(`${API_URL}`);
    return dataRandomUser;
  } catch (error) {
    console.log(error);
  }
}

