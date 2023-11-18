import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
     <div className={styles.wrapper}>
      
     {/*header-wrapper*/} 
        <div className={styles.header_wrapper}>
          
            <div className={styles.header}>
                <div className={styles.header_left}>
                  <Image 
                  src="/logo-piaic.svg"
                  alt='logo'
                  width={87}
                  height={120}
                  />
                </div>

                <div className={styles.header_right}>
                  <ul>
                    <li>Apply</li>
                    <li>Available Program</li>
                    <li>About</li>
                    <li>Wit</li>
                  </ul>
                </div>
            </div>
        </div>
        <div className={styles.clr}></div>
        {/*end header-wrapper*/}
        <div className={styles.wrapper_hero}>
          <div className={styles.hero}>
              <div className={styles.hero_left}>
              <Image 
                  src="/zia2.png"
                  alt='Sir Zia '
                  width={500}
                  height={500}
                  />
              </div>
              <div className={styles.hero_right}>
                <h1>PANA CEO Initiative</h1>
                <h2>for Artificial Intelligence & NEXT JS (PIAIC)
                </h2>
                <p>The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.</p>
                <button>APPLY</button>
              </div>
          </div>
        </div>

        <div className={styles.clr}></div>
        <div className={styles.wrapper_pana_section}>
              <div className={styles.pana_section}>
                <h1>Certified Web 3.0 and Metaverse Developer: A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar
                </h1>
                <h2>Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users</h2>
                </div> 
         </div>
         <div className={styles.clr}></div>

      <div className={styles.wrapper_main_content}>
        <div className={styles.main_content}>
          <h1>Certified Web 3.0 and Metaverse Developer: A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar</h1>
          <Image
          src="/panaverse.png"
          alt='pana image'
          width={832}
          height={478}
          />
        <h2>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</h2>
        <h2><a href='piaic.org'>Admissions Now Open in Karachi, Lahore, Islamabad, and Peshawar</a>
        </h2>
        <p>The internet is without a doubt the most important technological development in human history. Web3 and metaverse technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud computing, voice computing, ambient computing, and more.</p>
        <p>Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centred on decentralised technologies and virtual worlds. Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030.</p>
        <h2>The Program in a Nutshell: Earn While You Learn</h2>
        <p>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program’s beginning. It resembles a cross between a corporate venture and an educational project.</p>
        <h2>Program of Studies</h2>
        <p>This curriculum is intended for beginners who want to learn software development from the ground up. The first two quarters are shared by all specialities and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a year-long hybrid programme that includes both onsite and online classes and is divided into four quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.</p>
        <h2>Core Courses (Common in All Specializations)</h2>
        <p>Every participant of the program will start by completing the following two core courses:</p>
        <a href='https://github.com/panaverse/panaverse.github.io#quarter-i-core'>Quarter I (Core) CS-101: Object-Oriented Programming using TypeScript</a>
        <a href='https://github.com/panaverse/panaverse.github.io#quarter-ii-core'>Quarter II (Core) W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</a>
        <h2>Specialized Tracks</h2>
        <p>After completing the first two quarters the participants will select one or more specializations consisting of two courses each:</p>

        <h1>Detailed Course Syllabus</h1>
        <h2>Quarter I (Core)</h2>
        <h2>CS-101: Object-Oriented Programming using TypeScript</h2>
        <p>Duration: 13 Weeks</p>
        <p>Course Description:</p>
        <p>We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.</p>
        <p>Course Outline:</p>
        <h3>HTML and CSS (Homework)</h3>
        <a href='https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6'>Learn HTML by Hira Khan (Watch Recorded Videos)</a><br></br>
        <a href='https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob'>Learn CSS Intro by Hira Khan (Watch Recorded Videos)</a>







        </div>
      </div>
      <div className={styles.clr}></div>
<div className={styles.wrapper_footer}>
  <div className={styles.footer}>
    <div className={styles.navigation}>
      <h4>Navigation</h4>
      <ul><li>Home</li>
      <li>Apply</li>
      <li>How it works</li>
      <li>Blockchain</li>
      <li>Artifical </li>
      </ul>
    </div>
    <div className={styles.locations}></div>
    </div>
  <div className={styles.copyrights}></div>
</div>





      </div>
    </main>
  )
}
