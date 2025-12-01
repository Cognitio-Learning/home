import { NewsletterOptions } from "@/types/types";
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

export const WelcomeEmail = ({
}: NewsletterOptions) => {
    const previewText = `Welcome to Cognitio newsletter!`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans px-2">
                    <Container className="border-2 border-solid border-black my-[40px] mx-auto p-0 max-w-[600px]">
                        {/* Header with purple accent */}
                        <Section className="bg-purple-600 p-8 border-b-2 border-black">
                            <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                                <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                            </div>
                            <Heading className="text-white text-[32px] font-bold text-center p-0 m-0 uppercase tracking-tight">
                                Welcome!
                            </Heading>
                        </Section>
                        
                        <Section className="p-8">
                            <Text className="text-black text-[18px] leading-[28px] font-medium uppercase tracking-widest mb-4">
                                Hello,
                            </Text>
                            <Text className="text-gray-700 text-[16px] leading-[26px] mb-4">
                                Welcome to <strong className="text-black">Cognitio Learning</strong>&apos;s newsletter! We are excited to have you on board. We&apos;ll be sending you updates on our latest courses, events, and more.
                            </Text>
                            <Text className="text-gray-700 text-[16px] leading-[26px] mb-4">
                                Our mission is to provide <strong className="text-purple-600">100% FREE</strong> summer cohorts for middle schoolers, teaching them computer science and AI-focused problem solving.
                            </Text>
                            <Text className="text-gray-700 text-[16px] leading-[26px]">
                                If you have any questions or need help, feel free to reach out to us at <span className="text-purple-600 font-bold">contact.cognitiolearning@gmail.com</span>
                            </Text>
                        </Section>

                        <Hr className="border border-solid border-black my-0 mx-0 w-full" />
                        
                        <Section className="p-8 bg-gray-50">
                            <Text className="text-black text-[14px] font-bold uppercase tracking-widest">
                                Happy coding!
                            </Text>
                            <Text className="text-gray-600 text-[14px] mt-2">
                                — The Cognitio Team
                            </Text>

                            <Text className="text-gray-600 text-[14px] mt-2">
                                This email was sent to you by Cognitio Learning. If you did not sign up for this newsletter, please ignore this email. Please do not reply to this email. We will not be able to see it.
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default WelcomeEmail;
