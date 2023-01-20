import { QuestReducedInfo, QuestInfo } from '../../../../../../shared/types/quest-types';

export interface QuestsSchema {
  list: QuestReducedInfo[];
  lastLoaded: QuestInfo | null;
  loading: boolean;
}
