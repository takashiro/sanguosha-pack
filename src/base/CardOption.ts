import CardAction from './CardAction';
import CardPattern from './CardPattern';

interface CardOption {
	action: CardAction;
	minNum: number;
	maxNum: number;
	autoSkip?: boolean;
	pattern?: CardPattern;
}

export default CardOption;
