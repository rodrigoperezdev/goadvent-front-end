import Image from "next/image";

export function NewsletterForm() {
  return (
    <form
      className="
        mt-10 flex max-w-full flex-nowrap justify-start gap-5
        shadow-[0px_32px_84px_0px_rgba(14,86,124,0.16)]
      "
    >
      <div className="relative flex gap-6 px-4 py-4 text-[18px] text-[#99a3ad] lg:px-8">
        <Image
          src="/images/icons/email.svg"
          alt=""
          aria-hidden="true"
          width={21}
          height={16}
          className="my-auto h-auto w-[21px] object-contain"
        />

        <label htmlFor="emailInput" className="sr-only">
          Enter your email
        </label>

        <input
          id="emailInput"
          type="email"
          placeholder="Enter your email"
          aria-label="Enter your email"
          className="
            border-none text-[#546179] outline-none
            placeholder:text-[#99a3ad]
          "
        />
      </div>

      <button
        type="submit"
        className="
          bg-[#28b0a6] px-2 py-2 text-center text-base font-normal
          tracking-[-0.38px] text-white
          lg:px-[1.3rem] lg:py-4
        "
      >
        Send Now!
      </button>
    </form>
  );
}
