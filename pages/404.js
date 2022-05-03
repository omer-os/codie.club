import Layout from "./Layout";
import Link from "next/link";

export default function ErrPage() {
  return (
    <Layout>
      <div class="flex items-center justify-center m-[1em] ">
        <div class="grid items-center justify-center sm:w-3/6 h-[25em] bg-[#FCEDC6] rounded-md shadow-xl ">
          <div class="flex flex-col items-center">
            <h1 class="font-bold text-red-600 text-9xl">404</h1>

            <h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span class="text-red-500">Oops!</span> Page not found
            </h6>

            <p class="mb-8 text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>

            <Link href="/">
              <a class="px-6 py-2 text-sm font-semibold text-red-600 bg-white">
                Go home
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
