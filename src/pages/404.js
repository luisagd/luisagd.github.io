import * as React from "react";
import { Helmet } from "react-helmet-async";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>No encontrado</title>
      </Helmet>
      <main className="px-24 text-cyan-950">
        <p className="mb-12">
          Esta página no se encuentra disponible.
          <br />
          {import.meta.env.DEV ? (
            <>
              <br />
              Try creating a page in{" "}
              <code className="p-1 text-amber-700 text-xl rounded bg-orange-200">
                src/pages/
              </code>
              .
              <br />
            </>
          ) : null}
          <br />
          <a href="/">Volver a inicio</a>.
        </p>
      </main>
    </>
  );
};

export default NotFoundPage;
