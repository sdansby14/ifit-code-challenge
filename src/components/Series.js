import React from 'react';
import styled from 'styled-components';
import TimerIcon from '../images/Icon/icn_timer_line.png';
import PlayIcon from '../images/Icon/icn_playlist.png';
import DistanceIcon from '../images/Icon/icn_distance_line.png';
import Paddler from '../images/paddler2x.png';

import AvatarOne from '../images/Trainer/Avatar_32.png';

const playlists = [
  {
    title: 'Lake Inniscarra, Ireland—Pyramid',
    cardImage: '../images/paddler2x.png',
    avatar: '../images/Trainer/Avatar_32.png',
    time: '30:53',
    distance: '6,248 M',
    details: true,
    episode_count: 0,
  },
  {
    title: 'Performance Series',
    cardImage: '../images/banana2x.png',
    avatar: '../images/Trainer/Avatar_32.png',
    time: '',
    distance: null,
    details: false,
    episode_count: 9,
  },
];

const Series = () => {
  return (
    <PlaylistSection>
      <PlaylistGrid>
        <PlaylistCard>
          <PlaylistImageContainer>
            <SeriesOverlay>
              <PlaylistHeading>9</PlaylistHeading>
              <PlaylistLabel>Workouts</PlaylistLabel>
              <PlayerIcon src={PlayIcon} alt="Playlist Icon" />
            </SeriesOverlay>
          </PlaylistImageContainer>
          <PlaylistDetails>
            <TextContainer>
              <TextBlock>Lake Inniscarra, Ireland—Pyramid </TextBlock>
              <SubDetailsContainer>
                <PlaylistIcon src={TimerIcon} alt="Timer Icon" />
                <PlaylistInfo>30:53</PlaylistInfo>
                <PlaylistIcon src={DistanceIcon} alt="Distance Icon" />
                <PlaylistInfo>6,248 M</PlaylistInfo>
              </SubDetailsContainer>
              <ViewDetails>View Details</ViewDetails>
            </TextContainer>
            <AvatarContainer>
              <PlaylistAvatar src={AvatarOne} alt="Lake Inniscarra Avatar" />
            </AvatarContainer>
          </PlaylistDetails>
        </PlaylistCard>
        <div class="playlistcard">
          <div class="playlistimagediv performanceseries">
            <div class="seriesoverlay">
              <h3 class="heading">9</h3>
              <div class="text-block-2">Workouts</div>
              <img src="images/-icn_playlist.png" alt="" class="image-2" />
            </div>
          </div>
          <div class="playlistdetails">
            <div class="textcontainer">
              <div class="text-block">Performance Series</div>
            </div>
            <div class="avatarcontainer">
              <img
                src="images/-Avatar_32-2.png"
                alt=""
                class="playlistavatar"
              />
            </div>
          </div>
        </div>
        <div class="playlistcard">
          <div class="playlistimagediv fastintervals"></div>
          <div class="playlistdetails">
            <div class="textcontainer">
              <div class="text-block fastintervalsinfo">
                Slow Pulls and Fast Intervals
              </div>
              <div class="moreinfocontainer">
                <img
                  src="images/-icn_timer_line.png"
                  alt=""
                  class="playlisticon"
                />
                <div class="playlistinfo">44:13</div>
                <img
                  src="images/-icn_distance_line.png"
                  width="12"
                  height="12"
                  alt=""
                  class="playlisticon"
                />
                <div class="playlistinfo">9,948 M</div>
              </div>
            </div>
            <div class="avatarcontainer">
              <img
                src="images/-Avatar_32-3.png"
                alt=""
                class="playlistavatar"
              />
            </div>
          </div>
        </div>
        <div class="playlistcard">
          <div class="playlistimagediv toned">
            <div class="seriesoverlay">
              <h3 class="heading">9</h3>
              <div class="text-block-2">Workouts</div>
              <img src="images/-icn_playlist.png" alt="" class="image-2" />
            </div>
          </div>
          <div class="playlistdetails">
            <div class="textcontainer">
              <div class="text-block">2‍</div>
            </div>
            <div class="avatarcontainer">
              <img
                src="images/-Avatar_32-4.png"
                height=""
                alt=""
                class="playlistavatar"
              />
            </div>
          </div>
        </div>
        <div class="playlistcard">
          <div class="playlistimagediv"></div>
          <div class="playlistdetails">
            <div class="textcontainer">
              <div class="text-block">Lake Inniscarra, Ireland—Pyramid</div>
              <div class="moreinfocontainer">
                <img
                  src="images/-icn_timer_line.png"
                  alt=""
                  class="playlisticon"
                />
                <div class="playlistinfo">30:53</div>
                <img
                  src="images/-icn_distance_line.png"
                  width="12"
                  height="12"
                  alt=""
                  class="playlisticon"
                />
                <div class="playlistinfo">6,248 M</div>
              </div>
              <div class="viewdetails">View Details</div>
            </div>
            <div class="avatarcontainer">
              <img src="images/-Avatar_32.png" alt="" class="playlistavatar" />
            </div>
          </div>
        </div>
        <div class="playlistcard">
          <div class="playlistimagediv"></div>
          <div class="playlistdetails">
            <div class="textcontainer">
              <div class="text-block">Lake Inniscarra, Ireland—Pyramid</div>
              <div class="moreinfocontainer">
                <img
                  src="images/-icn_timer_line.png"
                  alt=""
                  class="playlisticon"
                />
                <div class="playlistinfo">30:53</div>
                <img
                  src="images/-icn_distance_line.png"
                  width="12"
                  height="12"
                  alt=""
                  class="playlisticon"
                />
                <div class="playlistinfo">6,248 M</div>
              </div>
              <div class="viewdetails">View Details</div>
            </div>
            <div class="avatarcontainer">
              <img src="images/-Avatar_32.png" alt="" class="playlistavatar" />
            </div>
          </div>
        </div>
        <div class="playlistcard">
          <div class="playlistimagediv"></div>
          <div class="playlistdetails">
            <div class="textcontainer">
              <div class="text-block">Lake Inniscarra, Ireland—Pyramid</div>
              <div class="moreinfocontainer">
                <img
                  src="images/-icn_timer_line.png"
                  alt=""
                  class="playlisticon"
                />
                <div class="playlistinfo">30:53</div>
                <img
                  src="images/-icn_distance_line.png"
                  width="12"
                  height="12"
                  alt=""
                  class="playlisticon"
                />
                <div class="playlistinfo">6,248 M</div>
              </div>
              <div class="viewdetails">View Details</div>
            </div>
            <div class="avatarcontainer">
              <img src="images/-Avatar_32.png" alt="" class="playlistavatar" />
            </div>
          </div>
        </div>
        <div class="playlistcard">
          <div class="playlistimagediv"></div>
          <div class="playlistdetails">
            <div class="textcontainer">
              <div class="text-block">Lake Inniscarra, Ireland—Pyramid‍</div>
              <div class="moreinfocontainer">
                <img
                  src="images/-icn_timer_line.png"
                  alt=""
                  class="playlisticon"
                />
                <div class="playlistinfo">30:53</div>
                <img
                  src="images/-icn_distance_line.png"
                  width="12"
                  height="12"
                  alt=""
                  class="playlisticon"
                />
                <div class="playlistinfo">6,248 M</div>
              </div>
              <div class="viewdetails">View Details</div>
            </div>
            <div class="avatarcontainer">
              <img src="images/-Avatar_32.png" alt="" class="playlistavatar" />
            </div>
          </div>
        </div>
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
  background-image: url('${Paddler}'),
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
