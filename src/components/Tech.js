import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import yelpCampLaptop from './images/yelpCampLaptop.png';
import stanleyMov from './images/stanleySite.mov';
import ProjectCard from './ProjectCard';
import StanleyFull from './images/stanleyFullsize.jpg';
import tesla from './images/tesla.png';
import teslaVideo from './images/teslaVideo.mov';
import yelpCampVideo from './images/yelpCampVideo.mov';

const Tech = () => {
  return (
    <Container fluid className='tech-container' id='projects'>
      <h2>Projects</h2>
      <Row xs={1} md={2} lg={3}>
        <Col xs={12} md={6} lg={4}>
          <ProjectCard
            imgSrc={yelpCampLaptop}
            overlayDescription={'This was build with HTML CSS'}
            title={'YelpCamp'}
            pText={'hi !!!!this was made with'}
            video={yelpCampVideo}
            githubLink={'https://github.com/jordankimsey/yelpCamp'}
            liveSiteLink={'https://young-ravine-77950.herokuapp.com/'}
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <ProjectCard
            imgSrc={StanleyFull}
            title={'Realty1 Georgia'}
            pText={'hi testing p text'}
            video={stanleyMov}
            githubLink={'https://github.com/jordankimsey/scottstanley'}
            liveSiteLink={
              'http://scottstanleyrealtor58802.ipage.com/newsite/homesite.html'
            }
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <ProjectCard
            imgSrc={tesla}
            title={'Tesla Clone'}
            pText={'hi testing p text'}
            video={teslaVideo}
            githubLink={'https://github.com/jordankimsey/tesla-clone'}
            liveSiteLink={'https://teslaclonereact.herokuapp.com/'}
          />
        </Col>
      </Row>
      {/* <Row xs={1} md={2} lg={3}>
        <Col xs={12} md={6} lg={4}>
          <ProjectCard
            imgSrc={stanleyLaptop}
            title={'Tesla Clone'}
            pText={'hi testing p text'}
            video={stanleyMov}
            githubLink={'https://github.com/jordankimsey/tesla-clone'}
            liveSiteLink={'https://teslaclonereact.herokuapp.com/'}
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <ProjectCard
            imgSrc={stanleyLaptop}
            title={'Tesla Clone'}
            pText={'hi testing p text'}
            video={stanleyMov}
            githubLink={'https://github.com/jordankimsey/tesla-clone'}
            liveSiteLink={'https://teslaclonereact.herokuapp.com/'}
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <ProjectCard
            imgSrc={stanleyLaptop}
            title={'Tesla Clone'}
            pText={'hi testing p text'}
            video={stanleyMov}
            githubLink={'https://github.com/jordankimsey/tesla-clone'}
            liveSiteLink={'https://teslaclonereact.herokuapp.com/'}
          />
        </Col>
      </Row> */}
    </Container>
  );
};

export default Tech;
