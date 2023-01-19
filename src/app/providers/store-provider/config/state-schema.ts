import {AuthSchema} from '../slices/auth/types/auth-schema';
import {QuestsSchema} from '../slices/quests/types/quests-schema';

export interface StateSchema {
    auth: AuthSchema;
    quests: QuestsSchema;
}
