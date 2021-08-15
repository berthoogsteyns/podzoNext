import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Navbar from "../components/NavBar/Navbar";
import { SWRConfig } from "swr";
import dynamic from "next/dynamic";
import LoadingComponent from "../components/LoadingComponent";

function App({ Component, pageProps }: AppProps) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  // const baseUrl = process.env.REACT_APP_API_BASEURL;

  return (
    <SWRConfig
      value={{
        // suspense: true,
        revalidateOnFocus: false,
        revalidateOnMount: true,
        fetcher: (resource, init) =>
          fetch({ ...resource, headers: { "user-key": apiKey } }, init).then(
            (res) => res.json()
          ),
        onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
          // Never retry on 404.
          if (error.status === 404) return;

          // Only retry up to 3 times.
          if (retryCount >= 3) return;

          // Retry after 5 seconds.
          setTimeout(() => revalidate({ retryCount }), 5000);
        },
      }}
    >
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </SWRConfig>
  );
}
export default dynamic(() => Promise.resolve(App), {
  ssr: false,
  // eslint-disable-next-line react/display-name
  loading: () => <LoadingComponent />,
});
