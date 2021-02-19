import React from 'react';
import { Text } from 'react-native';

import { useGetCurrentProfileQuery } from '../../resolvers';
import { Page } from '../Page';

// import { ProfilePageStyleSheet as styles } from './ProfilePage.styles';

export interface ProfilePageProps {
  route?:
    | { name: string; key: string; params: { sessionId: string } }
    | undefined;
  navigation?: any;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ ...props }) => {
  const { data: user, isLoading } = useGetCurrentProfileQuery();
  return (
    <Page {...props} loading={isLoading}>
      <>
        <Text>{user?.name}</Text>
      </>
    </Page>
  );
};
