
import React from 'react';
import bgImage from './bgimg.jpg'; 

const AboutUs = () => {
  return (
    <div style={{ ...styles.page, backgroundImage: `url(${bgImage})` }}>
      <center><h1 style={styles.heading}>About Us</h1></center>
      <h5 style={styles.paragraph}>
Join us for an exhilarating journey into the world of robotics at Excalibur 2024. This event is a celebration of innovation, technology, and the incredible advancements in the field of robotics. Whether you're a seasoned roboticist, a tech enthusiast, or just curious about the future, this is the place to be.</h5>
  <br/><h6 style={styles.paragraph}>
<strong style={styles.paragraph}>Robotics Competition : </strong>

Cheer on participants in a thrilling robotics competition that will put their creations to the test. From navigating obstacle courses to solving complex challenges, watch as teams showcase their robotic prowes s.the competition games will be robowar,drone racing, esports, line follower and many more.</h6>
<br/><h6 style={styles.paragraph}>
<strong style={styles.paragraph}>Exhibition Area : </strong>

Explore the exhibition area featuring companies and startups at the forefront of robotics innovation. Connect with exhibitors, discover new products, and explore potential collaborations.</h6>
<br/><h6 style={styles.paragraph}>
<strong style={styles.paragraph}>Networking Opportunities : </strong>

Connect with like-minded individuals, professionals, and enthusiasts who share a passion for robotics. Build valuable connections, exchange ideas, and explore potential collaborations during networking sessions.</h6>
<br/><h6 style={styles.paragraph}>
<strong style={styles.paragraph}>Registration : </strong>

Secure your spot at Excalibur 2024 by registering online at Registration portal . Portal is being available, so don't miss out on this incredible opportunity to be part of the future of robotics.</h6>
<br/><br/>
 <h4 style={styles.paragraph}>Don't miss your chance to be part of this exciting event that promises to inspire, educate, and redefine the possibilities of robotics. See you at Excalibur 2024</h4>
    </div>
  );
}

const styles = {
  page: {
    width: '70%',
    backgroundSize: 'cover',
    margin: '30px 200px 30px 200px',
    padding: '20px',
    backgroundColor: '#edebeb',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  heading: {
    color: '#fff'
  },
  paragraph: {
    color: '#fff',
    lineHeight: '1.5'
  },
};

export default AboutUs;
