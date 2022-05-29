import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

export default function Loading({ loading }) {
  const style = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  return (
    <>
      {loading ? (
        <div
          style={{ background: "#34343433" }}
          className="w-screen h-screen absolute top-2/4 left-2/4 transform -translate-y-2/4 -translate-x-2/4"
        >
          <ClipLoader loading={loading} css={style} />
        </div>
      ) : (
        <> </>
      )}
    </>
  );
}
