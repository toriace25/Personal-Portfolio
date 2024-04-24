import ContactForm from "@/app/ui/(overview)/contact/contact-form";
import ContactLink from "@/app/ui/(overview)/contact/contact-link";
import Section from "@/app/ui/(overview)/section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
};

const ContactPage = () => {
  return (
    <Section sectionTitle="Contact Me">
      <ContactForm />
      <div className="flex flex-col flex-wrap gap-4 lg:flex-row lg:gap-12">
        <ContactLink
          platform="GitHub"
          link="github.com/toriace25"
          imageSize={65}
        />
        <ContactLink
          platform="LinkedIn"
          link="linkedin.com/in/victoria-scavetta"
          imageSize={60}
        />
      </div>
    </Section>
  );
};

export default ContactPage;
