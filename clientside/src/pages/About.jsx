import React from 'react'
import Layout from '../components/layout/layout';
import styles from './About.module.css' 

function About () {
  return (
    <>
  <Layout>
    <div className={styles.container}>
    <div className={styles.content}>
      <div className="left-side">
        <div className={styles.details}>
          <i className="fas fa-map-marker-alt"></i>
          <div className={styles.topic}>Address</div>
          <div className="text-one">Surkhet, NP12</div>
          <div className="text-two">Birendranagar 06</div>
    <Layout>
    <div class={styles.container}>
    <div class={styles.content}>
      <div class="left-side">
        <div class={styles.details}>
          <i class="fas fa-map-marker-alt"></i>
          <div class={styles.topic}>Address</div>
          <div class="text-one">Surkhet, NP12</div>
          <div class="text-two">Birendranagar 06</div>
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt"></i>
          <div className={styles.topic}>Phone</div>
          <div className="text-one">+0098 9893 5647</div>
          <div className="text-two">+0096 3434 5678</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope"></i>
          <div className={styles.topic}>Email</div>
          <div className="text-one">codinglab@gmail.com</div>
          <div className="text-two">info.codinglab@gmail.com</div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Send us a message</div>
        <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name"></input>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email"></input>
        </div>
        <div className="input-box message-box">
          
        </div>
        <div className="button">
          <input type="button" value="Send Now" ></input>
        </div>
      </form>
    </div>
    </div>
  </div>
</Layout>
    </>
    </Layout>
 main
  )
}
export default About;
