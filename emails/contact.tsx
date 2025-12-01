import { ContactUsOptions, NewsletterOptions } from "@/types/types";
import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
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
                    <Container className="border-2 border-solid border-black my-[40px] mx-auto p-0 max-w-[600px]">
                        {/* Header */}
                        <Section className="bg-black p-8 border-b-2 border-black">
                            <Heading className="text-white text-[28px] font-bold p-0 m-0 uppercase tracking-tight">
                                New Contact Message
                            </Heading>
                        </Section>
                        
                        <Section className="p-8">
                            <div className="inline-block px-3 py-1 border-2 border-black text-[10px] font-bold uppercase tracking-widest mb-6 bg-purple-600 text-white">
                                Contact Form Submission
                            </div>
                            
                            <Text className="text-black text-[16px] leading-[26px] font-bold uppercase tracking-widest mb-2">
                                From:
                            </Text>
                            <Text className="text-gray-700 text-[18px] leading-[28px] font-medium mb-6">
                                {`${firstName} ${lastName}`}
                            </Text>

                            <Text className="text-black text-[16px] leading-[26px] font-bold uppercase tracking-widest mb-2">
                                Email:
                            </Text>
                            <Text className="text-purple-600 text-[16px] leading-[26px] font-bold mb-6">
                                {email}
                            </Text>

                            <Text className="text-black text-[16px] leading-[26px] font-bold uppercase tracking-widest mb-2">
                                Message:
                            </Text>
                            <div className="border-l-4 border-purple-600 pl-4 py-2 bg-gray-50">
                                <Text className="text-gray-700 text-[16px] leading-[26px] m-0">
                                    {message}
                                </Text>
                            </div>
                        </Section>

                        <Hr className="border border-solid border-black my-0 mx-0 w-full" />
                        
                        <Section className="p-8 bg-gray-50">
                            <Text className="text-gray-600 text-[12px] uppercase tracking-widest">
                                Cognitio Learning Contact Form
                            </Text>
                        </Section>
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
