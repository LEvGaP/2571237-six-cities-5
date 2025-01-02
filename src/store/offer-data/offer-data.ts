import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../constants/request-status';
import { Namespace } from '../../constants/store-namespace';
import {
  fetchOfferAction,
} from '../api-actions';
import { OfferData } from '../../types/app-state';

const initialState: OfferData = {
  offer: null,
  offerFetchingStatus: RequestStatus.Idle,
};

export const offerData = createSlice({
  name: Namespace.Offer,
  initialState,
  reducers: {
    dropOffer: (state) => {
      state.offer = null;
      state.offerFetchingStatus = RequestStatus.Idle;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.offerFetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.offerFetchingStatus = RequestStatus.Successful;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.offerFetchingStatus = RequestStatus.Error;
      });
  },
});

export const { dropOffer } = offerData.actions;
