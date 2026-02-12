import { Center, Container, Image, Stack } from "@mantine/core";

export default function Realizacao() {
  return (
    <>
      <Stack gap={40} className="">
        <div className="">
          <h4 className="vc_title text-gray-500 ">Realização</h4>

          <Image src="/realizacao.png" alt="Realização" w={400} />
        </div>
        <div className="">
          <h4 className="vc_title text-gray-500 ">Apoio</h4>

          <Image src="/apoio.png" alt="Realização" w={400} />
        </div>
        <div className="">
          <h4 className="vc_title text-gray-500 ">Parceiros</h4>

          <Image src="/parceiros.png" alt="Realização" w={400} />
        </div>
      </Stack>
    </>
  );
}
