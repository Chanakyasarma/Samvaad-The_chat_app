import { Skeleton } from "@mui/material";
import { DEFAULT_AVATAR, IMAGE_PROXY } from "../../../library";
import { useUsersInfo } from "../../../hooks";
import styled from "styled-components";

const AvatarImg = styled.img<{ size?: number }>`
  width: ${({ size }) => size || 20}px;
  height: ${({ size }) => size || 20}px;
  border-radius: 50%;
  object-fit: cover;
  background: #1e293b;
`;

type AvatarFromIdProps = {
  uid: string;
  size?: number;
};

export function AvatarFromId({ uid, size = 20 }: AvatarFromIdProps) {
  const { data, loading, error } = useUsersInfo([uid]);

  if (loading) return <Skeleton variant="circular" width={size} height={size} sx={{ bgcolor: '#334155' }} />;
  if (error)
    return (
      <AvatarImg
        src={DEFAULT_AVATAR}
        size={size}
        onError={(e) => { (e.target as HTMLImageElement).src = DEFAULT_AVATAR; }}
      />
    );

  const photoURL = data?.[0].data()?.photoURL;
  const displayName = data?.[0].data()?.displayName;

  return (
    <AvatarImg
      title={displayName}
      size={size}
      src={photoURL ? IMAGE_PROXY(photoURL) : DEFAULT_AVATAR}
      onError={(e) => { (e.target as HTMLImageElement).src = DEFAULT_AVATAR; }}
    />
  );
}
