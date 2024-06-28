import copy from "copy-to-clipboard";
import Clipboard from "react-clipboard.js";
import { toast } from 'sonner';
import { CopyToClipboard } from "react-copy-to-clipboard";
const Copy = () => {
  // copy('Text');


  function show(){
    toast.error("takeen", {
        duration: 3000
      })
      
  }
  return (
    <div>
      {/* <button>share my Link </button>
      <p>Sharing of link will help reach more customers</p> */}
      <Clipboard data-clipboard-text="you are my promote link "  button-title="I'm a tooltip" onSuccess={show}>
        Share your promote Link
      </Clipboard>
    </div>
  );
};

export default Copy;
