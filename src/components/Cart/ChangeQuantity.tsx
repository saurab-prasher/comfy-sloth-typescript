import {
  IncreaseItem,
  DecreaseItem,
  Amount,
  ChangeQuantity,
} from './CartElements';

interface ChangeItemAmountProps {
  amount: number;
  increase: (id: any, value: any) => void;
  decrease: (id: any, value: any) => void;
  id: string;
  singleProduct: any;
}

const ChangeItemAmount: React.FC<ChangeItemAmountProps> = ({
  amount,
  increase,
  decrease,
  id,
  singleProduct,
}) => {
  return (
    <ChangeQuantity singleProduct={singleProduct}>
      <DecreaseItem onClick={() => decrease(id, 'decrease')}>-</DecreaseItem>
      <Amount>{amount} </Amount>

      <IncreaseItem onClick={() => increase(id, 'increase')}>+</IncreaseItem>
    </ChangeQuantity>
  );
};

export default ChangeItemAmount;
