import React, { useEffect } from 'react';
import './Education.css';
import Footer from '../Footer';


export default function Education() {
  useEffect(() => {
    const scrollElements = document.querySelectorAll('.scroll-up');

    const handleScroll = () => {
      scrollElements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < window.innerHeight) {
          setTimeout(() => {
            element.classList.add('show');
          }, index * 300); 
        } else {
          element.classList.remove('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h2>Education</h2>
      <p>
        Scroll down!
      </p>

      <div className="scroll-up content">
        <h3 className="scroll-up">Early Education</h3>
        <p className="scroll-up">My formative years, from kindergarten to grade 6, were spent in the "Green Heights Language School," where I started my educational adventure. These formative years gave me a solid platform on which to build my academic career and lifetime quest for knowledge.</p>
        <img
          className="scroll-up"
          src="\images\img-11.jpg"
          alt="Image 1"
        />
      </div>

      <div className="scroll-up content">
        <h3 className="scroll-up">High School and Scholarships</h3>
        <p className='scroll-up'>After graduating from "Green Heights Language School," I transferred to "Egypt British International School" to finish both middle and high school, which lasted from Grades 7 to 12. I performed exceptionally well academically during this time, earning a stunning grade point average of 99.5%. My remarkable achievement in Computer Science Advanced Level (CS AL) and Mathematics Advanced Level (Math AL) earned me a prestigious scholarship at the renowned "German University in Cairo." I received the highest grades in these areas, which is evidence of my enthusiasm for and commitment to the study of computer science. This outstanding accomplishment constituted a crucial turning point in my academic career and opened doors to new options.
</p>
        <img
          className="scroll-up"
          src="\images\school.jpg"
          alt="Image 1"
        />
      </div>

      <div className="scroll-up content">
        <h3 className="scroll-up">Pursuing Higher Education</h3>
        <p className='scroll-up'>Having received the scholarship, I started on my path to earning a Bachelor of Science in Computer Science and Engineering at "The German University in Cairo." I'm still pursuing a degree in higher education, and I'm working hard to increase my knowledge and acquire the abilities needed to succeed in the fast-paced field of computer science and engineering. This route exemplifies my dedication to both professional and personal development as I work to significantly impact the world of technology and innovation.
</p>

        <img
          className="scroll-up"
          src="\images\img-13.jpg"
          alt="Image 2"
        />
      </div>

      <div className="scroll-up content">
      </div>

     
    </div>
  );
}
