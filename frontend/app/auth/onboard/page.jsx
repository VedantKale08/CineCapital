import OnBoarding from "@/components/auth/OnBoarding";
import fetchIntrestCall from "@/lib/getInterests";
import React from "react";

export default async function page() {
  const data = await fetchIntrestCall();
  const genreData = await data.data.GenresData;
  const actorsData = await data.data.ActorsData;
  return (
    <div>
      <OnBoarding genreData={genreData} actorsData={actorsData} />
    </div>
  );
}
