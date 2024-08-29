import { getRequest } from "@/config/axiosIntercepter";
import { fetchInterets } from "@/constants/apiEndPoints";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

export default async function fetchIntrestCall() {
  const token = cookies().get("token").value;
  let intrestData;
  try {
    const response = await getRequest({
      url: fetchInterets,
      token: token,
    });
    const data = response.data;
    if (data) {
      intrestData = data;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    data: intrestData,
  };
}
