"use client";

import { Flex, Heading } from '@radix-ui/themes';

export const Header = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <header>
      <Flex justify={"between"}>
      <Heading>Snow Step</Heading>
      {children}
      </Flex>
    </header>
  )
}