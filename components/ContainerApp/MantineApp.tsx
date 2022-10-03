/* eslint-disable linebreak-style */
import { useState } from 'react';
import { AppShell, Navbar, Header, Text, MediaQuery, Burger, useMantineTheme } from '@mantine/core';
import { MainLinks } from './MainLinks';

export interface LayoutProps {
  children: React.ReactNode;
}

export function AppShellDemo(props: LayoutProps) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="xl"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 150, lg: 150 }}
          height="100%"
        >
          <MainLinks />
        </Navbar>
      }
      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Text>Application</Text>
          </div>
        </Header>
      }
    >
      {props.children}
    </AppShell>
  );
}
