import CardAction from './CardAction';
import CardPattern from './CardPattern';

interface ChooseCardOptions {
	action: CardAction;
	minNum: number;
	maxNum: number;
	autoSkip?: boolean;
	pattern?: CardPattern;
}

export default ChooseCardOptions;
