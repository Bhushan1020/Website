import React from 'react';
import johnDoeImage from './window.png'; // Import John Doe image
import janeSmithImage from './window.png'; // Import Jane Smith image
import michaelJohnsonImage from './window.png';
import bgImage from './bgimg.jpg';  // Import Michael Johnson image

const Team = () => {
  return (
    <div style={{...styles.page,backgroundImage: `url(${bgImage})`}}>
     <center> <h1 style={styles.heading}>Our Team</h1>
      <p style={styles.paragraph}><h5>Meet our amazing team members...</h5></p></center>
      <li style={styles.listItem}>
          <img src={johnDoeImage} alt="John Doe" style={styles.image} />
          <div style={{color:"white",height:"80px"}}>
            <h6>prof. H.P. Pathade - Event Manager
            <br />
            Contact: +91 9011076115</h6>
          </div>
        </li>
        <br/>
       <center> <h3 style={{color:"#fff"}}>Event Co-ordinators</h3></center>
       <ul style={{ display: "flex", flexDirection: "row",justifyContent:"center",marginTop:"30px",marginBottom:"30px",  listStyleType: "none", padding: 0 }}>
          <li style={{ ...styles.listItem, marginRight: "20px" }}>
            <img src={janeSmithImage} alt="Jane Smith" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Ganesh Patil - Co-ordinator
              <br />
              Contact: +91 8010534749
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={michaelJohnsonImage} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Ganesh Kawade - Co-ordinator
              <br />
              Contact: +91 7756867690
            </div>
          </li>
        </ul>







        <center> <h3 style={{color:"#fff"}}>Robo War Co-ordinators</h3></center>
       <ul style={{ display: "flex", flexDirection: "row",justifyContent:"center",marginTop:"30px",marginBottom:"30px",  listStyleType: "none", padding: 0 }}>
          <li style={{ ...styles.listItem, marginRight: "20px" }}>
            <img src={janeSmithImage} alt="Jane Smith" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Ganesh Kawade - Co-ordinator
              <br />
              Contact: +91 7756867690
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={michaelJohnsonImage} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Akshada Bhagwat - Co-ordinator
              <br />
              Contact: +91 9373336266
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={michaelJohnsonImage} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Rutuja Gawande - Co-ordinator
              <br />
              Contact: +91 9373336266
            </div>
          </li>
        </ul>


        <center> <h3 style={{color:"#fff"}}>Line Follower Robot Co-ordinators</h3></center>
       <ul style={{ display: "flex", flexDirection: "row",justifyContent:"center",marginTop:"30px",marginBottom:"30px",  listStyleType: "none", padding: 0 }}>
          <li style={{ ...styles.listItem, marginRight: "20px" }}>
            <img src={janeSmithImage} alt="Jane Smith" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Om Gunjal - Co-ordinator
              <br />
              Contact: +91 7558352327
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={michaelJohnsonImage} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Shreyas Sangle - Co-ordinator
              <br />
              Contact: +91 9359745542
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={michaelJohnsonImage} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Pragati Takate - Co-ordinator
              <br />
              Contact: +91 9699717113
            </div>
          </li>
        </ul>



        <center> <h3 style={{color:"#fff"}}>Drone Racing Co-ordinators</h3></center>
       <ul style={{ display: "flex", flexDirection: "row",justifyContent:"center",marginTop:"30px",marginBottom:"30px",  listStyleType: "none", padding: 0 }}>
          <li style={{ ...styles.listItem, marginRight: "20px" }}>
            <img src={janeSmithImage} alt="Jane Smith" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Onkar Shelke  - Co-ordinator
              <br />
              Contact: +91 9021314192
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={michaelJohnsonImage} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Onkar Hase - Co-ordinator
              <br />
              Contact: +91 8600298165
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={michaelJohnsonImage} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Aniket Dighe - Co-ordinator
              <br />
              Contact: +91 9921460192
            </div>
          </li>
        </ul>


        <center> <h3 style={{color:"#fff"}}>E-sports Co-ordinators</h3></center>
       <ul style={{ display: "flex", flexDirection: "row",justifyContent:"center",marginTop:"30px",marginBottom:"30px",  listStyleType: "none", padding: 0 }}>
          <li style={{ ...styles.listItem, marginRight: "20px" }}>
            <img src={janeSmithImage} alt="Jane Smith" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Shreyas Thokale - Co-ordinator
              <br />
              Contact: +91 9518912170
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={michaelJohnsonImage} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Yash Chaskar - Co-ordinator
              <br />
              Contact: +91 8468914149
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={michaelJohnsonImage} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Sumit Dhokare - Co-ordinator
              <br />
              Contact: +91 7020799454
            </div>
          </li>
        </ul>



        <center> <h3 style={{color:"#fff"}}>Robo Exhibition Co-ordinators</h3></center>
       <ul style={{ display: "flex", flexDirection: "row",justifyContent:"center",marginTop:"30px",marginBottom:"30px",  listStyleType: "none", padding: 0 }}>
          <li style={{ ...styles.listItem, marginRight: "20px" }}>
            <img src={janeSmithImage} alt="Jane Smith" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Sanket Thakare - Co-ordinator
              <br />
              Contact: +91 9307527664
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={michaelJohnsonImage} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Pooja Sonawane - Co-ordinator
              <br />
              Contact: +91 8010464545
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={michaelJohnsonImage} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Kaveri Tambe - Co-ordinator
              <br />
              Contact: +91 9075512060
            </div>
          </li>
        </ul>


        <center> <h3 style={{color:"#fff"}}>Digital Poster Presentation Co-ordinators</h3></center>
       <ul style={{ display: "flex", flexDirection: "row",justifyContent:"center",marginTop:"30px",marginBottom:"30px",  listStyleType: "none", padding: 0 }}>
          <li style={{ ...styles.listItem, marginRight: "20px" }}>
            <img src={janeSmithImage} alt="Jane Smith" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Shreyas Thokale - Co-ordinator
              <br />
              Contact: +91 9518912170
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={michaelJohnsonImage} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Kalyani Gadakh - Co-ordinator
              <br />
              Contact: +91 9307137377
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={michaelJohnsonImage} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Shradha Wabale - Co-ordinator
              <br />
              Contact: +91 7058408036
            </div>
          </li>
        </ul>


        <center> <h3 style={{color:"#fff"}}>Paper Presentation Co-ordinators</h3></center>
       <ul style={{ display: "flex", flexDirection: "row",justifyContent:"center",marginTop:"30px",marginBottom:"30px",  listStyleType: "none", padding: 0 }}>
          <li style={{ ...styles.listItem, marginRight: "20px" }}>
            <img src={janeSmithImage} alt="Jane Smith" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Parimal Pokharkar - Co-ordinator
              <br />
              Contact: +91 9370369376
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={michaelJohnsonImage} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Nikhil Pagare - Co-ordinator
              <br />
              Contact: +91 7887961904
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={michaelJohnsonImage} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Tanuja Rahane - Co-ordinator
              <br />
              Contact: +91 9356868961
            </div>
          </li>
        </ul>


        <center> <h3 style={{color:"#fff"}}>Contraption Co-ordinators</h3></center>
       <ul style={{ display: "flex", flexDirection: "row",justifyContent:"center",marginTop:"30px",marginBottom:"30px",  listStyleType: "none", padding: 0 }}>
          <li style={{ ...styles.listItem, marginRight: "20px" }}>
            <img src={janeSmithImage} alt="Jane Smith" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Snehal Kachale - Co-ordinator
              <br />
              Contact: +91 9422261095
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={michaelJohnsonImage} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Prajwali Landge - Co-ordinator
              <br />
              Contact: +91 9422261095
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={michaelJohnsonImage} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Nikhil Hajare - Co-ordinator
              <br />
              Contact: +91 9322637245
            </div>
          </li>
        </ul>



        <center> <h3 style={{color:"#fff"}}>Robo Programming Co-ordinators</h3></center>
       <ul style={{ display: "flex", flexDirection: "row",justifyContent:"center",marginTop:"30px",marginBottom:"30px",  listStyleType: "none", padding: 0 }}>
          <li style={{ ...styles.listItem, marginRight: "20px" }}>
            <img src={janeSmithImage} alt="Jane Smith" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Sudhir Tambe - Co-ordinator
              <br />
              Contact: +91 9359233410
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={michaelJohnsonImage} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Kanchan Bibave - Co-ordinator
              <br />
              Contact: +91 9359233410
            </div>
          </li>
          <li style={styles.listItem}>
            <img src={michaelJohnsonImage} alt="Michael Johnson" style={styles.image} />
            <div style={{ color: "#fff" }}>
              Punam Khilari - Co-ordinator
              <br />
              Contact: +91 9359233410
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
