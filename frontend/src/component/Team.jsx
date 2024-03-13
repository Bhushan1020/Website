import React from 'react';
import johnDoeImage from './logo.png'; // Import John Doe image
import janeSmithImage from './logo.png'; // Import Jane Smith image
import michaelJohnsonImage from './window.png';
import bgImage from './bgimg.jpg';  // Import Michael Johnson image

const Team = () => {
  return (
    <div style={{...styles.page,backgroundImage: `url(${bgImage})`}}>
     <center> <h1 style={styles.heading}>Our Team</h1>
      <p style={styles.paragraph}><h5>Meet our amazing team members...</h5></p></center>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <img src={johnDoeImage} alt="John Doe" style={styles.image} />
          <div>
            John Doe - CEO
            <br />
            Contact: +1234567890
          </div>
        </li>
        <li style={styles.listItem}>
          <img src={janeSmithImage} alt="Jane Smith" style={styles.image} />
          <div>
            Jane Smith - COO
            <br />
            Contact: +1234567891
          </div>
        </li>
        <li style={styles.listItem}>
          <img src={michaelJohnsonImage} alt="Michael Johnson" style={styles.image} />
          <div>
            Michael Johnson - CTO
            <br />
            Contact: +1234567892
          </div>
        </li>
        <li style={styles.listItem}>
          <img src={johnDoeImage} alt="John Doe" style={styles.image} />
          <div>
            John Doe - CEO
            <br />
            Contact: +1234567890
          </div>
        </li>
        <li style={styles.listItem}>
          <img src={janeSmithImage} alt="Jane Smith" style={styles.image} />
          <div>
            Jane Smith - COO
            <br />
            Contact: +1234567891
          </div>
        </li>
        <li style={styles.listItem}>
          <img src={michaelJohnsonImage} alt="Michael Johnson" style={styles.image} />
          <div>
           Michael Johnson - CTO
            <br />
            Contact: +1234567892
          </div>
        </li>
      </ul>
    </div>
  );
}

const styles = {
  page: {
    Width: '100%',
    padding: '20px',
    backgroundColor: '#eeeded',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundSize: 'cover',
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
  list: {
    color:"#fff",
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  listItem: {
    flexBasis: '30%', // Adjust this value as per your design
    margin: '10px',
    textAlign: 'center'
  },
  image: {
    width: '100px', // Adjust the width as per your requirement
    height: '100px', // Adjust the height as per your requirement
    marginBottom: '10px', // Add some space between the image and the text
    borderRadius: '50%', // Make the image circular (assuming it's a profile picture)
  }
};

export default Team;
