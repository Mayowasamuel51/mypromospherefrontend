import copy from 'copy-to-clipboard';
import {CopyToClipboard} from 'react-copy-to-clipboard';
const Copy =()=>{

    // copy('Text');

    copy('Text', {
        debug: true,
        message: 'Press #{key} to copy',
      });
    return ( 
        <div>

        </div>
    )
}

export default Copy;