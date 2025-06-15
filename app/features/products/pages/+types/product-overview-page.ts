export namespace Route {
  export type LoaderArgs = {
    params: {
      productId: string;
    };
  };

  export type ActionArgs = {
    request: Request;
  };

  export type ComponentProps = {
    loaderData: {
      productId: string;
    };
    actionData?: unknown;
  };
}
