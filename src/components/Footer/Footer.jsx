import { useTranslation } from "react-i18next";
import { Contacts } from "../Contacts/Contacts";
import { Link } from "../Link/Link";
import { Section } from "../Section/Section";
import { Text } from "../Text/Text";
import styles from "./Footer.module.css";
const socialLinks = [
    {
        label: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61558139986512",
        icon: "/fb1.svg",
    },
    {
        label: "Whatsapp",
        href: "https://wa.me/77089383180",
        icon: "/wp1.svg",
    },
    {
        label: "TikTok",
        href: "https://www.tiktok.com/@abaiitschool?_t=8lnHN0WRGtB&_r=1",
        icon: "/tt.svg",
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/abai_it_school/",
        icon: "/inst.svg",
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/@abaiit-valley2557",
        icon: "/yt.svg",
    },
    {
        label: "Telegram",
        href: "https://t.me/abaiitschool",
        icon: "/telegram.svg",
    },
];
export const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className={styles.footer}>
            <Section fullHeight className={styles.wrapper}>
                <LeftFooter t={t} />
                <RightFooter t={t} />
            </Section>
        </footer>
    );
};

const LeftFooter = ({ t }) => {
    return (
        <section className={styles.left}>
            <Text tag="h4" variant={"subtitle"} color="base">
                {t("footer.leftTitle")}
            </Text>
            <section className={styles.mapContainer}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.805704908305!2d80.2391162768642!3d50.407458490457934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42f2650035f62565%3A0xb248ffecb02fca17!2sAbai%20IT%20School!5e0!3m2!1sru!2skz!4v1715060522580!5m2!1sru!2skz"
                    allowFullScreen=""
                    loading="lazy"
                    title="Технологический кластер «Abai IT-Valley” - как добраться"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </section>
    );
};
const MiddleFooter = ({ t }) => {
    return (
        <section className={styles.middle}>
            <Text tag="h4" variant={"subtitle"} color="base">
                {t("footer.social")}
            </Text>

            <section className={styles.linksWrapper}>
                {socialLinks.map((link, idx) => (
                    <Link key={idx} target="_blank" href={link.href} icon={link.icon}>
                        {link.label}
                    </Link>
                ))}
            </section>
        </section>
    );
};
const RightFooter = ({ t }) => {
    return (
        <section className={styles.right}>
            <MiddleFooter t={t} />
            <Contacts />
        </section>
    );
};
