import React from 'react';
import './App.css';
import Iframe from 'react-iframe';
import ImageGallery from 'react-image-gallery';
import ReactMarkdown from 'react-markdown';
import 'react-image-gallery/styles/css/image-gallery.css';
import img1 from './images/1.png';
import img2 from './images/2.webp';
import img3 from './images/3.png';
import img4 from './images/4.webp';
import img5 from './images/5.jpg';
import img6 from './images/6.webp';
import img7 from './images/7.webp';
import img8 from './images/8.png';
import img9 from './images/9.png';
import img10 from './images/10.jpg';
import img11 from './images/11.jpg';
import img12 from './images/12.jpg';
import img13 from './images/13.webp';
import img14 from './images/14.webp';
import img15 from './images/15.jpg';
import img16 from './images/16.jpg';


const biography = `
#### NFL Career
- **Position**: Tight End
- **Team**: New Orleans Saints
- **Seasons**: 6 NFL seasons (2nd with the Saints)
- **Career Stats**:
  - 76 regular season games, 44 starts
  - 112 receptions for 1,300 yards (11.6 avg.)
  - 13 touchdowns
  - At least 20 catches in each of the last three seasons
- **Skillset**: Size, speed, strength; vital offensive weapon for the Saints in 2024

#### Career Transactions
- **May 10, 2023**: Signed a multiyear contract with the New Orleans Saints (UFA-LV)
- **December 10, 2019**: Placed on Injured Reserve by the Raiders
- **May 2, 2019**: Signed a four-year contract with the Raiders
- **2019 NFL Draft**: Selected by the Raiders in the fourth round (137th overall)

#### Honors
- **2023**: Ed Block Courage Award (Saints team winner)

#### Notable Career Highlights
- **2023 Season**:
  - 15 games, 10 starts for the Saints
  - 21 receptions for 193 yards and 1 TD
  - **Key Moments**:
    - First Saints TD in a 34-0 win at New England (Oct. 8)
    - Season-high 4 receptions for 33 yards at Houston (Oct. 15)
    - Season-long 23-yard reception vs. Chicago (Nov. 5)

- **2022 Season**:
  - 15 games, 14 starts for the Raiders
  - Career-highs in receptions (33) and yards (420)
  - 2 TDs
  - **Key Games**:
    - 6 receptions at New Orleans (Oct. 30)
    - Season-long 33-yard reception at Denver (Nov. 20)

- **2021 Season**:
  - 17 games, 11 starts for the Raiders
  - 30 receptions for 373 yards and 3 TDs
  - Played key roles on both offense and special teams

- **2020 Season**:
  - Appeared in all 16 games (2 starts)
  - Recorded 7 receptions for 140 yards and 2 TDs

- **2019 Rookie Season**:
  - 13 games, 7 starts
  - 21 receptions for 174 yards and 5 TDs
  - Ranked 1st among rookie tight ends with 5 TDs

#### College Career (LSU, 2015-2018)
- **Games Played**: 49 (32 starts)
- **Career Stats**: 52 receptions for 629 yards and 6 TDs
- **Senior Year (2018)**: Team captain, started all 13 games, 22 receptions for 272 yards and 2 TDs
- **Junior Year (2017)**: 24 receptions for 278 yards and 3 TDs (tied for team lead in TDs)
- **Bachelor's Degree**: Sports Administration

#### Personal Life
- **High School**: Jesuit (New Orleans, La.)
  - 87 catches for 1,210 yards and 15 TDs during his career
  - Led Jesuit to first state title in 50 years (2014)
- **Other Sports**: Played basketball (center) and track & field
- **Charity Involvement**: Wore custom cleats to promote Hodgkins/cancer awareness (My Cause My Cleats)
- **Personal Battle**: Recovered from Nodular Lymphocyte-Predominant Hodgkins Lymphoma (NLPHL)
- **Date of Birth**: May 6, 1997 in New Orleans, La.
`;

const images = [
  { original: img1, thumbnail: img1 },
  { original: img2, thumbnail: img2 },
  { original: img3, thumbnail: img3 },
  { original: img4, thumbnail: img4 },
  { original: img5, thumbnail: img5 },
  { original: img6, thumbnail: img6 },
  { original: img7, thumbnail: img7 },
  { original: img8, thumbnail: img8 },
  { original: img9, thumbnail: img9 },
  { original: img10, thumbnail: img10 },
  { original: img11, thumbnail: img11 },
  { original: img12, thumbnail: img12 },
  { original: img13, thumbnail: img13 },
  { original: img14, thumbnail: img14 },
  { original: img15, thumbnail: img15 },
  { original: img16, thumbnail: img16 },
];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Foster Moreau</h1>
      </header>

      <main>
        <section className="photo-gallery">
          <h2>Photo Gallery</h2>
          <ImageGallery items={images} />
        </section>

        <section className="biography">
          <h2>Biography</h2>
          <ReactMarkdown>{biography}</ReactMarkdown>
        </section>

        <section className="instagram">
          <h2>Instagram Feed</h2>
          <a
            href="https://www.instagram.com/big_fof/?utm_source=ig_embed&amp;utm_campaign=loading"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Foster Moreau's Instagram Profile
          </a>
        </section>

        <section className="stats">
          <h2>Statistics</h2>
          <Iframe
            src="https://www.pro-football-reference.com/players/M/MoreFo00.htm#receiving_and_rushing::none"
            width="800"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </section>

        <section className="latest-news">
          <h2>Latest News</h2>
          <button>
            <a
              href="https://news.google.com/topics/CAAqKAgKIiJDQkFTRXdvTkwyY3ZNVEZvTmw5b2VqUm5jaElDWlc0b0FBUAE?ceid=US:en&oc=3"
              target="_blank"
              rel="noopener noreferrer"
            >
              News
            </a>
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;