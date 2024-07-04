export interface FormValues {
    firstName: string;
    lastName: string;
    grade: number;
    kidsEmail: string;
    parentsPhone: string;
    parentFirstName: string;
    parentLastName: string;
    parentsEmail: string;
    heardFrom: string;
}

export interface NewsletterOptions {
    email: string
}

export interface ContactUsOptions {
    email: string,
    firstName: string,
    lastName: string,
    message: string,
}