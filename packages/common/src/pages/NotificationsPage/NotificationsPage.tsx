import React from 'react';
import { Text } from 'react-native';

import { Page } from '../Page';

// import { NotificationsPageStyleSheet as styles } from './NotificationsPage.styles';

export interface NotificationsPageProps {
  route?:
    | { name: string; key: string; params: { sessionId: string } }
    | undefined;
  navigation?: any;
}

export const NotificationsPage: React.FC<NotificationsPageProps> = ({
  ...props
}) => {
  return (
    <Page {...props}>
      <>
        <Text>Notifications</Text>
      </>
    </Page>
  );
};
