import { Skill as MetaSkill } from '@karuta/sanguosha-core';

import SkillEffect from './SkillEffect';

export default abstract class Skill extends MetaSkill {
	/**
	 * @return Skill effects
	 */
	abstract getEffects(): SkillEffect<unknown>[];
}
