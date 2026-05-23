import { Center, Container, Image, Stack } from "@mantine/core";

export default function Realizacao() {
  return (
    <>
      <Stack gap={40} className="">
        <div className="">
          <h5 className="vc_title text-gray-500 ">Realização</h5>

          <Image src="/realização2026.png" alt="Realização" w={250} />
        </div>
        <div className="">
          <h5 className="vc_title text-gray-500 ">Apoio</h5>

          <Image src="/Apoio2026.png" alt="Apoio" w={300} />
        </div>
        <div className="">
          <h5 className="vc_title text-gray-500 ">Parceiros</h5>

          <Image src="/parceiros2026.png" alt="Parceiros" w={300} />
        </div>
      </Stack>
    </>
  );
}
