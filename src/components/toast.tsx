import { h } from "preact";
import { useEffect } from "preact/hooks";
import toast, { Toaster } from "react-hot-toast";

const Toastss = () => {
  const notify = () => toast("Here is your toast.");
  return (
    <div>
      <Toaster />
    </div>
  );
};

export default Toastss;
