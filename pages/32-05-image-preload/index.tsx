import { useRouter } from "next/router";
import { useEffect } from "react";
import { preloadimage } from "../../src/commons/libraries/preloadimage";

const PRELOAD_IMAGES = [
  "https://upload.wikimedia.org/wikipedia/commons/8/80/Shinjuku01s2880.jpg",
];

export default function ImagepreLoadPage() {
  const router = useRouter();

  useEffect(() => {
    preloadimage(PRELOAD_IMAGES);
  }, []);
  const onClickMove = () => {
    void router.push("/32-06-image-preload-move");
  };

  return (
    <>
      <button onClick={onClickMove}>Move To Page</button>
    </>
  );
}
