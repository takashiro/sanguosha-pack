import EventDriver from './EventDriver';
import EventType from './EventType';

abstract class EventListener<ParamType> {
	readonly event: EventType;

	protected driver?: EventDriver;

	protected compulsory: boolean;

	constructor(event: EventType) {
		this.event = event;
		this.compulsory = false;
	}

	/**
	 * Bind the listener to a driver instance.
	 * @param driver
	 */
	setDriver(driver?: EventDriver): void {
		this.driver = driver;
	}

	/**
	 * @return event driver
	 */
	getDriver(): EventDriver | undefined {
		return this.driver;
	}

	isCompulsory(): boolean {
		return this.compulsory;
	}

	/**
	 * Check if the listener can be triggered.
	 * @param target
	 * @param data
	 */
	isTriggerable(data: ParamType): boolean {
		return Boolean(this.driver && data);
	}

	/**
	 * Calculate the priority of the event listener.
	 */
	// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
	weigh(data: ParamType): number {
		return 0;
	}

	/**
	 * Select a listener when multiple listeners are of the same priority.
	 * @param listeners
	 * @return Index of the selected listener
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async select(listeners: EventListener<ParamType>[], data: ParamType): Promise<number> {
		return 0;
	}

	/**
	 * Process the event.
	 * @param target
	 * @param data
	 * @return Whether to break following event listeners in the same chain.
	 */
	// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
	async process(data: ParamType): Promise<boolean> {
		return false;
	}
}

export default EventListener;
