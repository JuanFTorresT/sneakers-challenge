import Menu from './Menu';
import ProductImages from './ProductImages';
import ProductDescription from './ProductDescription';
import QuantitySelector from './QuantitySelector';
import BuyButton from './BuyButton';
import MenuModal from './MenuModal';

export default function Home() {
  return(
    <>
      <Menu/>
      <hr />
      <ProductImages/>
      <ProductDescription/>
      <div className="buy-menu gap-4 flex flex-col p-4">
        <QuantitySelector/>
        <BuyButton/>
        
        
      </div>
      


    </>
  )
}