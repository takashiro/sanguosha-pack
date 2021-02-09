import {
	Skill,
	SkillOwner,
} from '@karuta/sanguosha-core';

import EventType from '../driver/EventType';
import EventListener from '../driver/EventListener';
import GameDriver from '../driver/GameDriver';
import Player from '../driver/Player';

export default abstract class SkillEffect<ParamType> extends EventListener<ParamType> {
	protected readonly skill: Skill;

	constructor(skill: Skill, event: EventType) {
		super(event);
		this.skill = skill;
	}

	getDriver(): GameDriver | undefined {
		return super.getDriver() as GameDriver;
	}

	getSkill(): Skill {
		return this.skill;
	}

	getOwner(): SkillOwner {
		return this.skill.getOwner();
	}

	getName(): string {
		return this.skill.getName();
	}

	abstract getInvoker(data: ParamType): Player;

	weigh(data: ParamType): number {
		const driver = this.getDriver();
		if (!driver) {
			return 0;
		}

		const invoker = this.getInvoker(data);
		return driver.getRelativeSeat(invoker);
	}

	async select(effects: SkillEffect<ParamType>[], data: ParamType): Promise<number> {
		const player = this.getInvoker(data);
		const options = effects.map((effect) => effect.getName());
		const index = await player.invokeSkill(options);
		return index;
	}
}
