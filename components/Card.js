/* eslint-disable @next/next/no-img-element */
import React from "react";

function Card() {
  return (
    <div>
      <div className=" p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50 mx-2 mb-3">
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
            Quisque
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            Nam maximus purus
          </h2>
        </div>
        <p className="dark:text-gray-100">
          Mauris et lorem at elit tristique dignissim et ullamcorper elit. In
          sed feugiat mi. Etiam ut lacinia dui.
        </p>
      </div>
    </div>
  );
}

export default Card;
