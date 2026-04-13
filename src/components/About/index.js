import styles from "../../styles/About/About.module.css";

export default function AboutView() {
  return (
    <div className='about'>
      <section className='hero'>
        <h1>About Us</h1>
        <p>Empowering careers. Connecting talent with opportunity.</p>
      </section>

      <section className='content'>
        <h2>Who We Are</h2>
        <p>
          Career Point Placement Services is a dedicated platform focused on
          bridging the gap between talented individuals and top companies. We
          aim to provide students and professionals with the right opportunities
          to build successful careers.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to empower job seekers by providing them with the tools,
          training, and opportunities needed to succeed in today’s competitive
          job market.
        </p>

        <h2>What We Offer</h2>
        <ul>
          <li>Placement assistance with top companies</li>
          <li>Skill development and training programs</li>
          <li>Career guidance and mentorship</li>
          <li>Resume building and interview preparation</li>
        </ul>

        <h2>Why Choose Us</h2>
        <p>
          We focus on personalized support, industry-relevant skills, and strong
          employer connections to ensure the best outcomes for our candidates.
        </p>
      </section>
    </div>
  );
}