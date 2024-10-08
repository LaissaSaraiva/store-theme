/* eslint-disable @typescript-eslint/ban-types */
// eslint-disable-next-line no-unused-vars
import type { FunctionComponent } from "react";

declare global {
  interface StorefrontFunctionComponent<P = {}> extends FunctionComponent<P> {
    getSchema?(props: P): object;
    schema?: object;
  }

  interface StorefrontComponent<P = {}, S = {}> extends Component<P, S> {
    getSchema?(props: P): object;
    schema: object;
  }
}
