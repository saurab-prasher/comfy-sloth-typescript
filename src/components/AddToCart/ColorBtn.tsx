import { ColorsBtn } from './AddToCartElements';
import { FaCheck } from 'react-icons/fa';

interface ColorsBtnProps {
  handleMainColor: (handleMainColor: string) => void;
  color: string;
  mainColor: string;
}

const ColorBtn: React.FC<ColorsBtnProps> = ({
  handleMainColor,
  mainColor,
  color,
}) => {
  return (
    <ColorsBtn
      onClick={() => handleMainColor(color)}
      background={color}
      className={mainColor === color ? 'active-btn' : ''}
    >
      {mainColor === color && <FaCheck />}
    </ColorsBtn>
  );
};

export default ColorBtn;
