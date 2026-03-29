import { Center, Container, Image, Stack } from "@mantine/core";

export default function Realizacao() {
  return (
    <>
      <Stack gap={40} className="">
        <div className="">
          <h4 className="vc_title text-gray-500 ">Realização</h4>

          <Image src="/realizacao26.png" alt="Realização" w={100} />
        </div>
        <div className="">
          <h4 className="vc_title text-gray-500 ">Apoio</h4>

          <Image src="/apoio26.png" alt="Apoio" w={300} />
        </div>
        <div className="">
          <h4 className="vc_title text-gray-500 ">Parceiros</h4>

          <Image src="/parceiros26.png" alt="Parceiros" w={400} />
        </div>
      </Stack>
    </>
  );
}
