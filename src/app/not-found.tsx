import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="w-[100vw] h-[100vh] bg-tertiary flex flex-col justify-center items-center">
      <h1 className="text-6xl md:text-3xl text-primary font-bold">
        Page Not Found
      </h1>
      <p className="lg:text-2xl text-xl font-medium mt-5 md:mt-2 text-white">
        {" "}
        Oops, there is nothing here...
      </p>

      <Link
        href={"/"}
        className="py-3 px-4 bg-primary text-white text-2xl md:text-xl font-medium mt-10"
      >
        Go Back Home
      </Link>
    </div>
  );
}
