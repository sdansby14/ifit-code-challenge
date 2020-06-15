import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import TimerIcon from '../images/svgs/timer.svg';
import PlayIcon from '../images/svgs/player.svg';
import DistanceIcon from '../images/svgs/distance.svg';
import GlobalContext from '../context/global-context';

const Series = () => {
  return (
    <GlobalContext.Consumer>
      {(context) => (
        <PlaylistSection>
          <PlaylistGrid>
            {context.playlists.map(
              ({
                title,
                cardImage,
                avatar,
                time,
                distance,
                details,
                episode_count,
              }) => {
                return (
                  <PlaylistCard key={title}>
                    <PlaylistImageContainer cardImage={cardImage}>
                      {!!episode_count && (
                        <SeriesOverlay>
                          <PlaylistHeading>{episode_count}</PlaylistHeading>
                          <PlaylistLabel>Workouts</PlaylistLabel>
                          <PlayerIcon src={PlayIcon} alt="Playlist Icon" />
                        </SeriesOverlay>
                      )}
                    </PlaylistImageContainer>
                    <PlaylistDetails>
                      <TextContainer>
                        <TextBlock>{title}</TextBlock>
                        <SubDetailsContainer>
                          {!!time && (
                            <PlaylistContainer>
                              <PlaylistIcon
                                type="image/svg+xml"
                                data={TimerIcon}
                              />
                              <PlaylistInfo>{time}</PlaylistInfo>
                            </PlaylistContainer>
                          )}

                          {!!distance && (
                            <PlaylistContainer>
                              <PlaylistIcon
                                type="image/svg+xml"
                                data={DistanceIcon}
                              />
                              <PlaylistInfo>{distance}</PlaylistInfo>
                            </PlaylistContainer>
                          )}
                        </SubDetailsContainer>
                        {details && <ViewDetails>View Details</ViewDetails>}
                      </TextContainer>
                      <AvatarContainer>
                        <PlaylistAvatar src={avatar} alt={title} />
                      </AvatarContainer>
                    </PlaylistDetails>
                  </PlaylistCard>
                );
              }
            )}
          </PlaylistGrid>
        </PlaylistSection>
      )}
    </GlobalContext.Consumer>
  );
};

const fadeUp = keyframes`
      0%{
        transform: translateY(50%);
        opacity: 0;
        }
    100%{
        transform: rotate(xx) translateY(0);
        opacity: 1;
        }
`;

const fadeUpAnimation = css`
  animation: ${fadeUp} 0.5s forwards 0s ease-out;
`;

const wiggle = keyframes`
  0%{
    transform: rotate(0);
    }
  15%{
    transform: rotate(15deg);
    }
  30%{
    transform: rotate(-15deg);
    }
  45%{
    transform: rotate(15deg);
    }
  60%{
    transform: rotate(-15deg);
    }
  75%{
    transform: rotate(15deg);
    }
  90%{
    transform: rotate(-15deg);
    }
  100%{
    transform: rotate(0);
    }
`;

const wiggleAnimation = css`
  animation: ${wiggle} 0.5s forwards 0s ease-out;
`;

const PlaylistSection = styled.section`
  padding: 80px 0 60px 0;
  max-width: 1440px;
  margin: 0 auto;
`;

const PlaylistGrid = styled.div`
  display: grid;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;

  @media (max-width: 1439px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const TextBlock = styled.div`
  display: inline-block;
  width: 206px;
  height: 47px;
  font-weight: 700;
`;

const PlaylistIcon = styled.object`
  margin-right: 5px;
`;

const PlaylistCard = styled.div`
  width: 288px;
  height: 280px;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(46, 49, 52, 0.4);
  transition: 0.3s;

  :hover {
    box-shadow: 0 7px 12px rgba(46, 49, 52, 0.3);
  }
  &:hover ${TextBlock} {
    ${fadeUpAnimation}
  }
  &:hover ${PlaylistIcon} {
    ${wiggleAnimation}
  }

  @media (max-width: 1439px) {
    width: 360px;
    height: 305px;
  }

  @media (max-width: 359px) {
    width: 250px;
  }
`;

const PlaylistImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 60%;
  border-radius: 4px;
  background-image: url('${(props) => props.cardImage}'),
    linear-gradient(180deg, #000c28, #000c28);
  background-position: 0px 0px, 0px 0px;
  background-size: cover, auto;
`;

const PlaylistDetails = styled.div`
  display: flex;
  height: 40%;
  padding: 5px 10px;
`;

const PlaylistContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: auto;
`;

const SubDetailsContainer = styled.div`
  display: flex;
  overflow: visible;
  height: 30px;
  align-self: stretch;
  order: 0;
  flex: 0 auto;
  text-decoration: none;
`;

const PlaylistInfo = styled.span`
  margin-right: 5px;
  color: #2e3134;
  font-size: 10px;
  line-height: 12px;
  font-weight: 700;
  letter-spacing: 0.3px;
  text-transform: uppercase;
`;

const ViewDetails = styled.div`
  color: #0069d2;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const AvatarContainer = styled.div`
  align-self: stretch;
  flex: 1;
  text-align: right;
`;

const PlaylistAvatar = styled.img`
  flex: 0 0 auto;
  text-align: center;
`;

const SeriesOverlay = styled.div`
  width: 35%;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: rgba(0, 12, 40, 0.54);
  text-align: center;
`;

const PlaylistHeading = styled.span`
  display: block;
  color: #fff;
  font-size: 28px;
  font-weight: 400;
  text-align: center;
`;

const PlaylistLabel = styled.span`
  display: block;
  margin: 10px 0;
  color: #fff;
  font-size: 10px;
  line-height: 12px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.3px;
  text-transform: uppercase;
`;

const PlayerIcon = styled.img`
  width: 24px;
  height: 24px;
  text-align: center;
`;

export default Series;
