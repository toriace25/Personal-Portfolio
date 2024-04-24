import ContactForm from "@/app/ui/(overview)/contact/contact-form";
import Section from "@/app/ui/(overview)/section";
import SectionHeader from "@/app/ui/(overview)/section-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
};

const ContactPage = () => {
  return (
    <Section sectionTitle="Contact Me">
      <ContactForm />
    </Section>
  );
};

export default ContactPage;
