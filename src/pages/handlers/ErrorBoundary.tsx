import type { FC } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorBoundary: FC = () => {
  const error = useRouteError();

  return isRouteErrorResponse(error) && (
    <h1>
      {error.status} {error.statusText}
    </h1>
  );
};

export default ErrorBoundary;
