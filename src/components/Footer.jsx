import React from "react";

function Footer() {
    return (
        <footer style={styles.footer}>
            <p>저작권 © 2024. 모든 권리 보유.</p>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: "#333",
        color: "#fff",
        padding: "10px",
        textAlign: "center",
        position: "absolute",
        bottom: "0",
        width: "100%",
    },
};

export default Footer;
