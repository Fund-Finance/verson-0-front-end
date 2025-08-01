"use client";

interface UserButtonProps {
  children: string;
  onClick?: () => void;
  width?: string;
}

const UserButton = ({ children, width = "", onClick }: UserButtonProps) => {
  return (
    <button
    onClick={onClick}
      className={
        "bg-blue-500 text-white " +
        width +
        " px-4 py-2 rounded hover:bg-blue-600"
      }
    >
      {children}
    </button>
  );
};

export default UserButton;
