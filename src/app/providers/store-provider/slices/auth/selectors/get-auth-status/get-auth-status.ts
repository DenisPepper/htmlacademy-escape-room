import { createSelector } from '@reduxjs/toolkit';
import {getAuth} from '../get-auth/get-auth';
import {AuthSchema} from '../../types/auth-schema';

export const getAuthStatus = createSelector(getAuth,
  (auth: AuthSchema) => auth.authorizationStatus
);
