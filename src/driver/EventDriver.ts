import EventListener from './EventListener';

interface EventDriver {
	/**
	 * @return Whether the driver is running.
	 */
	isRunning(): boolean;

	/**
	 * @return Whether the driver is stopped.
	 */
	isStopped(): boolean;

	/**
	 * Start the driver to proceed pending events.
	 */
	start(): void;

	/**
	 * Stop the driver and do not proceed any pending events.
	 */
	stop(): void;

	/**
	 * Register a listener.
	 * @param listener
	 */
	register(listener: EventListener<unknown>): void;

	/**
	 * Unregister a listener.
	 * @param listener
	 */
	unregister(listener: EventListener<unknown>): void;
}

export default EventDriver;
