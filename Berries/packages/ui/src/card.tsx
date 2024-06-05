import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div
      className="border p-6 bg-white rounded-xl shadow-xl">
      <h1 className="text-xl text-bold text-indigo-900 border-b pb-2">
        {title}
      </h1>
      <p>{children}</p>
    </div>
  );
}
