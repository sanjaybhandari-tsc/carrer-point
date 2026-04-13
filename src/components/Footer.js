export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div>© {new Date().getFullYear()} CareerPoint. All rights reserved.</div>

      <div style={styles.links}>
        <span>Privacy Policy</span>
        <span>Terms</span>
        <span>Support</span>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 24px",
    background: "#111",
    color: "#fff",
    marginTop: "auto",
  },
  links: {
    display: "flex",
    gap: "16px",
  },
};