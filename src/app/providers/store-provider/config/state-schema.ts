import {AuthSchema} from '../slices/auth/types/auth-schema';
import {QuestsSchema} from '../slices/quests/types/quests-schema';
import {BookingSchema} from '../slices/booking/types/booking-schema';

export interface StateSchema {
    auth: AuthSchema;
    quests: QuestsSchema;
    booking: BookingSchema;
}
