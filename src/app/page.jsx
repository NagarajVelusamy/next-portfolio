import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-20 text-center flex justify-center items-center">
      <div className="max-w-screen-md">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
          Full Stack Developer with Over 2.5 Years of Experience
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          As a Full Stack Developer with a focus on React.js and Node.js, I
          bring a wealth of experience and expertise to the table. With a
          dedication to writing robust, high-quality code and a knack for
          problem-solving, I&apos;m committed to creating user-friendly
          solutions that leave a lasting impression.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/Resume.docx"
            className="text-black bg-white hover:bg-gray-50  font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center gap-2"
            download
          >
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-download"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
          </a>
          <Link
            href="/contact"
            className="text-white bg-gray-900 hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          >
            Contact me
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
