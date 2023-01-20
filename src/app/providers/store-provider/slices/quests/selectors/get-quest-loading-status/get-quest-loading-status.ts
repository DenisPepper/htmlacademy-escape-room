import { createSelector } from '@reduxjs/toolkit';
import {getQuests} from '../get-quests/get-quests';
import {QuestsSchema} from '../../types/quests-schema';

export const GetQuestLoadingStatus = createSelector(getQuests, (quests: QuestsSchema) => quests.loading);
