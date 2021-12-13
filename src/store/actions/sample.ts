import { AppDispatch } from "interface/root";
import axios from "axios";
import { SET_BODY, SET_EMAILS } from "store/actionsTypes";

export const getEmails = () => (dispatch: AppDispatch) => {
    axios.get('https://flipkart-email-mock.vercel.app/').then((res) => {
        dispatch({
            type: SET_EMAILS,
            payload: {
                emails: res.data.list,
                body: ''
            }
        })
    })
}

export const getEmailBody = (id: string) => (dispatch: AppDispatch) => {
    axios.get(`https://flipkart-email-mock.vercel.app/?id=${id}`).then((res) => {
        dispatch({
            type: SET_BODY,
            payload: {
                emails: [],
                body: res.data.body
            }
        })
    })
}