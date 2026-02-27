import { Container } from "@mantine/core";
import {
  IconMailbox,
  IconBrandInstagram,
  IconBrandYoutube,
} from "@tabler/icons-react";

import Image from "next/image";


export const Footer = () => {
  return (
    <footer id="contato" className="bg-vc-light sm:px-16 px-8 py-10">
      <Container size={'xl'}>
        <div className="grid sm:grid-cols-12 grid-cols-1 gap-5">
          <div className="col-span-3">
            <h4 className="text-vc-orange font-bold mb-4">Entre em contato</h4>
            <ul>
              <li>
                {<IconMailbox className="inline mr-2" />}
                <a
                  className="underline text-[#A47743]"
                  href="mailto:producaoverdecine@gmail.com"
                >
                  producaoverdecine@gmail.com
                </a>
              </li>
              <li>
                {<IconBrandInstagram className="inline mr-2" />}
                <a
                  className="underline text-[#A47743]"
                  href="https://www.youtube.com/@verdecinefestival"
                >
                  @verdecine
                </a>
              </li>
              <li>
                {<IconBrandYoutube className="inline mr-2" />}
                <a
                  className="underline text-[#A47743]"
                  href="https://www.youtube.com/@verdecinefestival"
                >
                  @verdecine
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-9">
            {/* <h4 className="text-vc-orange font-bold mb-4">Realização</h4> */}
            <Image src="/apoios.png" width={600} height={500} alt="Apoio" />
          </div>
        </div>
      </Container>
    </footer>
  );
};
