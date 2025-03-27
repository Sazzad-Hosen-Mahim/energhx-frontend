import { ReactNode } from "react";

interface DashBoardHeader {
  children: ReactNode;
  className?: string;
}

const DashBoardHeader: React.FC<DashBoardHeader> = ({
  children,
  className,
}) => {
  return (
    <h2
      className={`font-extrabold font-secondary text-primary text-[16px] ${className}`}
    >
      {children}
    </h2>
  );
};

export default DashBoardHeader;
