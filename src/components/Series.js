import React from 'react';
import styled from 'styled-components';
import TimerIcon from '../images/Icon/icn_timer_line.png';
import PlayIcon from '../images/Icon/icn_playlist.png';
import DistanceIcon from '../images/Icon/icn_distance_line.png';

const playlists = [
  {
    title: 'Lake Inniscarra, Ireland—Pyramid',
    cardImage:
      'https://raw.githubusercontent.com/sdansby14/ifit-code-challenge/master/src/images/paddler2x.png',
    avatar:
      'https://raw.githubusercontent.com/sdansby14/ifit-code-challenge/master/src/images/Trainer/Avatar_32.png',
    time: '30:53',
    distance: '6,248 M',
    details: true,
    episode_count: 0,
  },
  {
    title: 'Performance Series',
    cardImage:
      'https://raw.githubusercontent.com/sdansby14/ifit-code-challenge/master/src/images/banana2x.png',
    avatar:
      'https://raw.githubusercontent.com/sdansby14/ifit-code-challenge/master/src/images/Trainer/Avatar_32%202.png',
    time: '',
    distance: null,
    details: false,
    episode_count: 9,
  },
  {
    title: 'Slow Pulls and Fast Intervals',
    cardImage:
      'https://raw.githubusercontent.com/sdansby14/ifit-code-challenge/master/src/images/img_marketing_web_cardimg_marketing_web_card%402x%20(25).png',
    avatar:
      'https://raw.githubusercontent.com/sdansby14/ifit-code-challenge/master/src/images/Trainer/%20Avatar_32%203.png',
    time: '44:13',
    distance: '9,948 M',
    details: false,
    episode_count: 0,
  },
  {
    title: '20 Minutes to Toned',
    cardImage:
      'https://raw.githubusercontent.com/sdansby14/ifit-code-challenge/master/src/images/img_marketing_web_cardimg_marketing_web_card%402x%20(19).png',
    avatar:
      'https://raw.githubusercontent.com/sdansby14/ifit-code-challenge/master/src/images/Trainer/%20Avatar_32%204.png',
    time: '',
    distance: '',
    details: false,
    episode_count: 12,
  },
  {
    title: 'Charles Race, Boston, Massachusetts',
    cardImage:
      'https://raw.githubusercontent.com/sdansby14/ifit-code-challenge/master/src/images/img_marketing_web_cardimg_marketing_web_card%402x%20(32).png',
    avatar:
      'https://raw.githubusercontent.com/sdansby14/ifit-code-challenge/master/src/images/Trainer/whipple_mary_hero3x_001.png',
    time: '36.22',
    distance: '8,648 M',
    details: false,
    episode_count: 0,
  },
  {
    title: 'Full-Body HIIT Series',
    cardImage:
      'https://raw.githubusercontent.com/sdansby14/ifit-code-challenge/master/src/images/img_marketing_web_cardimg_marketing_web_card%402x%20(20).png',
    avatar:
      'https://raw.githubusercontent.com/sdansby14/ifit-code-challenge/master/src/images/Trainer/%20Avatar_32%205.png',
    time: null,
    distance: null,
    details: false,
    episode_count: 12,
  },
  {
    title: 'Kafue River, Zambia—Power Stroke Pyramid',
    cardImage:
      'https://raw.githubusercontent.com/sdansby14/ifit-code-challenge/master/src/images/img_marketing_web_cardimg_marketing_web_card%402x%20(35).png',
    avatar:
      'https://raw.githubusercontent.com/sdansby14/ifit-code-challenge/master/src/images/Trainer/%20Avatar_32%206.png',
    time: '22.22',
    distance: '4,660 M',
    details: false,
    episode_count: 0,
  },
  {
    title: 'Shred & Burn Series',
    cardImage:
      'https://raw.githubusercontent.com/sdansby14/ifit-code-challenge/master/src/images/img_marketing_web_cardimg_marketing_web_card%402x%20(21).png',
    avatar:
      'https://raw.githubusercontent.com/sdansby14/ifit-code-challenge/master/src/images/Trainer/%20Avatar_32%207.png',
    time: '',
    distance: '',
    details: false,
    episode_count: 16,
  },
];

const Series = () => {
  return (
    <PlaylistSection>
      <PlaylistGrid>
        {playlists.map(
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
                        <div>
                          <PlaylistIcon src={TimerIcon} alt="Timer Icon" />
                          <PlaylistInfo>{time}</PlaylistInfo>
                        </div>
                      )}

                      {!!distance && (
                        <div>
                          <PlaylistIcon
                            src={DistanceIcon}
                            alt="Distance Icon"
                          />
                          <PlaylistInfo>{distance}</PlaylistInfo>
                        </div>
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
  );
};

const PlaylistSection = styled.section`
  padding: 80px 0;
`;

const PlaylistGrid = styled.div`
  display: grid;
  width: 84%;
  margin-right: auto;
  margin-left: auto;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  grid-template-columns: repeat(4, 1fr);
`;

const PlaylistCard = styled.div`
  width: 288px;
  height: 280px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 7px 12px rgba(46, 49, 52, 0.3);
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

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: auto;
`;

const TextBlock = styled.div`
  display: inline-block;
  width: 206px;
  height: 47px;
  font-weight: 700;
`;

const SubDetailsContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: visible;
  height: 30px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  align-self: stretch;
  -webkit-box-ordinal-group: 1;
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-box-flex: 0;
  -webkit-flex: 0 auto;
  -ms-flex: 0 auto;
  flex: 0 auto;
  text-decoration: none;
`;

const PlaylistIcon = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 5px;
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
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const AvatarContainer = styled.div`
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  -ms-grid-row-align: stretch;
  align-self: stretch;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
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
