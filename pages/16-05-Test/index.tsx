import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenApiwithUseEffectPage() {
  const [dogUrl, seturl] = useState("");

  useEffect(() => {
    const FetchDog = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      seturl(result.data.message);
    };
    void FetchDog();
  }, []);

  return (
    <>
      <img src={dogUrl} />
    </>
  );
}
