import Image from "next/image";
import { Carousel, Embla } from "@mantine/carousel";
import { Progress, Group, rem } from "@mantine/core";
import { useState, useCallback, useEffect } from "react";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

const images = new Array(26).fill(0).map((_, i) => {
  return {
    id: i + 1,
    src: `/verdecine-2022/verdecine-22-${i + 1}.jpg`,
  };
});
images.unshift({id: 0, src: ''});

export const Gallery = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [imgSrc, setImgSrc] = useState("");

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  const handleClick = (src: string) => {
    console.log(src);
    setImgSrc(src);
    open();
  };

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla, handleScroll]);

  return (
    <div>
      <Modal opened={opened} onClose={close} size={"xl"} >
        <Image src={imgSrc} width={600} height={600} style={{height: '100%', width:'100%', objectFit: 'contain'}} alt=""/>
      </Modal>

      <Carousel
        withIndicators
        getEmblaApi={setEmbla}
        slidesToScroll={3}
        // controlSize={80}
        nextControlIcon={
          <IconArrowRight
            className="bg-white p-2 w rounded-full"
            style={{ width: rem(40), height: rem(40) }}
          />
        }
        previousControlIcon={
          <IconArrowLeft
            className="bg-white p-2 w rounded-full"
            style={{ width: rem(40), height: rem(40) }}
          />
        }
        slideGap="md"
        align="start"
        mx="auto"
      >
        {images.map((image, i) => {
          if (i % 2) {
            return (
              <>
                <Carousel.Slide key={image.id}>
                  <div className="grid grid-cols-3 gap-3">
                    <Group className=" h-[200px] bg-[#E09845] ">
                      {images[i] && (
                        <Image
                          onClick={() => handleClick(images[i].src)}
                          src={images[i].src}
                          style={{
                            objectFit: "cover",
                            height: "100%",
                            width: "100%",
                          }}
                          width={400}
                          height={400}
                          alt="VERdeCINE 2022"
                        />
                      )}
                    </Group>
                    <Group className=" h-[200px] bg-[#E09845] ">
                      {images[i + 1] && (
                        <Image
                          onClick={() => handleClick(images[i + 1].src)}
                          src={images[i + 1].src}
                          style={{
                            objectFit: "cover",
                            height: "100%",
                            width: "100%",
                          }}
                          width={400}
                          height={400}
                          alt="VERdeCINE 2022"
                        />
                      )}
                    </Group>
                    <Group className=" h-[200px] bg-[#E09845] ">
                      {images[i + 2] && (
                        <Image
                          onClick={() => handleClick(images[i + 2].src)}
                          src={images[i + 2].src}
                          style={{
                            objectFit: "cover",
                            height: "100%",
                            width: "100%",
                          }}
                          width={400}
                          height={400}
                          alt="VERdeCINE 2022"
                        />
                      )}
                    </Group>
                    <Group className=" h-[200px] bg-[#E09845] ">
                      {images[i + 3] && (
                        <Image
                          onClick={() => handleClick(images[i + 3].src)}
                          src={images[i + 3].src}
                          style={{
                            objectFit: "cover",
                            height: "100%",
                            width: "100%",
                          }}
                          width={400}
                          height={400}
                          alt="VERdeCINE 2022"
                        />
                      )}
                    </Group>
                    <Group className=" h-[200px] bg-[#E09845] ">
                      {images[i + 4] && (
                        <Image
                          onClick={() => handleClick(images[i + 4].src)}
                          src={images[i + 4].src}
                          style={{
                            objectFit: "cover",
                            height: "100%",
                            width: "100%",
                          }}
                          width={400}
                          height={400}
                          alt="VERdeCINE 2022"
                        />
                      )}
                    </Group>
                    <Group className=" h-[200px] bg-[#E09845] ">
                      {images[i + 5] && (
                        <Image
                          onClick={() => handleClick(images[i + 5].src)}
                          src={images[i + 5].src}
                          style={{
                            objectFit: "cover",
                            height: "100%",
                            width: "100%",
                          }}
                          width={400}
                          height={400}
                          alt="VERdeCINE 2022"
                        />
                      )}
                    </Group>
                  </div>
                </Carousel.Slide>
              </>
            );
          }
        })}
      </Carousel>
      <Progress
        value={scrollProgress}
        maw={320}
        size="sm"
        mt="xl"
        mx="auto"
        color="#A26C2D"
      />
    </div>
  );
};
