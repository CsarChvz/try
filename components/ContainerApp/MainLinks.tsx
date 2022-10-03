/* eslint-disable linebreak-style */

import React from 'react';
import { IconMessages, IconDatabase, IconCalendarEvent, IconSmartHome } from '@tabler/icons';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import Link from 'next/link';
import { BoxMargin } from 'tabler-icons-react';
import styles from './MainLink.module.css'

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  route: string;
  //route: string;
}

// En cuanto se detecte el click seria necesario cerrar el menu de navegacion
function MainLink({ icon, color, label, route }: MainLinkProps) {
  return (
    <Link href={route} passHref>
      <UnstyledButton
      className={styles.link}
        sx={(theme) => ({
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          },
        })}
      >
        <Group
            sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          [`@media (max-width: 768px)`]: {
            flexDirection: 'row'
          },
        })}>
          <ThemeIcon color={color} variant="light" style={{width: "auto"}}>
            {icon}
          </ThemeIcon>

          <Text size="sm"
            sx={(theme) => ({
              [`@media (max-width: 768px)`]: {
                marginLeft: "5px",
                width: "10%"
              },
            })}>{label}</Text>
        </Group>
      </UnstyledButton>
    </Link>
  );
}

const data = [
  { icon: <IconSmartHome size={16} />, color: 'blue', label: 'Home', route: '/' },
  { icon: <IconCalendarEvent size={16} />, color: 'teal', label: 'Calendar', route: '/calendar' },
  { icon: <IconMessages size={16} />, color: 'violet', label: '[Discussions]', route: '/calendar' },
  { icon: <IconDatabase size={16} />, color: 'grape', label: '[Databases]', route: '/calendar' },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}
