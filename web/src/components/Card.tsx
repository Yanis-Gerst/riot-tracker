import React from "react";

interface Props {
  children: React.ReactNode;
  className: string;
}

const Card: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-sm border border-slate-200 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
