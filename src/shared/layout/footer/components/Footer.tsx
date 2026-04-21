import Image from "next/image";

import { LinkList } from "./LinkList";
import { NewsletterForm } from "@/shared/components/NewsLetterForm";

export function Footer() {
  const services: string[] = [
    "Budget Tours",
    "Expert Insight",
    "Independent",
    "Luxury Tours",
    "Safety Tips",
    "Tips n Tricks",
  ];

  const adventures: string[] = [
    "Beach Activity",
    "Bungee Jump",
    "City Tour",
    "Hiking Trips",
    "Jungle Safari",
    "Night City Walk",
  ];

  const countries: string[] = [
    "USA",
    "Australia",
    "South Africa",
    "West Indies",
    "New Zealand",
    "México",
  ];

  return (
    <footer className="mt-[8.5rem]">
      <div className="mb-[2.44rem] flex flex-wrap justify-between gap-4">
        <div className="flex flex-col sm:flex-row">
          <h5 className="text-[1.2rem] font-medium text-[#1d293f]">
            QUICK LINKS
          </h5>

          <h5 className="mb-8 ml-0 text-[1.2rem] font-normal text-[#546179] sm:mb-0 sm:ml-[1.31rem]">
            Explore more categories
          </h5>
        </div>

        <div>
          <h5 className="text-[1.2rem] font-normal text-[#1d293f]">
            0123-456-324-54 | hello@entrada.com
          </h5>
        </div>
      </div>

      <div className="h-px bg-[#e9ecef]" />

      <div className="flex flex-wrap justify-between py-6">
        <div className="mb-8 sm:mb-0">
          <h4 className="text-[1.5rem] font-normal text-[#28b0a6]">
            Get in touch
          </h4>

          <h2 className="text-[2.5rem] font-medium text-[#1d293f]">
            Adventures Calling <br /> You Guys!
          </h2>
        </div>

        <div className="flex items-center">
          <Image
            src="/images/icons/globe.svg"
            alt="Globe icon"
            width={64}
            height={64}
            className="mr-6 w-16 h-auto"
          />

          <div>
            <h5 className="text-[1.2rem] font-medium text-[#1d293f]">
              Our Offices
            </h5>
            <h5 className="text-[1.2rem] font-medium text-[#1d293f]">
              Zapopan, México.
            </h5>
          </div>
        </div>
      </div>

      <div className="h-px bg-[#e9ecef]" />

      <div className="flex flex-wrap justify-between pt-8">
        <div className="mr-8 flex w-full flex-wrap justify-between gap-4 min-[1270px]:w-auto min-[1270px]:flex-nowrap min-[1270px]:gap-40">
          <LinkList title="Services" items={services} />
          <LinkList title="Adventures" items={adventures} />
          <LinkList title="Country" items={countries} />
        </div>

        <div className="mt-8 min-[1270px]:mt-0">
          <h4 className="text-[1.5rem] font-medium text-[#1d293f]">
            Get In Touch
          </h4>
          <h2 className="text-[2.5rem] font-medium text-[#1d293f]">
            Let&apos;s Talk
          </h2>

          <div>
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="mb-6 mt-[5rem] flex flex-wrap justify-between gap-4 sm:mt-[7.5rem]">
        <h5 className="text-[1.2rem] font-medium text-[#1d293f]">
          Privacy Policy
        </h5>
        <h5 className="text-[1.2rem] font-medium text-[#1d293f]">
          Linkedin / Facebook / Instagram
        </h5>
      </div>

      <div className="h-px bg-[#e9ecef]" />

      <div className="my-6 flex flex-wrap justify-between gap-4">
        <p className="mb-4 text-base font-normal text-[#546179] sm:mb-0">
          2016-2024 © Emprise
        </p>

        <Image
          src="/images/icons/payment-logos.png"
          alt="Payment logos: Visa, Mastercard, Paypal, Maestro, Bank Transfer"
          width={220}
          height={32}
          className="h-auto w-auto max-w-full"
        />
      </div>
    </footer>
  );
}
