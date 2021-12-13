import { EmailAction, EmailState } from 'interface/email';
import { SET_BODY, SET_EMAILS } from 'store/actionsTypes';

const initialState: EmailState = {
    emails: [],
    body: ''
}

const sample = (state = initialState, action: EmailAction ) => {
    switch (action.type) {
      case SET_EMAILS:
        return {
            ...state,
            emails: action.payload.emails
        }
        case SET_BODY:
          return {
              ...state,
              body: action.payload.body
          }
      default:
        return state
    }
}

export default sample;