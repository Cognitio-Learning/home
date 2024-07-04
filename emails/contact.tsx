import { ContactUsOptions, NewsletterOptions } from "@/types/types";
import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
    Tailwind,
} from "@react-email/components";
import * as React from "react";

export const ContactUsEmail = ({ firstName, lastName, email, message }: ContactUsOptions) => {
    const previewText = `You have a message from ${firstName}!`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-white font-sans px-2">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                        <Heading className="text-black text-[24px] font-normal p-0 my-[30px] mx-0">
                            Message from: <strong>{`${firstName} ${lastName}`}</strong>
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px]">
                            {message}
                        </Text>

                        <Text className="text-black text-[14px] leading-[24px]">
                            Email: <strong>{email}</strong>
                        </Text>
                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                        <Text>
                            - Cognitio Contact Form
                        </Text>
                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

ContactUsEmail.PreviewProps = {
    firstName: "john",
    lastName: "doe",
    email: "johndoe@gmail.com",
    message: "Hello, I have a question about the course. how does this work? how long will it be per week? blah blah blah"
} as ContactUsOptions

export default ContactUsEmail;
