import Onboarding from "../section/Onboarding";
import { Sertif } from "../section/Sertif";
import { Story } from "../section/Story";

export default function Home() {
  return (
    <section className="flex flex-col gap-24">
      <Onboarding />
      <Story />
      <Sertif />
    </section>
  );
}
