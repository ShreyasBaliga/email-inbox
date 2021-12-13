import { ThunkDispatch } from "redux-thunk";
import { EmailState, EmailAction } from "./email";

export type RootState = {
    sample: EmailState;
};

export type RootAction = EmailAction;

export type AppDispatch = ThunkDispatch<RootState, void, RootAction>;