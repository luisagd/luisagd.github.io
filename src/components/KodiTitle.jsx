import React from "react";
import { Link } from "gatsby";

const KodiTitle = () => {
  return (
    <div className="mt-5">
      <Link to="/kodi" className="h-10 text-2xl md:text-3xl lg:text-4xl">
        Kódi
      </Link>
    </div>
  );
};

export default KodiTitle;
