import Layout from "./Layout";
import Link from "next/link";

export default function ErrPage() {
  return (
    <Layout>
      <div className="flex items-center justify-center m-[1em] ">
        <div className="grid items-center justify-center sm:w-3/6 h-[25em] bg-[#FCEDC6] rounded-md shadow-xl ">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-red-600 text-9xl">404</h1>

            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span> Page not found
            </h6>

            <p className="mb-8 text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t exist yet.
            </p>

            <Link href="/">
              <a className="px-6 py-2 text-sm font-semibold text-red-600 bg-white">
                Go Back
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
