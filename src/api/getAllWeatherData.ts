import axios, { AxiosError, AxiosRequestConfig } from "axios";

export const GetAllWeatherData = async () => {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events",
  };
  const data = await axios(config)
    .then((response) => response)
    .catch((error: any) => {
      const err = error as AxiosError<{ status: string }>;
      return err.response;
    });
  return data;
};
