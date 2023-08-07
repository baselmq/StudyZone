import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const LoadingPage = ({ loading }) => {
  return (
    <div className="sweet-loading d-flex justify-content-center align-items-center">
      <ClipLoader
        color={"#49bbbd"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingPage;
