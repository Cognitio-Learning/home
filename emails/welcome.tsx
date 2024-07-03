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
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                        <Section className="mt-[32px]">
                            <Img
                                src={`https://i.ibb.co/Tt7sqr5/cognitio-icon.png`}
                                width="60"
                                height="60"
                                alt="cognitio"
                                className="my-0 mx-auto"
                            />
                        </Section>
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            <strong>Thank you for signing up!</strong>
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Hello,
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Welcome to <strong>Cognitio Learning</strong>'s newsletter! We are excited to have you on board. We'll be sending you updates on our latest courses, events, and more.
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            If you have any questions or need help, feel free to reach out to us at <span className=" text-blue-500">contact.cognitiolearning@gmail.com</span>
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            <strong>Happy coding!</strong>
                            </Text>
                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                        <Text>
                                - Cognitio Team
                        </Text>
                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default WelcomeEmail;
