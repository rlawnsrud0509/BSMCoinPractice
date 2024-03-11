import { ImageRendererProtypes } from "@/types/ui/ImageRendererProptypes";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const ImageRenderer = ({ width, height, src, alt }: ImageRendererProtypes) => {
  return (
    <Container style={{ width, height }}>
      <Image fill src={src} alt={alt || ""} />
    </Container>
  );
};

export default ImageRenderer;

const Container = styled.div`
  position: relative;
  z-index: 2;
`;
