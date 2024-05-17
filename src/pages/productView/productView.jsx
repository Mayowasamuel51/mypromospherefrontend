import Navbar from "../../components/Navbar";
import productView from "../../assests/images/product-view.svg";
import frame from "../../assests/images/feed4.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProductView = () => {
  return (
    <div>
        {/* <NavBar /> */}
        <div>
            <div className="flex items-center gap-2">
                <LazyLoadImage effect="blur" src={productView} alt="" style={{ width: "auto", objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
                <LazyLoadImage effect="blur" src={frame} alt="" style={{ width: "auto", objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
            </div>
            <div>
                <div className="flex items-center gap-2">
                    <img src={productView} alt="" className="w-10 aspect-square rounded-full"/>
                    <p>TIMILEHIN BABADE</p>
                </div>
                <h2>Curly human hair wig *13x4 fronta</h2>
            </div>
        </div>
    </div>
  )
}

export default ProductView;