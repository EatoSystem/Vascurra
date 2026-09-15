import { permanentRedirect } from "next/navigation";

export default function LegacyPeopleRoute() {
  permanentRedirect("/personal");
}
