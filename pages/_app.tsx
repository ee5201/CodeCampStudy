// import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { globalStyles } from "../src/commons/styles/globalStyleds";
import ApolloSetting from "../src/components/commons/apollo";
import Layoutt from "../src/components/commons/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <div>
          <Global styles={globalStyles} />
          <Layoutt>
            <Component {...pageProps} />
          </Layoutt>
        </div>
      </ApolloSetting>
    </RecoilRoot>
  );
}
