import React from "react";

const Home = () => {
  const styles = {
    container: {
      textAlign: "center",
      padding: "50px",
      backgroundColor: "#f4f4f9",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      // justifyContent: "center",
      alignItems: "center",
      fontFamily: "'Arial', sans-serif",
    },
    heading: {
      color: "#333",
      fontSize: "3rem",
      marginBottom: "10px",
      textTransform: "uppercase",
      letterSpacing: "2px",
    },
    paragraph: {
      color: "#666",
      fontSize: "1.2rem",
      maxWidth: "600px",
      lineHeight: "1.6",
    },
    button: {
      marginTop: "20px",
      padding: "10px 20px",
      fontSize: "1rem",
      color: "#fff",
      backgroundColor: "#007bff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Home Page</h1>
      {/* <p style={styles.paragraph}>
        Welcome to our <strong>React Dynamic Routing App!</strong> Navigate through the pages to explore dynamic user profiles.
      </p> */}
      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
      >
        Explore Profiles
      </button>
    </div>
  );
};

export default Home;