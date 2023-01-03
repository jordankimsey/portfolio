import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ProjectCard = (props) => {
  const [showProject, setShowProject] = useState(false);

  const showProjectHandler = (e) => {
    e.preventDefault();

    setShowProject(true);
  };

  return (
    <div className='project-container'>
      <div className='project-card'>
        <img className='' src={props.imgSrc} alt={props.title} />
        <div className='project-overlay'>
          <div className='project-overlay-title'>{props.title}</div>
          <div className='project-view-button'>
            <Button onClick={showProjectHandler}>View</Button>
          </div>
        </div>
      </div>
      <Modal
        size='lg'
        show={showProject}
        onHide={() => setShowProject(false)}
        aria-labelledby='project-modal'
      >
        <Modal.Header closeButton>
          <Modal.Title id='project-modal'>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='description'>{props.pText}</div>
          <div className='projectImages'>
            <video
              width='100%'
              height='400'
              autoPlay={true}
              loop={true}
              muted={true}
              src={props.video}
            ></video>
          </div>
          <div className='links'>
            <Button className='project-button'>
              <a
                href={props.githubLink}
                rel='noopener noreferrer'
                target='_blank'
              >
                Github
              </a>
            </Button>
            <Button className='project-button'>
              <a
                href={props.liveSiteLink}
                rel='noopener noreferrer'
                target='_blank'
              >
                Live Site
              </a>
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProjectCard;
