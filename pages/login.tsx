import LoadingDots from '@/components/app/loading-dots';
import {signIn} from 'next-auth/react';
import Image from 'next/image';
import {useState} from 'react';

export default function Login() {
  const [loading, setLoading] = useState(false);
  // const ae = useSession({required: false});
  // Get error message added by next/auth in URL.
  // const {query} = useRouter();
  // const {error} = query;
  // useEffect(() => {
  //   const errorMessage = Array.isArray(error) ? error.pop() : error;
  //   // errorMessage && toast.error(errorMessage);
  // }, [error]);

  return (
    <div className="flex flex-col justify-center min-h-screen py-12 bg-gray-100 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="relative w-auto h-12 mx-auto">
          <Image alt="Platforms Starter Kit" layout="fill" objectFit="contain" src="/xpe.svg" />
        </div>
        <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Login</h2>
      </div>

      <div className="w-11/12 mx-auto mt-8 sm:w-full sm:max-w-md">
        <div className="px-4 py-8 bg-white shadow-md sm:rounded-lg sm:px-10">
          <button
            type="button"
            disabled={loading}
            onClick={() => {
              setLoading(true);
              signIn('github');
            }}
            className={`${
              loading ? 'cursor-not-allowed bg-gray-600' : 'bg-black'
            } group flex justify-center items-center space-x-5 w-full sm:px-4 h-16 my-2 rounded-md focus:outline-none`}
            aria-label="botão de login com github"
          >
            {loading ? (
              <LoadingDots color="#fff" />
            ) : (
              <svg
                className="w-8 h-8 group-hover:animate-wiggle"
                aria-hidden="true"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
