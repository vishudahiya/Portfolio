import { Link } from "react-router-dom";
import Header from "./Header";

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <p class="flex justify-center text-5xl items-center flex-col py-60">
        404 Not Found
      </p>
    </>
  );
}
