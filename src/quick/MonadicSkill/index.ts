import {
	SkillOwner,
	SkillTag as Tag,
} from '@karuta/sanguosha-core';

import GameDriver from '../../driver/GameDriver';
import EventType from '../../driver/EventType';

import Skill from '../Skill';
import Effect from './Effect';

export default abstract class MonadicSkill<ParamType> extends Skill {
	protected readonly event: EventType;

	protected effect: Effect<ParamType>;

	constructor(owner: SkillOwner, name: string, event: EventType, tags?: Tag[]) {
		super(owner, name, tags);
		this.event = event;
		this.effect = new Effect<ParamType>(this, this.event, this.hasTag(Tag.Compulsory));
	}

	getDriver(): GameDriver | undefined {
		return this.effect.getDriver();
	}

	getEffects(): Effect<ParamType>[] {
		return [
			new Effect<ParamType>(this, this.event, this.hasTag(Tag.Compulsory)),
		];
	}

	abstract isTriggerable(param: ParamType): boolean;

	abstract process(param: ParamType): Promise<boolean>;
}
