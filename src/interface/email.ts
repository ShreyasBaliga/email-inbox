export type EmailState = {
    emails: Array<string>;
    body: string;
}

export type Email = {
    id: string;
    from: {
        email: string;
        name: string;
    };
    subject: string;
    short_description: string;
    date: Date;
}

export type EmailBody = {
    id: string;
    date: Date;
    body: string;
    subject: string;
}

export type EmailAction = {
    type: string;
    payload: EmailState;
}