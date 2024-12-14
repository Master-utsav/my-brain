
import { Link } from "react-router-dom";
import PersonalLinksNavitems from "@/components/PersonalLinksNavitems";

const FooterSection = () => {

  return (
    <section
      id="footer"
      className="max-w-md border-t-[1px] border-t-[#2a7ea9] py-2 flex flex-col justify-center items-center"
    >
      <div className="sm:hidden flex justify-center items-center py-1 w-full">
        <PersonalLinksNavitems />
      </div>
      <p
        className="font-[family-name:var(--font-assistant) dark:text-white-700 text-black-600 text-sm text-center"
      >
        © 2024 My Brain | All Rights Reserved
      </p>
      <span
        className="font-[family-name:var(--font-assistant) dark:text-white-700 text-black-600 text-sm text-center"
      >
        UI/UX Designer :{" "}
        <Link
          to={"https://materutsav.in"}
          target="_blank"
          className="underline decoration-[#2a7ea9] dark:decoration-[#2a7ea9] font-semibold"
        >
          master utsav
        </Link>
      </span>
      <span
        className="font-[family-name:var(--font-assistant) dark:text-white-700 text-black-600 text-sm text-center"
      >
        Developer :{" "}
        <Link
          to={"https://materutsav.in"}
          target="_blank"
          className="underline decoration-[#2a7ea9] dark:decoration-[#2a7ea9] font-semibold"
        >
          master utsav
        </Link>
      </span>
    </section>
  );
};

export default FooterSection;
