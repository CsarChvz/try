import React, { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Group,
} from '@mantine/core';
export interface LayoutProps {
  children: React.ReactNode;
}

export const ApplicactionContainer = (props: LayoutProps) => (
  <AppShell
    styles={{
      main: {
        background: '#FFFFF',
        width: '200vw',
        height: '100vh',
        paddingLeft: '0px',
      },
    }}
    fixed
    footer={
      <Footer height={60} p="md">
        <Group position="apart" spacing="xl">
          <Text size="sm">
            <span style={{ fontWeight: 'bolder' }}>ListItem</span>
          </Text>
        </Group>
      </Footer>
    }
    header={
      <Header height={70} p="md">
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <Text size="xl" weight="bolder">
            Chingaderas
          </Text>
        </div>
      </Header>
    }
  >
    {props.children}
  </AppShell>
);
