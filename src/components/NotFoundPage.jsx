import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div class="flex justify-center items-center flex-col">
      <p>404 Not Found</p>

      <Link to="/">Home</Link>
    </div>
  );
}
